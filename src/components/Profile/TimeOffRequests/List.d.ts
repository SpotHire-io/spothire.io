import { StatelessComponent } from 'react'
import { TimeOffRequest } from '../../../schemas';

interface Props {
    className?: string
    timeOffRequests: TimeOffRequest[]
    interfaceType: 'requester'| 'reviewer'
    deleteRequest?: Function
    approveRequest?: Function
    rejectRequest?: Function
    [key: string]: any
}

declare const List: StatelessComponent<Props>
export default List
