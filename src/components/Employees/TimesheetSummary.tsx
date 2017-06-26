import * as React from 'react';
import * as classNames from 'classnames';
import * as moment from 'moment';
import 'moment/locale/en-ca';
import 'moment-duration-format';
import {Person} from '../../schemas';


interface Props {
    className?: string
    users: Person[]
}

const TimesheetSummary: React.StatelessComponent<Props> = ({ className = '', users }) => {
    const overSubmittedUserCount = this.props.users.reduce((overSubmittedUsers: number, user: Person) => (user.hours.submitted > user.hours.worked) ? overSubmittedUsers + 1 : overSubmittedUsers, 0);
    const underSubmittedUserCount = this.props.users.reduce((underSubmittedUsers: number, user: Person) => (user.hours.submitted < user.hours.worked) ? underSubmittedUsers + 1 : underSubmittedUsers, 0);

    const summaryData = [
        {
            label: 'Total hours worked',
            value: moment.duration(this.props.users.reduce((hours: number, user: Person) => hours += user.hours.worked, 0), 'hours').format('h:mm'),
        },
        {
            label: 'Total hours submitted',
            value: moment.duration(this.props.users.reduce((hours: number, user: Person) => hours += user.hours.submitted, 0), 'hours').format('h:mm'),
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
        <dl className={classNames('cf ma0 nb3', this.props.className)}>
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
