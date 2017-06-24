import Availability from './Availability';

interface Metadata {
    id: number
    key: string
    type: 'string' | 'number' | 'boolean'
    value?: string
}

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
