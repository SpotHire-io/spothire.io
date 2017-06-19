import 'moment/locale/en-ca';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasicButton from '../../../components/Buttons/BasicButton';
import PersonSchema from '../../../schemas/Person';
import TimeOffRequestSchema from '../../../schemas/TimeOffRequest';
import TimeOffRequestList from './List';
import NewTimeOffRequestModal from './Modal';

class TimeOffRequestRequester extends React.Component {
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
                <TimeOffRequestList timeOffRequests={this.state.requests} deleteRequest={this.deleteRequest}/>
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

TimeOffRequestRequester.defaultProps = {
    className: '',
};

TimeOffRequestRequester.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
};

export default TimeOffRequestRequester;
