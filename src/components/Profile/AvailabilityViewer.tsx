import 'moment/locale/en-ca'
import * as React from 'react'
import * as moment from 'moment'
import * as classNames from 'classnames'
import {Person} from '../../schemas'

interface Props {
    className?: string
    employee: Person
}

/**
 * Display an employee’s availability for each day of the week.
 *
 * Requires an employee (`props.employee`).
 */
const AvailabilityViewer: React.StatelessComponent<Props> = ({ className, employee }) => {
    return (
        <div className={classNames(className)}>
            <ol className="list ma0 pa0 nt2">
                {
                    Object.keys(employee.availability).map((day, index) => {
                        const currentDay = employee.availability[day]

                        return (
                            <li key={day} className="ma0 ph0 pv2">
                                <p className="b mt0 mb2">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                                {
                                    (currentDay.length)
                                        ? (
                                            <ol className="list pa0">
                                                {currentDay.map((timeSlot, timeSlotIndex) => (
                                                    <li key={timeSlot.id} className="pa0">
                                                        {moment(timeSlot.start).format('h:mm a')} to {moment(timeSlot.end).format('h:mm a')}
                                                    </li>
                                                ))}
                                            </ol>
                                        ) : <p className="i mt0">No availability set.</p>
                                }
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default AvailabilityViewer
