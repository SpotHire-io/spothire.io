import 'moment/locale/en-ca';
import moment from 'moment';
import React from 'react';
import classNames from 'classnames';
import BasicTag from '../../../components/Tags/BasicTag';

/**
 * List of time off requests, with an interface according to whether the person is
 * a requester (employee) or reviewer (manager).
 *
 * If in reviewer mode, include functions for `props.deleteRequest`, `props.approveRequest`,
 * and `props.rejectRequest`.
 */
const List = (props) => {
    if (props.timeOffRequests.length <= 0) {
        return <p className="i">No requests found.</p>;
    }

    const renderControls = (request) => {
        const renderLink = (action) => (
            <a
                className="child db f6 red hover-no-underline relative"
                onClick={(e) => e.preventDefault() || props[`${action}Request`](request.id)}
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
                    {(request.approvalState !== 'approved') ? renderLink('approve') : null}
                    {(request.approvalState !== 'rejected') ? renderLink('reject') : null}
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

                    const renderDate = end => moment(request.dates[end]).format('MMMM Do, YYYY');
                    const renderTime = end => (! request.isAllDay) ? <small className="mh1">({moment(request.dates[end]).format('h:mm a')})</small> : null;
                    const renderDateTime = end => <span>{renderDate(end)} {renderTime(end)}</span>;

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
                                    {renderControls(request)}
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );
}

List.defaultProps = {
    className: '',
    interfaceType: 'requester',
};

export default List;
