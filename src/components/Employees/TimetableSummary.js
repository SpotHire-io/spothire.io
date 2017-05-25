import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment-duration-format';

import PersonSchema from '../../schemas/Person';

class TimetableSummary extends React.Component {
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
        ];

        return (
            <dl className={classNames(this.props.className)}>
                {
                    summaryData.map((summaryDatum) => (
                        <div className="mt3">
                            <dt className="f6">{summaryDatum.label}</dt>
                            <dd className="ml0 mt1">{summaryDatum.value}</dd>
                        </div>
                    ))
                }
            </dl>
        )
    }
}

TimetableSummary.defaultProps = {
    className: '',
    hasShadow: true,
};

TimetableSummary.propTypes = {
    className: PropTypes.string,
    users: PropTypes.arrayOf(PersonSchema).isRequired,
};

export default TimetableSummary;
