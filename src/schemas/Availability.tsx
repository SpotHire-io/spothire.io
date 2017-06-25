
interface  TimeSlot {
    id: boolean
    start: string
    end: string
}

type DayAvailability = false | TimeSlot

interface Availability {
    monday: DayAvailability
    tuesday: DayAvailability
    wednesday: DayAvailability
    thursday: DayAvailability
    friday: DayAvailability
    saturday: DayAvailability
    sunday: DayAvailability
}

export default Availability;
