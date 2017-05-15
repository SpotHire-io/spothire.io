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

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        const currentlyEditingShift = this.state.shifts.find((shift) => shift.id === this.state.currentlyEditingShiftId);

        return (
            <div className={wrapperClasses}>
                <div className="flex">
                    <ol className="list ma0 pl0 br b--black-20">
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
                        <li className="pa3 underline hover-no-underline pointer">
                            <span className="dib mr2 no-underline">+</span>
                            Add new
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