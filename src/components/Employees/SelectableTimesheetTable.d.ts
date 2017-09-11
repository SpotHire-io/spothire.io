import * as React from 'react'
import { Person } from '../../schemas'

interface Props {
    className?: string
    users: Person[]
    hasShadow?: boolean
    tableProps?: any
    onUpdateSelectedUsers?: Function
}

interface State {
    selectedUserIds: number[]
}
export default class SelectableTimesheetTable extends React.Component<Props, State> {}
