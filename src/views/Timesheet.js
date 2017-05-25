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

        return (
            <div className="flex bg-near-white pa4">
                <FilterContainer className="mr3 w-third self-start">
                    <Filter
                        id="text1"
                        label="Other text filter"
                        type="text"
                        data={{
                            placeholder: 'A text filter'
                        }}
                    />
                    <Filter
                        id="text2"
                        label="Text filter"
                        type="text"
                        data={{
                            placeholder: 'Another text filter'
                        }}
                    />
                    <Filter
                        id="select1"
                        label="Single select"
                        type="select"
                        data={{
                            inputProps: {
                                id: 'select1'
                            },
                            options: [
                                {
                                    value: '1',
                                    label: 'Option 1'
                                },
                                {
                                    value: '2',
                                    label: 'Option 2'
                                }
                            ]
                        }}
                    />
                    <Filter
                        id="select2"
                        label="Multi select"
                        type="select"
                        data={{
                            inputProps: {
                                id: 'select2'
                            },
                            options: [
                                {
                                    value: '1',
                                    label: 'Option 1'
                                },
                                {
                                    value: '2',
                                    label: 'Option 2'
                                }
                            ],
                            selectConfig: {
                                multi: true
                            }
                        }}
                    />
                </FilterContainer>
                <div className="w-two-thirds">
                    <Box>
                        <p>
                            <label className="f6 db" htmlFor="employees_search">Search</label>
                            <input className="mt2 w-100" type="text" id="employees_search" name="employees_search" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
                        </p>
                    </Box>

                    <BoxConnector isActive={this.state.searchQuery.length > 0}/>

                    <SelectableTimesheetTable
                        users={this.props.users}
                        tableProps={{
                            filterable: ['name'],
                            hideFilterInput: true,
                            filterBy: this.state.searchQuery,
                        }}
                        onClickUser={linkTo('Views', 'People:EmployeeSingleView')}
                    />

                    <BoxConnector isActive={false}/>

                    <Box>
                        <h2 className="f6 mt0 lh-title ttu">Summary</h2>
                        <TimetableSummary users={this.props.users}/>
                    </Box>
                </div>
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
