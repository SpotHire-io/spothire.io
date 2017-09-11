import React from 'react'
import classNames from 'classnames'
import { range } from 'lodash'
import BasicButton from '../../components/Buttons/BasicButton'
import SelectEmployees from './EmployeeSelection/SelectEmployees'
import ReviewSelectedEmployees from './EmployeeSelection/ReviewSelectedEmployees'

// Rule data
// @TODO: Pull these from the admin settings, when we get to private metadata
const filterKeys = require('../../data/peopleFilterRules/filterKeys.json')
const filterTypes = require('../../data/peopleFilterRules/filterTypes.json')

// demo data
const employees = require('../../data/people.json')
const groups = range(10).map((number) => {
    return {
            id: number,
            name: `Sample Group ${number + 1}`,
            employees: employees,
            type: 'static'
        }
    })

/**
 * Interface to select and review selected employees through several selection categories.
 *
 * Can enable which selection categories are enabled via `props.enabledSelectionCategories`.
 *
 * @TODO: Refactor this somewhat so that "selectedEmployees" is really just a bundle of filters,
 * with the current employee/group filters being special filters with key=employee|group, and
 * value=employeeId|groupId, as appropriate. (Currently this component uses "custom rule"; this
 * is interchangeable with "filter".)
 */
export default class EmployeeSelectionInterface extends React.Component {
    defaultProps = {
        className: '',
        employees: employees,
        groups: groups,
        enabledSelectionCategories: ['employees', 'groups', 'custom'],
    }
    constructor(props) {
        super();

        this.unSelectById = this.unSelectById.bind(this);

        this.addCustomRule = this.addCustomRule.bind(this);

        this.state = {
            selectedEmployees: { //@TODO: remove the calls to `props` here.
                employees: [
                    props.employees[0],
                    props.employees[1],
                    props.employees[2],
                ],
                groups: [
                    props.groups[0],
                    props.groups[1],
                ],
                customRules: [],
            }
        };

        this.filterKeys = filterKeys;
        this.filterTypes = filterTypes;

        this.selectionCategories = [
            {
                key: 'employees',
                title: 'Employees',
                selections: this.state.selectedEmployees.employees,
                renderMethod: (employee, className) => {
                    // @TODO: In shifting to the custom filter method, will have to resolve those filters to figure out which
                    //         employee each refers to, to provide the employee object to this method.
                    return (
                        <p className={className}>{employee.firstName} {employee.lastName}</p>
                    );
                },
            },
            {
                key: 'groups',
                title: 'Groups',
                selections: this.state.selectedEmployees.groups,
                renderMethod: (group, className) => {
                    // @TODO: In shifting to the custom filter method, will have to resolve those filters to figure out which
                    //        group each refers to, to provide the group object to this method.
                    return (
                        <p className={className}>{group.name} <span className="ml2 f6">({group.employees.length} employees)</span></p>
                    );
                },
            },
            {
                key: 'custom',
                title: 'Custom Rules',
                selections: this.state.selectedEmployees.customRules,
                renderMethod: (rule, className) => {
                    const filterKey = this.filterKeys.find((filterKey) => filterKey.value === rule.key);
                    const filterType = this.filterTypes.find((filterType) => filterType.value === rule.type);

                    return (// @TODO: Replace the 15 below with an estimate from the API.
                        <p className={className}>{filterKey.label} that {filterType.label} “{rule.value}”<span className="ml2 f6">(15 employees)</span></p>
                    );
                },
            },
        ];
    }

    // @TODO: Create methods similar to this one for employees and groups
    addCustomRule(rule) {
        let selectedEmployees = {...this.state.selectedEmployees};

        selectedEmployees.customRules.push(rule);

        this.setState({ selectedEmployees });
    }

    // @TODO: Set this up to remove the value from `state.selectedEmployees`
    unSelectById(categoryKey, selectionId) {
        alert('Unselecting...');
    }

    render() {
        const filteredSelectionCategories = this.selectionCategories.filter((category) => this.props.enabledSelectionCategories.includes(category.key));

        return (
            <div className={classNames(this.props.className)}>
                <div className="flex">
                    <div className="w-50 mr4">
                        <h3 className="mt0 f6 lh-title ttu">Select Employees</h3>
                        {/* @TODO: Create and pass through methods for onAddUser and onAddGroup */}
                        <SelectEmployees selectionCategories={filteredSelectionCategories} onAddCustomRule={this.addCustomRule}/>
                    </div>
                    <div className="w-50">
                        <h3 className="mt0 f6 lh-title ttu">Selected Employees</h3>
                        <ReviewSelectedEmployees selectedEmployees={this.state.selectedEmployees} unSelectById={this.unSelectById} selectionCategories={filteredSelectionCategories}/>
                    </div>
                </div>

                <div className="tr">
                    {/* @TODO: This should pass to the parent, via a prop, the bundle of filters created in this.state.selectedEmployees; the parent method would then save it to the API, presumably */}
                    <BasicButton type="positive">Add Employees</BasicButton>
                </div>
            </div>
        );
    }
}
