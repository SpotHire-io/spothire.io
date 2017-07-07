import 'moment/locale/en-ca'
import * as React from 'react'
import * as moment from 'moment'
import * as classNames from 'classnames'
import { Checkbox, Close } from 'rebass'
const TimePicker = require('rc-time-picker')
import BasicButton from '../../components/Buttons/BasicButton'
import {Person, TimeSlot, Availability, Days} from '../../schemas'

interface Props {
    className?: string
    employee: Person
    onSubmitAvailability: React.EventHandler<React.MouseEvent<{}>>
    availability?: Availability
}

interface State {
    availability?: Availability
    defaultTimeSlot?: TimeSlot
}

const defaultTimeSlot: TimeSlot = {
    start: moment('08:00', 'kk:mm'),
    end: moment('12:00', 'kk:mm'),
}

export default class AvailabilityEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super()
        this.state = {
            defaultTimeSlot,
            availability: props.employee.availability,
        }
    }

    private toggleDayAvailability = (day: Days, dayIndex: number) => {
        let availability = {...this.state.availability}
        let initialTimeSlot = {...this.state.defaultTimeSlot}

        if (!availability[day].length) {
            // set initial slot ID to base ID for day, according to the day's index
            initialTimeSlot.id = dayIndex * 100

            // set day up with default time slot
            availability[day] = [initialTimeSlot]
        } else {
            // reset day's availability
            availability[day] = []
        }

        this.setState({ availability })
    }

    private addSlotToDay = (day: Days, dayIndex: number) => {
        let availability = {...this.state.availability}
        let timeSlot = {...defaultTimeSlot}

        timeSlot.id = (dayIndex * 100) + availability[day].length // ID: index of the day of the week in first column slot # in second, third column

        availability[day].push(timeSlot)

        this.setState({ availability })
    }

    private deleteSlotFromDay = (day: Days, slotId: number) => {
        let availability = {...this.state.availability}

        // find index of slot within day, then remove it from the day array
        availability[day].splice(availability[day].findIndex((slot) => slot.id === slotId), 1)

        // if there's no more slots in the day, automatically set it to unavailable
        if (availability[day].length === 0) {
            availability[day] = []
        }

        this.setState({ availability })
    }

    private setSlotTime = (day: Days, slotIndex: number, endToModify: string, newTime: moment.Moment) => {
        const availability = {...this.state.availability}

        availability[day][slotIndex][endToModify] = newTime

        this.setState({ availability })
    }

    private renderTimePicker = (day: Days, timeSlot: TimeSlot, timeSlotIndex: number, end: string) => {
        return (
            <TimePicker
                value={moment(timeSlot[end])}
                showSecond={false}
                allowEmpty={false}
                use12Hours={true}
                onChange={(newTime: moment.Moment) => this.setSlotTime(day, timeSlotIndex, end, newTime)}
            />
        )
    }

    render() {
        console.log(this.state.availability)
        return (
            <div className={classNames(this.props.className)}>
                <ol className="list ma0 pa0 nt2">
                    {
                        Object.keys(this.state.availability).map((day: Days, index: number) => {
                            const currentDay = this.state.availability[day]

                            return (
                                <li key={day} className="ma0 ph0 pv2">
                                    <p className="b mt0 mb2">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                                    <Checkbox label="Available" name={'available_' + day} checked={!!currentDay.length} onClick={() => this.toggleDayAvailability(day, index)}/>
                                    {
                                        (currentDay.length)
                                            ? (
                                                <ol className="list pa0">
                                                    {currentDay.map((timeSlot, timeSlotIndex) => (
                                                        <li key={timeSlot.id} className="flex pa0">
                                                            {this.renderTimePicker(day, timeSlot, timeSlotIndex, 'start')}
                                                            <span className="self-center mh2">to</span>
                                                            {this.renderTimePicker(day, timeSlot, timeSlotIndex, 'end')}
                                                            <button className="ml2 input-reset bg-transparent hover-bg-red hover-white ba-0" onClick={() => this.deleteSlotFromDay(day, timeSlot.id)}><Close/></button>
                                                        </li>
                                                    ))}
                                                    <li className="tr mt2"><BasicButton type="positive" className="f6" onClick={() => this.addSlotToDay(day, index)}>Add Slot</BasicButton></li>
                                                </ol>
                                            ) : null
                                    }
                                </li>
                            )
                        })
                    }
                </ol>

                <div className="tr mt3">
                    <BasicButton type="positive" onClick={this.props.onSubmitAvailability}>Save Availability</BasicButton>
                </div>
            </div>
        )
    }
}
