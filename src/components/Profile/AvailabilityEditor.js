import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import BasicButton from '../../components/Buttons/BasicButton';

import { Checkbox, Close } from 'rebass';

import Icon from 'react-geomicons';

import TimePicker from 'rc-time-picker';

class AvailabilityEditor extends React.Component {
    constructor(props) {
        super();

        this.toggleDayAvailability = this.toggleDayAvailability.bind(this);
        this.addSlotToDay = this.addSlotToDay.bind(this);
        this.deleteSlotFromDay = this.deleteSlotFromDay.bind(this);
        this.setSlotTime = this.setSlotTime.bind(this);

        this.defaultTimeSlot = {
            id: null,
            start: moment('08:00', 'kk:mm'),
            end: moment('12:00', 'kk:mm'),
        };

        this.state = {
            availability: {
                Monday: false,
                Tuesday: [
                    {
                        id: 100,
                        start: moment('08:00', 'kk:mm'),
                        end: moment('12:00', 'kk:mm'),
                    },
                ],
                Wednesday: false,
                Thursday: false,
                Friday: [
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
                Saturday: false,
                Sunday: [
                    {
                        id: 600,
                        start: moment('08:00', 'kk:mm'),
                        end: moment('12:00', 'kk:mm'),
                    },
                ],
            }
        };
    }

    toggleDayAvailability(day, dayIndex) {
        let availability = {...this.state.availability};
        let initialTimeSlot = {...this.state.defaultTimeSlot};

        if (availability[day] === false) {
            // set initial slot ID to base ID for day, according to the day's index
            initialTimeSlot.id = dayIndex * 100;

            // set day up with default time slot
            availability[day] = [initialTimeSlot];
        } else {
            // reset day's availability
            availability[day] = false;
        }

        this.setState({ availability });
    }

    addSlotToDay(day, dayIndex) {
        let availability = {...this.state.availability};
        let timeSlot = {...this.defaultTimeSlot};

        timeSlot.id = (dayIndex * 100) + availability[day].length; // ID: index of the day of the week in first column; slot # in second, third column

        availability[day].push(timeSlot);

        this.setState({ availability });
    }

    deleteSlotFromDay(day, slotId) {
        let availability = {...this.state.availability};

        // find index of slot within day, then remove it from the day array
        availability[day].splice(availability[day].findIndex((slot) => slot.id === slotId), 1);

        // if there's no more slots in the day, automatically set it to unavailable
        if (availability[day].length === 0) {
            availability[day] = false;
        }

        this.setState({ availability });
    }

    setSlotTime(day, slotIndex, endToModify, newTime) {
        const availability = {...this.state.availability};

        availability[day][slotIndex][endToModify] = newTime;

        this.setState({ availability });
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <ol className="list ma0 pa0 nt2">
                    {
                        Object.keys(this.state.availability).map((day, index) => {
                            const currentDay = this.state.availability[day];

                            return (
                                <li key={day} className="ma0 ph0 pv2">
                                    <p className="b mt0 mb2">{day}</p>
                                    <Checkbox label="Available" name={'available_' + day} checked={currentDay !== false} onClick={() => this.toggleDayAvailability(day, index)}/>

                                    {
                                        (currentDay !== false)
                                            ? (
                                                <ol className="list pa0">
                                                    {currentDay.map((timeSlot, timeSlotIndex) => (
                                                        <li key={timeSlot.id} className="flex pa0">
                                                            <TimePicker
                                                                value={moment(timeSlot.start)}
                                                                showSecond={false}
                                                                allowEmpty={false}
                                                                use12Hours={true}
                                                                onChange={newTime => this.setSlotTime(day, timeSlotIndex, 'start', newTime)}
                                                            />
                                                            <span className="self-center mh2">to</span>
                                                            <TimePicker
                                                                value={moment(timeSlot.end)}
                                                                showSecond={false}
                                                                allowEmpty={false}
                                                                use12Hours={true}
                                                                onChange={newTime => this.setSlotTime(day, timeSlotIndex, 'end', newTime)}
                                                            />
                                                            <button className="ml2 input-reset bg-transparent hover-bg-red hover-white ba-0" onClick={() => this.deleteSlotFromDay(day, timeSlot.id)}><Close/></button>
                                                        </li>
                                                    ))}
                                                    <li className="tr mt2"><BasicButton className="button--positive f6" onClick={() => this.addSlotToDay(day, index)}>Add Slot</BasicButton></li>
                                                </ol>
                                            ) : null
                                    }
                                </li>
                            );
                        })
                    }
                </ol>

                <div className="tr mt3">
                    <BasicButton className="button--positive" onClick={this.props.onSubmitAvailability}>Save Availability</BasicButton>
                </div>
            </div>
        );
    }
}

AvailabilityEditor.defaultProps = {
    className: '',
};

AvailabilityEditor.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
    onSubmitAvailability: PropTypes.func.isRequired,
};

export default AvailabilityEditor;
