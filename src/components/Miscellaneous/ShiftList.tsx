import 'moment/locale/en-ca'
import * as React from 'react'
import * as moment from 'moment'
import * as classNames from 'classnames'
import BasicTag from '../Tags/BasicTag'
import BasicButton from '../Buttons/BasicButton'
import ShiftsData from '../../data/shifts'
import {Opportunity, Shift} from '../../schemas'

interface Props {
    className?: string
    shifts: Shift[]
}

interface State {
    shifts: Shift[]
    currentlyEditingShiftId: number
}

export default class ShiftList extends React.Component<Props, State> {
    public static defaultProps = {
        className: '',
        shifts: ShiftsData
    }
    constructor(props: Props) {
        super()
        this.state = {
            currentlyEditingShiftId: null,
            shifts: props.shifts
        }
    }

    toggleShiftEditing = (shiftId: number) => {
        let currentlyEditingShiftId = this.state.currentlyEditingShiftId

        // Unset the currently editing shift if we’re toggling that shift. Else, set to the new shift ID.
        if (shiftId === currentlyEditingShiftId) {
            currentlyEditingShiftId = null
        } else {
            currentlyEditingShiftId = shiftId
        }

        return this.setState({ currentlyEditingShiftId })
    }

    renderShiftRow = (shift: Shift, index: number) => {
        const shiftClasses = classNames({
            'pa2 mt0 bb b--black-20': true,
            'pointer hover-bg-black-10': shift.id !== this.state.currentlyEditingShiftId
        })

        return (
            <div key={shift.id} className={shiftClasses} onClick={() => (shift.id !== this.state.currentlyEditingShiftId) ? this.toggleShiftEditing(shift.id) : null}>
                {this.renderShiftSummary(shift, index)}
                {(shift.id === this.state.currentlyEditingShiftId) ? this.renderShiftDetails(shift, index) : null}
            </div>
        )
    }

    renderShiftSummary = (shift: Shift, index: number) => {
        const summaryWrapperClasses = classNames({
            'flex items-baseline': true,
            'pointer hover-bg-black-10': shift.id === this.state.currentlyEditingShiftId,
        })

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

    renderShiftCell = (column: string, value: string | React.ReactNode, className: string) => {
        const cellClasses = classNames({
            'pa2': true,
            [className]: true
        })

        return (
            <div
                aria-labelledby={`columnHeader_${column}`}
                className={cellClasses}
            >
                {value}
            </div>
        )
    }

    renderControls = (shift: Shift) => {
        const renderTag = () => {
            if (! shift.isInvited) return

            return <BasicTag type={(shift.isConfirmed) ? 'positive' : 'neutral'} isNarrow>{(shift.isConfirmed) ? 'confirmed' : 'invited'}</BasicTag>
        }

        return (
            <div className="tr">
                {renderTag()}
            </div>
        )
    }

    renderShiftDetails = (shift: Shift, index: number) => {
        const renderRsvp = () => {
            if (! shift.isInvited) return

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
            )
        }

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

    renderHeaderCell = (column: string, value: string | React.ReactNode, className: string) => {
        const cellClasses = classNames({
            'pa2 f6 normal tl no-select': true,
            [className]: true
        })

        return (
            <div
                id={`columnHeader_${column}`}
                className={cellClasses}
            >
                {value}
            </div>
        )
    }

    render() {
        const wrapperClasses = classNames({
            'bg-white ba b--black-20 w-100': true,
            [this.props.className]: true
        })

        return (
            <div className={wrapperClasses}>
                <div className="flex bb bw1 b--black-20 ph2 pv1">
                    {this.renderHeaderCell('startDate', 'Start Date', 'w-20')}
                    {this.renderHeaderCell('startTime', 'Start Time', 'w-20')}
                    {this.renderHeaderCell('endDate', 'End Date', 'w-20')}
                    {this.renderHeaderCell('endTime', 'End Time', 'w-20')}
                    {this.renderHeaderCell('controls', 'Controls', 'transparent w-20')}
                </div>
                {this.state.shifts.map((shift: Shift, index: number) => this.renderShiftRow(shift, index))}
            </div>
        )
    }
}
