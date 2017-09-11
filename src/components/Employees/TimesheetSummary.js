import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment-duration-format';

/**
 * Summarizes timesheet details for the provided employees by aggregating them.
 */
const TimesheetSummary = ({ className = '', users }) => {
    const overSubmittedUserCount = users.reduce((overSubmittedUsers, user) => (user.hours.submitted > user.hours.worked) ? overSubmittedUsers + 1 : overSubmittedUsers, 0);
    const underSubmittedUserCount = users.reduce((underSubmittedUsers, user) => (user.hours.submitted < user.hours.worked) ? underSubmittedUsers + 1 : underSubmittedUsers, 0);

    const summaryData = [
        {
            label: 'Total hours worked',
            value: moment.duration(users.reduce((hours, user) => hours += user.hours.worked, 0), 'hours').format('h:mm'),
        },
        {
            label: 'Total hours submitted',
            value: moment.duration(users.reduce((hours, user) => hours += user.hours.submitted, 0), 'hours').format('h:mm'),
        },
        {
            label: 'Submitted hours greater than worked',
            value: `${overSubmittedUserCount} ${(overSubmittedUserCount === 1) ? 'employee' : 'employees'}`,
        },
        {
            label: 'Submitted hours less than worked',
            value: `${underSubmittedUserCount} ${(underSubmittedUserCount === 1) ? 'employee' : 'employees'}`,
        },
    ];

    return (
        <dl className={classNames('cf ma0 nb3', className)}>
            {
                summaryData.map((summaryDatum) => (
                    <div className="fl mw5 mb3 mr3">
                        <dt className="f6">{summaryDatum.label}</dt>
                        <dd className="ml0 mt1">{summaryDatum.value}</dd>
                    </div>
                ))
            }
        </dl>
    )
}

export default TimesheetSummary;
