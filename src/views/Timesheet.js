import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../schemas/Person';

import classNames from 'classnames';

import Box from '../components/Global/Box';
import BoxConnector from '../components/Global/BoxConnector';

import SelectableTimesheetTable from '../components/Employees/SelectableTimesheetTable';
import TimetableSummary from '../components/Employees/TimetableSummary';

import FilterContainer from '../components/Filters/FilterContainer';
import Filter from '../components/Filters/Filter';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class TimesheetView extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            selectedUserIds: []
        };
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        const filteredUsers = this.props.users.filter((user) => `${user.firstName} ${user.lastName}`.indexOf(this.state.searchQuery) > -1);

        let summarizedUsers = filteredUsers;

        if (this.state.selectedUserIds.length > 0) {
            summarizedUsers = filteredUsers.filter((user) => this.state.selectedUserIds.includes(user.id));
        }

        return (
            <div className="bg-near-white pa4">
                <Box>
                    <h2 className="f6 mt0 lh-title ttu">Summary</h2>

                    <p className="measure">Hour summary for {summarizedUsers.length} {(this.state.selectedUserIds.length > 0) ? 'selected' : 'displayed'} {(summarizedUsers.length === 1) ? 'employee' : 'employees'}.</p>

                    <TimetableSummary className="mt3" users={summarizedUsers}/>
                </Box>

                <BoxConnector isActive={this.state.searchQuery.length > 0}/>

                <Box>
                    <p>
                        <label className="f6 db" htmlFor="employees_search">Search</label>
                        <input className="mt2 w-100" type="text" id="employees_search" name="employees_search" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
                    </p>
                </Box>

                <BoxConnector isActive={this.state.searchQuery.length > 0}/>

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

TimesheetView.propTypes = {
    className: PropTypes.string,
    users: PropTypes.arrayOf(PersonSchema).isRequired,
};

export default TimesheetView;
