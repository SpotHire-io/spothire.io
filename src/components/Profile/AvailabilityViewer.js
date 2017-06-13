import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

const mockAvailability = {
    monday: false,
    tuesday: [
        {
            id: 100,
            start: moment('08:00', 'kk:mm'),
            end: moment('12:00', 'kk:mm'),
        },
    ],
    wednesday: false,
    thursday: false,
    friday: [
        {
            id: 400,
            start: moment('08:00', 'kk:mm'),
            end: moment('12:00', 'kk:mm'),
        },
        {
            id: 401,
            start: moment('16:00', 'kk:mm'),
            end: moment('22:00', 'kk:mm'),
        },
    ],
    saturday: false,
    sunday: [
        {
            id: 600,
            start: moment('08:00', 'kk:mm'),
            end: moment('12:00', 'kk:mm'),
        },
    ],
};

const AvailabilityViewer = ({ className, employee }) => {
    return (
        <div className={classNames(this.props.className)}/>
    );
};

AvailabilityViewer.defaultProps = {
    className: '',
};

AvailabilityViewer.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
};

export default AvailabilityViewer;
