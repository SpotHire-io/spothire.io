import 'moment/locale/en-ca';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasicTag from '../../components/Tags/BasicTag';
import BasicButton from '../../components/Buttons/BasicButton';
import PersonSchema from '../../schemas/Person';
import TimeOffRequestSchema from '../../schemas/TimeOffRequest';
import NewTimeOffRequestModal from './NewTimeOffRequestModal';

class TimeOffRequestList extends React.Component {
    constructor(props) {
        super();

        this.openNewTimeOffRequestModal = this.openNewTimeOffRequestModal.bind(this);
        this.closeNewTimeOffRequestModal = this.closeNewTimeOffRequestModal.bind(this);

        this.addRequest = this.addRequest.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);

        this.state = {
            requests: props.timeOffRequests,
            isNewTimeOffRequestModalOpen: false,
        };
    }

    openNewTimeOffRequestModal() {
        this.setState({ isNewTimeOffRequestModalOpen: true });
    }

    closeNewTimeOffRequestModal() {
        this.setState({ isNewTimeOffRequestModalOpen: false });
    }

    addRequest(request) {
        let requests = [...this.state.requests];
        let newRequest = {...request};

        newRequest.id = this.props.timeOffRequests.reduce((currentHighestId, request) => {
            return Math.max(currentHighestId, request.id);
        }, -1) + 1;
        newRequest.employeeId = this.props.employee.id;
        newRequest.approvalState = 'pending';

        requests.push(newRequest);

        this.setState({ requests });
        this.closeNewTimeOffRequestModal();
    }

    deleteRequest(requestId) {
        let requests = [...this.state.requests];

        requests.splice(requests.findIndex((request) => request.id === requestId), 1);

        this.setState({ requests });
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                {
                    (this.state.requests.length > 0)
                        ? (
                            <ol className="list ma0 pa0 nt3">
                                {
                                    this.state.requests.map((request, index) => {
                                        let tagType = 'neutral';

                                        if (request.approvalState === 'approved') {
                                            tagType = 'positive';
                                        } else if (request.approvalState === 'rejected') {
                                            tagType = 'negative';
                                        }

                                        const renderDate = (end) => moment(request.dates[end]).format('MMMM Do, YYYY');
                                        const renderTime = (end) => (! request.isAllDay) ? <small className="mh1">({moment(request.dates[end]).format('h:mm a')})</small> : null;
                                        const renderDateTime = (end) => <span>{renderDate(end)} {renderTime(end)}</span>;

                                        return (
                                            <li key={request.id} className="ma0 pa0 mt3 hide-child">
                                                <div className="flex justify-between items-baseline mb1">
                                                    <p className="mt0">
                                                        {renderDateTime('start')} to {renderDateTime('end')}
                                                    </p>
                                                    <div className="tr">
                                                        <BasicTag className="ml2" type={tagType} isNarrow>{request.approvalState}</BasicTag>
                                                        <a className="child db f6 red hover-no-underline relative" onClick={(e) => e.preventDefault() || this.deleteRequest(request.id)} style={{ top: '0.25rem' }} href="#delete">delete</a>
                                                    </div>
                                                </div>
                                                <p className="mt0 f6">{request.reason}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ol>
                        )
                        : <p className="i">No requests found.</p>
                }
                <div className="tr mt3">
                    <BasicButton className="button--positive" onClick={() => this.openNewTimeOffRequestModal()}>New Request</BasicButton>
                </div>
                <NewTimeOffRequestModal
                    isOpen={this.state.isNewTimeOffRequestModalOpen}
                    closeModal={this.closeNewTimeOffRequestModal}
                    onSubmitRequest={this.addRequest}
                />
            </div>
        );
    }
}

TimeOffRequestList.defaultProps = {
    className: '',
};

TimeOffRequestList.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
};

export default TimeOffRequestList;
