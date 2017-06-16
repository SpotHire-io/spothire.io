import 'moment/locale/en-ca';
import React from 'react';
import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';
import moment from 'moment';
import classNames from 'classnames';
import BasicTag from '../Tags/BasicTag';
import BasicButton from '../Buttons/BasicButton';

class ShiftList extends React.Component {
    constructor(props) {
        super();

        this.toggleShiftEditing = this.toggleShiftEditing.bind(this);

        this.renderShiftRow = this.renderShiftRow.bind(this);
        this.renderShiftSummary = this.renderShiftSummary.bind(this);
        this.renderShiftDetails = this.renderShiftDetails.bind(this);
        this.renderShiftCell = this.renderShiftCell.bind(this);
        this.renderControls = this.renderControls.bind(this);
        this.renderHeaderCell = this.renderHeaderCell.bind(this);

        this.state = {
            currentlyEditingShiftId: null,
            shifts: props.shifts
        };
    }

    toggleShiftEditing(shiftId) {
        let currentlyEditingShiftId = parseInt(this.state.currentlyEditingShiftId, 10);

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
            'pointer hover-bg-black-10': shift.id !== this.state.currentlyEditingShiftId
        });

        return (
            <div key={shift.id} className={shiftClasses} onClick={() => (shift.id !== this.state.currentlyEditingShiftId) ? this.toggleShiftEditing(shift.id) : null}>
                {this.renderShiftSummary(shift, index)}
                {(shift.id === this.state.currentlyEditingShiftId) ? this.renderShiftDetails(shift, index) : null}
            </div>
        );
    }

    renderShiftSummary(shift, index) {
        const summaryWrapperClasses = classNames({
            'flex items-baseline': true,
            'pointer hover-bg-black-10': shift.id === this.state.currentlyEditingShiftId,
        });

        return (
            <div className={summaryWrapperClasses} onClick={() => (shift.id === this.state.currentlyEditingShiftId) ? this.toggleShiftEditing(shift.id) : null}>
                {this.renderShiftCell('startDate', shift.start.format('MMMM Do, YYYY'), 'w-20')}
                {this.renderShiftCell('startTime', shift.start.format('h:mm a'), 'w-20')}
                {this.renderShiftCell('endDate', shift.end.format('MMMM Do, YYYY'), 'w-20')}
                {this.renderShiftCell('endTime', shift.end.format('h:mm a'), 'w-20')}
                {this.renderShiftCell('controls', () => this.renderControls(shift), 'w-20')}
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
                aria-labelledby={`columnHeader_${column}`}
                className={cellClasses}
            >
                {(typeof value === 'string') ? value : value()}
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
            </div>
        );
    }

    renderShiftDetails(shift, index) {
        const renderRsvp = () => {
            if (! shift.isInvited) return;

            return (
                <div>
                    <p className="f6 mb2 mt0">RSVP</p>
                    <p className="mt0">You are <strong>{(shift.isConfirmed) ? 'confirmed' : 'invited'}</strong> {(shift.isConfirmed) ? 'for' : 'to'} this shift.</p>

                    <BasicButton
                        className={classNames({
                            'mt3 w-100': true,
                            'button--negative': shift.isConfirmed,
                            'button--positive': ! shift.isConfirmed,
                        })}
                    >
                        {(shift.isConfirmed) ? 'Cancel Confirmation' : 'Accept Invitation'}
                    </BasicButton>
                </div>
            );
        };

        return (
            <div className="pa2">
                <div className="flex mb2">
                    <div className="w-20">
                        <p className="f6 mb2 mt0">Length</p>
                        <p className="mt0">{shift.end.diff(shift.start, 'hours')} hrs</p>
                    </div>
                    <div className="w-40 ml1">
                        <p className="f6 mb2 mt0">Location</p>
                        <p className="mt0">Front door</p>
                    </div>
                    <div className="w-40 pl2">
                        <p className="f6 mb2 mt0">Notes</p>
                        <p className="mt0">{shift.notes}</p>
                    </div>
                </div>
                {renderRsvp()}
            </div>
        )
    }

    renderHeaderCell(column, value, className) {
        const cellClasses = classNames({
            'pa2 f6 normal tl no-select': true,
            [className]: true
        });

        return (
            <div
                id={`columnHeader_${column}`}
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
                    {this.renderHeaderCell('startDate', 'Start Date', 'w-20')}
                    {this.renderHeaderCell('startTime', 'Start Time', 'w-20')}
                    {this.renderHeaderCell('endDate', 'End Date', 'w-20')}
                    {this.renderHeaderCell('endTime', 'End Time', 'w-20')}
                    {this.renderHeaderCell('controls', 'Controls', 'transparent w-20')}
                </div>
                {this.state.shifts.map((shift, index) => this.renderShiftRow(shift, index))}
            </div>
        )
    }
}

ShiftList.defaultProps = {
    className: '',
    shifts: [
        {
            id: 0,
            start: moment(new Date(2017, 4, 1, 8, 0)),
            end: moment(new Date(2017, 4, 1, 16, 0)),
            notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
            isInvited: true,
            isConfirmed: false,
        },
        {
            id: 1,
            start: moment(new Date(2017, 4, 1, 16, 0)),
            end: moment(new Date(2017, 4, 2, 0, 0)),
            notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
            isInvited: true,
            isConfirmed: true,
        },
        {
            id: 2,
            start: moment(new Date(2017, 4, 1, 16, 0)),
            end: moment(new Date(2017, 4, 2, 0, 0)),
            notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
            isInvited: false,
            isConfirmed: false,
        }
    ],
};

ShiftList.propTypes = {
    className: PropTypes.string,
    shifts: PropTypes.arrayOf(OpportunitySchema).isRequired,
};

export default ShiftList;
