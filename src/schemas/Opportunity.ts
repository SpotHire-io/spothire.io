import Employee from './Employee'

interface Opportunity {
    id: number
    isShift: boolean
    title: string
    isAllDay: boolean
    dates: {
        start: string
        end: string
    }
    employees: {
        invited: 'all' | 'available' | 'selected'
        confirmed?: Employee[]
    }
}
export default Opportunity;
