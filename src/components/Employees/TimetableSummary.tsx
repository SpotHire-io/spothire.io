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

interface State {}

export default class TimetableSummary extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        hasShadow: true
    }
    render() {
        const summaryData = [
            {
                label: 'Total hours worked',
                value: moment.duration(this.props.users.reduce((hours, user) => hours += user.hours.worked, 0), 'hours').format('h:mm'),
            },
            {
                label: 'Total hours submitted',
                value: moment.duration(this.props.users.reduce((hours, user) => hours += user.hours.submitted, 0), 'hours').format('h:mm'),
            },
            {
                label: 'Submitted hours greater than worked',
                value: `${this.props.users.reduce((overSubmittedUsers, user) => (user.hours.submitted > user.hours.worked) ? overSubmittedUsers + 1 : overSubmittedUsers, 0)} employees`,
            },
            {
                label: 'Submitted hours less than worked',
                value: `${this.props.users.reduce((underSubmittedUsers, user) => (user.hours.submitted < user.hours.worked) ? underSubmittedUsers + 1 : underSubmittedUsers, 0)} employees`,
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
}
