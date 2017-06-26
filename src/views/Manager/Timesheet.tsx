import 'react-select/dist/react-select.css'
import * as React from 'react'
import * as Select from 'react-select'
import * as PropTypes from 'prop-types'
import Box from '../../components/Global/Box'
import BoxConnector from '../../components/Global/BoxConnector'
import {Person} from '../../schemas'
import TimetableSummary from '../../components/Employees/TimetableSummary'
import SelectableTimesheetTable from '../../components/Employees/SelectableTimesheetTable'

const discrepancyTypesOptions = [
    {
        value: 'underSubmitted',
        label: 'Employees with more hours worked than submitted',
    },
    {
        value: 'overSubmitted',
        label: 'Employees with more hours submitted than worked',
    },
]

interface Props {
    className?: string
    employees: Person[]
}

interface State {
    nameSearch: string
    discrepancyType?: DiscrepancyTypes
    selectedUserIds: number[]
}

type DiscrepancyTypes = {
    value: string
    label: string
}

export default class TimesheetView extends React.Component<Props, State> {
    constructor() {
        super()

        this.state = {
            nameSearch: '',
            selectedUserIds: []
        }
    }

    render() {
        let filteredUsers = this.props.employees.filter((user: Person) => `${user.firstName} ${user.lastName}`.indexOf(this.state.nameSearch) > -1)
        console.log(filteredUsers)
        console.log(this.state.discrepancyType)
        switch (this.state.discrepancyType.value) {
        case 'underSubmitted':
            filteredUsers = filteredUsers.filter((user: Person) => user.hours.worked > user.hours.submitted)
            break
        case 'overSubmitted':
            filteredUsers = filteredUsers.filter((user: Person) => user.hours.submitted > user.hours.worked)
        }

        let summarizedUsers = filteredUsers

        if (this.state.selectedUserIds.length > 0) {
            summarizedUsers = filteredUsers.filter((user: Person) => this.state.selectedUserIds.includes(user.id))
        }

        return (
            <div className='bg-near-white pa4'>
                <Box title='Summary' headingType='inline'>
                    <p className='mt0 measure'>Timesheet summary for {summarizedUsers.length} {(this.state.selectedUserIds.length > 0) ? 'selected' : 'displayed'} {(summarizedUsers.length === 1) ? 'employee' : 'employees'}.</p>

                    <TimetableSummary className='mt3' users={summarizedUsers}/>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <Box title='Filters' headingType='inline'>
                    <label className='db mb2 f6' htmlFor='employees_category'>Discrepancy type</label>
                    <Select
                        name='employees_category'
                        className='mt0'
                        options={discrepancyTypesOptions}
                        value={this.state.discrepancyType.label}
                        onChange={(discrepancyType: DiscrepancyTypes) => (discrepancyType !== null) ? this.setState({ discrepancyType: discrepancyType }) : this.setState({ discrepancyType: null })}
                    />

                    <p className='mt3'>
                        <label className='f6 db' htmlFor='employees_name'>Name</label>
                        <input className='mt2 w-100' type='text' id='employees_name' name='employees_name' value={this.state.nameSearch} onChange={(e) => this.setState({ nameSearch: e.target.value })}/>
                    </p>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <SelectableTimesheetTable
                    users={filteredUsers}
                    onUpdateSelectedUsers={(selectedUserIds: number[]) => this.setState({ selectedUserIds })}
                />
            </div>
        )
    }
}
