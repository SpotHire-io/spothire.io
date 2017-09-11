import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Global/Box';
import BoxConnector from '../../../components/Global/BoxConnector';
import BasicButton from '../../../components/Buttons/BasicButton';
import UserTable from '../../../components/Employees/UserTable';

// storybook stuff; @TODO: Replace usage of linkTo with react-router Link
import { linkTo } from '@kadira/storybook';

/**
 * Overview of all employees attached to the organisation, with management functions.
 */
class EmployeeListView extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            isAddingUser: false,
        };
    }

    render() {
        return (
            <div className="flex ma4">
                <div className="w-third mr3">
                    <Box title="Employees" headingType="inline">
                        <p>Your organisation has {this.props.employees.length} employees.</p>

                        <div className="tr">
                            <BasicButton type="positive" className="mt3" onClick={() => this.setState({ isAddingUser: ! this.state.isAddingUser })}>Add New</BasicButton>
                        </div>
                    </Box>
                </div>
                <div className="w-two-thirds">
                    <Box>
                        <p>
                            <label className="f6 db" htmlFor="employees_search">Search</label>
                            <input className="mt2 w-100" type="text" id="employees_search" name="employees_search" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
                        </p>
                    </Box>

                    <BoxConnector isActive={this.state.searchQuery.length > 0}/>

                    <UserTable
                        tableProps={{
                            filterable: ['name'],
                            hideFilterInput: true,
                            filterBy: this.state.searchQuery,
                        }}
                        inlineAddingRowIsOpen={this.state.isAddingUser}
                        onClickUser={linkTo('Views (manager)', 'People:EmployeeSingleView')}
                    />
                </div>
            </div>
        );
    }
}

EmployeeListView.defaultProps = {
    className: '',
};

// EmployeeListView.propTypes = {
//     className: PropTypes.string,
//     employees: PropTypes.arrayOf(PersonSchema).isRequired,
// };

export default EmployeeListView;
