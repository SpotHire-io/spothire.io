import 'moment/locale/en-ca';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasicTag from '../../../components/Tags/BasicTag';
import TimeOffRequestSchema from '../../../schemas/TimeOffRequest';

const TimeOffRequestList = ({ className, timeOffRequests, deleteRequest }) => {
    if (timeOffRequests.length <= 0) {
        return <p className="i">No requests found.</p>;
    }

    return (
        <ol className={classNames('list ma0 pa0 nt3', className)}>
            {
                timeOffRequests.map((request, index) => {
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
                                    <a className="child db f6 red hover-no-underline relative" onClick={(e) => e.preventDefault() || deleteRequest(request.id)} style={{ top: '0.25rem' }} href="#delete">delete</a>
                                </div>
                            </div>
                            <p className="mt0 f6">{request.reason}</p>
                        </li>
                    );
                })
            }
        </ol>
    );
}

TimeOffRequestList.defaultProps = {
    className: '',
};

TimeOffRequestList.propTypes = {
    className: PropTypes.string,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
    deleteRequest: PropTypes.func.isRequired,
};

export default TimeOffRequestList;
