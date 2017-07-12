import * as React from 'react'
import * as classNames from 'classnames'
import {range} from 'lodash'
import PersonSchema from '../../schemas/Person'
import * as Schemas from '../../schemas'
import BasicButton from '../../components/Buttons/BasicButton'
import SelectEmployees from './EmployeeSelection/SelectEmployees'
import ReviewSelectedEmployees from './EmployeeSelection/ReviewSelectedEmployees'

// Rule data
const filterKeys = require('../../data/peopleFilterRules/filterKeys.json')
const filterTypes = require('../../data/peopleFilterRules/filterTypes.json')

interface FilterKey {
    label: string
    value: string
    disabled?: boolean
}

interface FilterType {
    label: string
    value: string
    disabled?: boolean
}

interface Rule {
    key: string
    type: string
    value: string
}

interface Category {
    key: 'employees' | 'custom' | 'groups'
    title: string
}

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

interface Props {
    className?: string
    employees?: Schemas.Employee[]
    groups?: Schemas.Group[]
    enabledSelectionCategories?: any[]
}

interface State {
    selectedEmployees: {
        employees: Schemas.Employee[]
        groups: Schemas.Group[]
        customRules: any[]
    }
}

/**
 * Interface to select and review selected employees through several selection categories.
 *
 * Can enable which selection categories are enabled via `props.enabledSelectionCategories`.
 */
export default class EmployeeSelectionInterface extends React.Component<Props, State> {
    public filterKeys: FilterKey[]
    public filterTypes: FilterType[]
    public selectionCategories: any

    public static defaultProps = {
        className: '',
        employees: employees,
        groups: groups,
        enabledSelectionCategories: ['employees', 'groups', 'custom'],
    }
    constructor(props: Props) {
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
                renderMethod: (employee: Schemas.Employee, className: string) => {
                    return (
                        <p className={className}>{employee.firstName} {employee.lastName}</p>
                    );
                },
            },
            {
                key: 'groups',
                title: 'Groups',
                selections: this.state.selectedEmployees.groups,
                renderMethod: (group: Schemas.Group, className: string) => {
                    return (
                        <p className={className}>{group.name} <span className="ml2 f6">({group.employees.length} employees)</span></p>
                    );
                },
            },
            {
                key: 'custom',
                title: 'Custom Rules',
                selections: this.state.selectedEmployees.customRules,
                renderMethod: (rule: Rule, className: string) => {
                    const filterKey = this.filterKeys.find((filterKey: FilterKey) => filterKey.value === rule.key);
                    const filterType = this.filterTypes.find((filterType: FilterType) => filterType.value === rule.type);

                    return (// @TODO: Replace the 15 below with an estimate from the API.
                        <p className={className}>{filterKey.label} that {filterType.label} “{rule.value}”<span className="ml2 f6">(15 employees)</span></p>
                    );
                },
            },
        ];
    }

    addCustomRule(rule: Rule) {
        let selectedEmployees = {...this.state.selectedEmployees};

        selectedEmployees.customRules.push(rule);

        this.setState({ selectedEmployees });
    }

    unSelectById(categoryKey: string, selectionId: string) {
        alert('Unselecting...');
    }

    render() {
        const filteredSelectionCategories = this.selectionCategories.filter((category: Category) => this.props.enabledSelectionCategories.includes(category.key));

        return (
            <div className={classNames(this.props.className)}>
                <div className="flex">
                    <div className="w-50 mr4">
                        <h3 className="mt0 f6 lh-title ttu">Select Employees</h3>
                        <SelectEmployees selectionCategories={filteredSelectionCategories} onAddCustomRule={this.addCustomRule}/>
                    </div>
                    <div className="w-50">
                        <h3 className="mt0 f6 lh-title ttu">Selected Employees</h3>
                        <ReviewSelectedEmployees selectedEmployees={this.state.selectedEmployees} unSelectById={this.unSelectById} selectionCategories={filteredSelectionCategories}/>
                    </div>
                </div>

                <div className="tr">
                    <BasicButton type="positive">Add Employees</BasicButton>
                </div>
            </div>
        );
    }
}
