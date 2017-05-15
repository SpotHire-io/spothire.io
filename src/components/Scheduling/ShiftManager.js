import React from 'react';

import classNames from 'classnames';
import moment from 'moment';

import Box from '../Global/Box';

import BasicButton from '../Buttons/BasicButton';

import SingleDatePickerFocusContainer from '../Miscellaneous/SingleDatePickerFocusContainer';

import TimePicker from 'rc-time-picker';

import Icon from 'react-geomicons';

class ShiftManager extends React.Component {
    constructor() {
        super();

        this.setCurrentlyEditingShift = this.setCurrentlyEditingShift.bind(this);

        this.deleteShift = this.deleteShift.bind(this);
        this.createShift = this.createShift.bind(this);

        this.state = {
            currentlyEditingShiftId: 0,
            shifts: [
                {
                    id: 0,
                    title: 'First shift',
                    start: moment(new Date(2017, 4, 1, 8, 0)),
                    end: moment(new Date(2017, 4, 1, 16, 0)),
                },
                {
                    id: 1,
                    title: 'Second shift',
                    start: moment(new Date(2017, 4, 1, 16, 0)),
                    end: moment(new Date(2017, 4, 2, 0, 0)),
                },
                {
                    id: 2,
                    title: 'Third shift',
                    start: moment(new Date(2017, 4, 1, 8, 0)),
                    end: moment(new Date(2017, 4, 1, 16, 0)),
                },
                {
                    id: 3,
                    title: 'Fourth shift',
                    start: moment(new Date(2017, 4, 1, 16, 0)),
                    end: moment(new Date(2017, 4, 2, 0, 0)),
                },
                {
                    id: 4,
                    title: 'Super extra long shift name that goes on forever',
                    start: moment(new Date(2017, 4, 1, 16, 0)),
                    end: moment(new Date(2017, 4, 2, 0, 0)),
                }
            ]
        };
    }

    setCurrentlyEditingShift(currentlyEditingShiftId) {
        return this.setState({ currentlyEditingShiftId });
    }

    deleteShift(shiftId) {
        let shifts = [...this.state.shifts];

        // Drop the shift by finding its index
        shifts.splice(shifts.findIndex((shift) => shift.id === shiftId), 1);

        return this.setState({ shifts });
    }

    createShift() {
        let shifts = [...this.state.shifts];

        // extract the highest ID currently existing so we have something to mock
        const highestId = shifts.reduce((currentHighestId, shift) => {
            return Math.max(currentHighestId, shift.id);
        }, -1);

        shifts.push({
            id: highestId + 1,
            title: 'New',
            start: moment(new Date()),
            end: moment(new Date())
        });

        return this.setState({ shifts, currentlyEditingShiftId: highestId + 1 });
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        const currentlyEditingShift = this.state.shifts.find((shift) => shift.id === this.state.currentlyEditingShiftId);

        return (
            <div className={wrapperClasses}>
                <div className="flex">
                    <ol className="list ma0 pl0">
                        {
                            this.state.shifts.map((shift, index) => {
                                const wrapperClasses = classNames({
                                    'db pointer pa3 bg-light-gray underline-hover ma0 bt bl b--black-20 truncate w4': true,
                                    'bb': this.state.shifts.length === index + 1,
                                    'bg-white': shift.id === this.state.currentlyEditingShiftId
                                });

                                return (
                                    <li className={wrapperClasses} key={shift.id} onClick={() => this.setCurrentlyEditingShift(shift.id)}>
                                        <strong>{shift.title}</strong>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <button className="input-reset pa3 bg-transparent f5 w-100 tl underline hover-no-underline" onClick={() => this.createShift()}>Add Shift</button>
                        </li>
                    </ol>
                    <Box className="flex-auto">
                        {currentlyEditingShift.title}
                    </Box>
                </div>
            </div>
        )
    }
}

ShiftManager.defaultProps = {
    className: ''
};

export default ShiftManager;