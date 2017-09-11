import { StatelessComponent } from 'react'
import {Person} from '../../schemas'

interface Props {
    className?: string
    employee: Person
}

declare const AvailabilityViewer: StatelessComponent<Props>
export default AvailabilityViewer
