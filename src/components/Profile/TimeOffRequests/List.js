import 'moment/locale/en-ca';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasicTag from '../../../components/Tags/BasicTag';
import TimeOffRequestSchema from '../../../schemas/TimeOffRequest';

const TimeOffRequestList = (props) => {
    if (props.timeOffRequests.length <= 0) {
        return <p className="i">No requests found.</p>;
    }

    const renderControls = (requestId) => {
        const renderLink = (action) => (
            <a
                className="child db f6 red hover-no-underline relative"
                onClick={(e) => e.preventDefault() || props[`${action}Request`](requestId)}
                style={{ top: '0.25rem' }}
                href={`#${action}`}
            >
                {action}
            </a>
        );

        if (props.interfaceType === 'requester') {
            return renderLink('delete');
        } else if (props.interfaceType === 'reviewer') {
            return (
                <div>
                    {renderLink('approve')}
                    {renderLink('reject')}
                </div>
            )
        }
    };

    return (
        <ol className={classNames('list ma0 pa0 nt3', props.className)}>
            {
                props.timeOffRequests.map((request, index) => {
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
                                <div>
                                    <p className="mt0">
                                        {renderDateTime('start')} to {renderDateTime('end')}
                                    </p>
                                    <p className="mt2 f6">{request.reason}</p>
                                </div>
                                <div className="tr">
                                    <BasicTag className="ml2" type={tagType} isNarrow>{request.approvalState}</BasicTag>
                                    {renderControls(request.id)}
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );
}

TimeOffRequestList.defaultProps = {
    className: '',
    interfaceType: 'requester',
};

TimeOffRequestList.propTypes = {
    className: PropTypes.string,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
    interfaceType: PropTypes.oneOf(['requester', 'reviewer']),
    deleteRequest: PropTypes.func,
    approveRequest: PropTypes.func,
    rejectRequest: PropTypes.func,
};

export default TimeOffRequestList;
