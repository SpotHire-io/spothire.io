import React from 'react';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import Icon from 'react-geomicons';

import BasicButton from '../Buttons/BasicButton';

import BasicTag from '../Tags/BasicTag';

class ShiftList extends React.Component {
    constructor() {
        super();

        this.toggleShiftEditing = this.toggleShiftEditing.bind(this);

        this.renderShiftRow = this.renderShiftRow.bind(this);
        this.renderShiftHeader = this.renderShiftHeader.bind(this);
        this.renderShiftDetails = this.renderShiftDetails.bind(this);
        this.renderShiftCell = this.renderShiftCell.bind(this);
        this.renderControls = this.renderControls.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.state = {
            currentlyEditingShiftId: null,
            shifts: [
                {
                    id: 0,
                    start: moment(new Date(2017, 4, 1, 8, 0)),
                    end: moment(new Date(2017, 4, 1, 16, 0)),
                    isInvited: true,
                    isConfirmed: false,
                },
                {
                    id: 1,
                    start: moment(new Date(2017, 4, 1, 16, 0)),
                    end: moment(new Date(2017, 4, 2, 0, 0)),
                    isInvited: true,
                    isConfirmed: true,
                },
                {
                    id: 2,
                    start: moment(new Date(2017, 4, 1, 16, 0)),
                    end: moment(new Date(2017, 4, 2, 0, 0)),
                    isInvited: false,
                    isConfirmed: false,
                }
            ]
        };
    }

    toggleShiftEditing(shiftId) {
        let currentlyEditingShiftId = parseInt(this.state.currentlyEditingShiftId);

        // Unset the currently editing shift if we’re toggling that shift. Else, set to the new shift ID.
        if (shiftId === currentlyEditingShiftId) {
            currentlyEditingShiftId = null;
        } else {
            currentlyEditingShiftId = shiftId;
        }

        return this.setState({ currentlyEditingShiftId });
    }

    renderShiftRow(shift, index) {
        const shiftClasses = classNames({
            'pa2 mt0 bb b--black-20': true,
            'hover-bg-black-10': shift.id !== this.state.currentlyEditingShiftId
        });

        return (
            <div key={shift.id} className={shiftClasses}>
                {this.renderShiftHeader(shift, index)}
                {(shift.id === this.state.currentlyEditingShiftId) ? this.renderShiftDetails(shift, index) : null}
            </div>
        );
    }

    renderShiftHeader(shift, index) {
        return (
            <div className="flex items-baseline">
                {this.renderShiftCell('index', `${index + 1}`, 'w2 pl3')}
                {this.renderShiftCell('startDate', shift.start.format('MMMM Do, YYYY'), 'w-20')}
                {this.renderShiftCell('startTime', shift.start.format('h:mm a'), 'w-20')}
                {this.renderShiftCell('endDate', shift.end.format('MMMM Do, YYYY'), 'w-20')}
                {this.renderShiftCell('endTime', shift.end.format('h:mm a'), 'w-20')}
                {this.renderShiftCell('length', `${shift.end.diff(shift.start, 'hours')} hrs`, 'w-15')}
                {this.renderShiftCell('controls', () => this.renderControls(shift), 'w-15')}
            </div>
        )
    }

    renderShiftDetails(shift, index) {
        return (
            <div>
                <p>shift open</p>
            </div>
        )
    }

    renderShiftCell(column, value, className) {
        const cellClasses = classNames({
            'pa2': true,
            [className]: true
        });

        return (
            <div
                column={column}
                className={cellClasses}
            >
                {(typeof value == 'string') ? value : value()}
            </div>
        );
    }

    renderControls(shift) {
        const renderTag = () => {
            if (! shift.isInvited) return;

            return <BasicTag type={(shift.isConfirmed) ? 'positive' : 'neutral'} isNarrow>{(shift.isConfirmed) ? 'confirmed' : 'invited'}</BasicTag>;
        };

        return (
            <div className="tr">
                {renderTag()}
                <Icon color="#555555" name="compose" className="pointer relative ml2" style={{ top: '3px' }} onClick={() => this.toggleShiftEditing(shift.id)}/>
            </div>
        );
    }

    renderHeaderCell(column, value, className) {
        const cellClasses = classNames({
            'pa2 f6 normal tl no-select': true,
            [className]: true
        });

        return (
            <div
                column={column}
                className={cellClasses}
            >
                {value}
            </div>
        );
    }

    render() {
        const wrapperClasses = classNames({
            'bg-white ba b--black-20 w-100': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                <div className="flex bb bw1 b--black-20 ph2 pv1">
                    {this.renderHeaderCell('index', '#', 'w2 pl3')}
                    {this.renderHeaderCell('startDate', 'Start Date', 'w-20')}
                    {this.renderHeaderCell('startTime', 'Start Time', 'w-20')}
                    {this.renderHeaderCell('endDate', 'End Date', 'w-20')}
                    {this.renderHeaderCell('endTime', 'End Time', 'w-20')}
                    {this.renderHeaderCell('length', 'Length', 'w-15')}
                    {this.renderHeaderCell('controls', 'Controls', 'transparent w-15')}
                </div>
                {this.state.shifts.map((shift, index) => this.renderShiftRow(shift, index))}
            </div>
        )
    }
}

ShiftList.defaultProps = {
    className: ''
};

export default ShiftList;
