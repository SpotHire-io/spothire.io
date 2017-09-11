import * as React from 'react'
import { Person, TimeSlot, Availability } from '../../schemas'

interface Props {
    className?: string
    employee: Person
    onSubmitAvailability: React.EventHandler<React.MouseEvent<{}>>
}

interface State {
    availability?: Availability
    defaultTimeSlot?: TimeSlot
}

export default class AvailabilityEditor extends React.Component<Props, State> {}
