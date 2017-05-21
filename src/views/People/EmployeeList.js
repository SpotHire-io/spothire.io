import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Box from '../../components/Global/Box';
import BoxConnector from '../../components/Global/BoxConnector';

import UserTable from '../../components/Employees/UserTable';

import FilterContainer from '../../components/Filters/FilterContainer';
import Filter from '../../components/Filters/Filter';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class EmployeeListView extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div className="flex ma4">
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

                    <UserTable
                        tableProps={{
                            filterable: ['name'],
                            hideFilterInput: true,
                            filterBy: this.state.searchQuery,
                        }}
                        onClickUser={linkTo('Views', 'People:EmployeeSingleView')}
                    />
                </div>
            </div>
        );
    }
}

EmployeeListView.defaultProps = {
    className: '',
};

EmployeeListView.propTypes = {
    className: PropTypes.string,
};

export default EmployeeListView;
