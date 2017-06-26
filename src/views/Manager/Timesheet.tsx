import 'react-select/dist/react-select.css';
import * as React from 'react';
import * as Select from 'react-select';
import * as PropTypes from 'prop-types';
import Box from '../../components/Global/Box';
import BoxConnector from '../../components/Global/BoxConnector';
import PersonSchema from '../../schemas/Person';
import TimetableSummary from '../../components/Employees/TimetableSummary';
import SelectableTimesheetTable from '../../components/Employees/SelectableTimesheetTable';

class TimesheetView extends React.Component {
    constructor() {
        super();

        this.discrepancyTypes = [
            {
                value: 'underSubmitted',
                label: 'Employees with more hours worked than submitted',
            },
            {
                value: 'overSubmitted',
                label: 'Employees with more hours submitted than worked',
            },
        ];

        this.state = {
            nameSearch: '',
            selectedUserIds: [],
            discrepancyType: null, // oneOf[null, 'overSubmitted', 'underSubmitted']
        };
    }

    render() {
        let filteredUsers = this.props.employees.filter((user) => `${user.firstName} ${user.lastName}`.indexOf(this.state.nameSearch) > -1);

        if (this.state.discrepancyType === 'underSubmitted') {
            filteredUsers = filteredUsers.filter((user) => user.hours.worked > user.hours.submitted)
        } else if (this.state.discrepancyType === 'overSubmitted') {
            filteredUsers = filteredUsers.filter((user) => user.hours.submitted > user.hours.worked)
        }

        let summarizedUsers = filteredUsers;

        if (this.state.selectedUserIds.length > 0) {
            summarizedUsers = filteredUsers.filter((user) => this.state.selectedUserIds.includes(user.id));
        }

        return (
            <div className="bg-near-white pa4">
                <Box title="Summary" headingType="inline">
                    <p className="mt0 measure">Timesheet summary for {summarizedUsers.length} {(this.state.selectedUserIds.length > 0) ? 'selected' : 'displayed'} {(summarizedUsers.length === 1) ? 'employee' : 'employees'}.</p>

                    <TimetableSummary className="mt3" users={summarizedUsers}/>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <Box title="Filters" headingType="inline">
                    <label className="db mb2 f6" htmlFor="employees_category">Discrepancy type</label>
                    <Select
                        id="employees_category"
                        name="employees_category"
                        className="mt0"
                        options={this.discrepancyTypes}
                        value={this.state.discrepancyType}
                        onChange={(discrepancyType) => (discrepancyType !== null) ? this.setState({ discrepancyType: discrepancyType.value }) : this.setState({ discrepancyType: null })}
                    />

                    <p className="mt3">
                        <label className="f6 db" htmlFor="employees_name">Name</label>
                        <input className="mt2 w-100" type="text" id="employees_name" name="employees_name" value={this.state.nameSearch} onChange={(e) => this.setState({ nameSearch: e.target.value })}/>
                    </p>
                </Box>

                <BoxConnector isActive={this.state.nameSearch.length > 0}/>

                <SelectableTimesheetTable
                    users={filteredUsers}
                    onUpdateSelectedUsers={(selectedUserIds) => this.setState({ selectedUserIds })}
                />
            </div>
        );
    }
}

TimesheetView.defaultProps = {
    className: '',
};

// TimesheetView.propTypes = {
//     className: PropTypes.string,
//     employees: PropTypes.arrayOf(PersonSchema).isRequired,
// };

export default TimesheetView;
