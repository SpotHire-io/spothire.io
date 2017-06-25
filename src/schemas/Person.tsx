import Availability from './Availability'
import {Metadata} from './Metadata'

interface Person {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    type: 'employee' | 'manager' | 'admin'
    imageSrc: string
    emergencyContactInformation: React.ReactNode
    metadata: Metadata[]
    availability: Availability
    hours: {
        worked?: number
        submitted?: number
    }
}

export default Person;
