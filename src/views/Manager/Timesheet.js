import 'react-select/dist/react-select.css'
import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import Box from '../../components/Global/Box'
import BoxConnector from '../../components/Global/BoxConnector'
import TimesheetSummary from '../../components/Employees/TimesheetSummary'
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

/**
 * At a glance timesheet information and reporting capabilities for all employees within the organisation.
 */
export default class TimesheetView extends React.Component {
    constructor() {
        super()

        this.state = {
            nameSearch: '',
            selectedUserIds: [],
            discrepancyType: null,
        }
    }

    render() {
        let filteredUsers = this.props.employees.filter(user => `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.indexOf(this.state.nameSearch.toLowerCase()) > -1)

        if (this.state.discrepancyType !== null) {
            switch (this.state.discrepancyType.value) {
                case 'underSubmitted':
                    filteredUsers = filteredUsers.filter(user => user.hours.worked > user.hours.submitted)
                    break;
                case 'overSubmitted':
                    filteredUsers = filteredUsers.filter(user => user.hours.submitted > user.hours.worked)
                    break;
                default:
                    break;
            }
        }

        let summarizedUsers = filteredUsers

        if (this.state.selectedUserIds.length > 0) {
            summarizedUsers = filteredUsers.filter(user => this.state.selectedUserIds.includes(user.id))
        }

        return (
            <div className='bg-near-white pa4'>
                <Box title='Summary' headingType='inline'>
                    <p className='mt0 measure'>Timesheet summary for {summarizedUsers.length} {(this.state.selectedUserIds.length > 0) ? 'selected' : 'displayed'} {(summarizedUsers.length === 1) ? 'employee' : 'employees'}.</p>

                    <TimesheetSummary className='mt3' users={summarizedUsers}/>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <Box title='Filters' headingType='inline'>
                    <label className='db mb2 f6' htmlFor='employees_category'>Discrepancy type</label>
                    <Select
                        name='employees_category'
                        className='mt0'
                        options={discrepancyTypesOptions}
                        value={this.state.discrepancyType}
                        onChange={discrepancyType => this.setState({ discrepancyType: discrepancyType })}
                    />

                    <p className='mt3'>
                        <label className='f6 db' htmlFor='employees_name'>Name</label>
                        <input className='mt2 w-100' type='text' id='employees_name' name='employees_name' value={this.state.nameSearch} onChange={(e) => this.setState({ nameSearch: e.target.value })}/>
                    </p>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <SelectableTimesheetTable
                    users={filteredUsers}
                    onUpdateSelectedUsers={selectedUserIds => this.setState({ selectedUserIds })}
                />
            </div>
        )
    }
}
