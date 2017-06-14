import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

const AvailabilityViewer = ({ className, employee }) => {
    return (
        <div className={classNames(className)}>
            <ol className="list ma0 pa0 nt2">
                {
                    Object.keys(employee.availability).map((day, index) => {
                        const currentDay = employee.availability[day];

                        return (
                            <li key={day} className="ma0 ph0 pv2">
                                <p className="b mt0 mb2">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                                {
                                    (currentDay !== false)
                                        ? (
                                            <ol className="list pa0">
                                                {currentDay.map((timeSlot, timeSlotIndex) => (
                                                    <li key={timeSlot.id} className="pa0">
                                                        {moment(timeSlot.start).format('h:mm a')} to {moment(timeSlot.end).format('h:mm a')}
                                                    </li>
                                                ))}
                                            </ol>
                                        ) : <p className="i mt0">No availability set.</p>
                                }
                            </li>
                        );
                    })
                }
            </ol>
        </div>
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
