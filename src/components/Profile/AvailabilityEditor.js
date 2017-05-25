import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import Box from '../../components/Global/Box';

import BasicButton from '../../components/Buttons/BasicButton';

import { Checkbox } from 'rebass';

import Icon from 'react-geomicons';

import TimePicker from 'rc-time-picker';

class AvailabilityEditor extends React.Component {
    constructor(props) {
        super();

        this.state = {
            availability: {
                Monday: false,
                Tuesday: [
                    {
                        id: 1000,
                        start: moment('08:00', 'kk:mm'),
                        end: moment('12:00', 'kk:mm'),
                    },
                ],
                Wednesday: false,
                Thursday: false,
                Friday: [
                    {
                        id: 2000,
                        start: moment('08:00', 'kk:mm'),
                        end: moment('12:00', 'kk:mm'),
                    },
                    {
                        id: 3000,
                        start: moment('16:00', 'kk:mm'),
                        end: moment('22:00', 'kk:mm'),
                    },
                ],
                Saturday: false,
                Sunday: false,
            }
        };
    }

    render() {
        return (
            <Box className={classNames(this.props.className)} title="Availability">
                <ol className="list ma0 pa0">
                    {
                        Object.keys(this.state.availability).map((day, index) => {
                            const currentDay = this.state.availability[day];

                            return (
                                <li key={day} className="ma0 ph0 pv2">
                                    <p className="b ma0">{day}</p>
                                    <Checkbox label="Available" name={'available_' + day} checked={currentDay !== false}/>

                                    {
                                        (currentDay !== false)
                                            ? (
                                                <ol className="list pa0">
                                                    {currentDay.map((timeSlot) => (
                                                        <li key={timeSlot.id} className="flex pa0">
                                                            <TimePicker
                                                                value={moment(timeSlot.start)}
                                                                showSecond={false}
                                                                allowEmpty={false}
                                                                use12Hours={true}
                                                                onChange={newTime => console.log(newTime)}
                                                            />
                                                            <span className="self-center mh2">to</span>
                                                            <TimePicker
                                                                value={moment(timeSlot.end)}
                                                                showSecond={false}
                                                                allowEmpty={false}
                                                                use12Hours={true}
                                                                onChange={newTime => console.log(newTime)}
                                                            />
                                                        </li>
                                                    ))}
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
            </Box>
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
