import { StatelessComponent } from 'react'
import { Person } from '../../schemas';

interface Props {
    className?: string
    users: Person[]
}

declare const TimesheetSummary: StatelessComponent<Props>
export default TimesheetSummary
