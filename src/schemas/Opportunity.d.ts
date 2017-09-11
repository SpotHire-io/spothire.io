import { Employee } from './Employee'

export interface Opportunity {
    id: number
    isShift: boolean
    title: string
    isAllDay: boolean
    dates: {
        start: string
        end: string
        [key: string]: any
    }
    employees: {
        invited: 'all' | 'available' | 'selected'
        confirmed?: Employee[]
    },
    [key: string]: any
}
