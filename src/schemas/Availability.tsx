import * as moment from 'moment'

export interface TimeSlot {
    id?: number
    start: moment.Moment
    end: moment.Moment
    [modifier: string]: moment.Moment | number
}

export type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export interface Availability {
    monday: TimeSlot[]
    tuesday: TimeSlot[]
    wednesday: TimeSlot[]
    thursday: TimeSlot[]
    friday: TimeSlot[]
    saturday: TimeSlot[]
    sunday: TimeSlot[]
    [day: string]: TimeSlot[]
}
