import React from 'react';

import classNames from 'classnames';
import moment from 'moment';

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
                    <ol className="list ma0 pl0 bb br b--black-10">
                        {
                            this.state.shifts.map((shift) => {
                                const wrapperClasses = classNames({
                                    'db pointer pa3 bg-light-gray underline-hover ma0 bt bl b--black-10': true,
                                    'bg-white': shift.id === this.state.currentlyEditingShiftId
                                });

                                return (
                                    <li className={wrapperClasses} key={shift.id}>
                                        <strong>{shift.title}</strong>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <div>
                        <h2>{currentlyEditingShift.title}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

ShiftManager.defaultProps = {
    className: ''
};

export default ShiftManager;