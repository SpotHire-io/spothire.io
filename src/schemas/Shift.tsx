import * as moment from 'moment'

export interface Shift {
    id: number
    start: moment.Moment
    end: moment.Moment
    notes: string
    isInvited: boolean
    isConfirmed: boolean
}
