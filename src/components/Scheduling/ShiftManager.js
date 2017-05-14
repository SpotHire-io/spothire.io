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
            currentlyEditingShiftId: null,
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

        return (
            <div className={wrapperClasses}>

            </div>
        )
    }
}

ShiftManager.defaultProps = {
    className: ''
};

export default ShiftManager;