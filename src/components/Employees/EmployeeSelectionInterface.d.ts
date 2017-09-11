import * as React from 'react'
import { Employee, Group } from '../../schemas'

interface Props {
    className?: string
    employees?: Employee[]
    groups?: Group[]
    enabledSelectionCategories?: any[]
}

interface State {
    selectedEmployees: {
        employees: Employee[]
        groups: Group[]
        customRules: any[]
    }
}
export default class EmployeeSelectionInterface extends React.Component<Props, State> {}
