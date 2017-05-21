import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';

import classNames from 'classnames';

import BasicButton from '../../components/Buttons/BasicButton';

import SelectTalent from './TalentSelection/SelectTalent';
import ReviewSelectedTalent from './TalentSelection/ReviewSelectedTalent';

// dummy data
import users from '../../data/people.json';
const groups = [...Array(10).keys()].map((number) => {
    return {
        id: number,
        name: `Sample Group ${number + 1}`,
        employees: users
    };
});

class TalentSelectionInterface extends React.Component {
    constructor() {
        super();

        this.unSelectById = this.unSelectById.bind(this);

        this.state = {
            selectedEmployees: {
                employees: [
                    users[0],
                    users[1],
                    users[2],
                ],
                groups: [
                    groups[0],
                    groups[1],
                ],
                customSelections: [],
            }
        };

        this.selectionCategories = [
            {
                key: 'employees',
                title: 'Employees',
                selections: this.state.selectedEmployees.employees,
                renderMethod: (employee, className) => {
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
                    return (
                        <p className={className}>{group.name} <span className="ml2 f6">({group.employees.length} employees)</span></p>
                    );
                },
            },
            {
                key: 'custom',
                title: 'Custom',
                selections: this.state.selectedEmployees.customSelections,
                renderMethod: (customSelection, className) => {
                    return (
                        <p className={className}>¯\_(ツ)_/¯</p>
                    );
                },
            },
        ];
    }

    unSelectById(categoryKey, selectionId) {
        alert('Unselecting...');
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <div className="flex">
                    <div className="w-50 mr4">
                        <h3 className="mt0 f6 lh-title ttu">Select Employees</h3>
                        <SelectTalent selectionCategories={this.selectionCategories}/>
                    </div>
                    <div className="w-50">
                        <h3 className="mt0 f6 lh-title ttu">Selected Employees</h3>
                        <ReviewSelectedTalent selectedEmployees={this.state.selectedEmployees} unSelectById={this.unSelectById} selectionCategories={this.selectionCategories}/>
                    </div>
                </div>

                <div className="tr">
                    <BasicButton className="button--positive">Add Employees</BasicButton>
                </div>
            </div>
        );
    }
}

TalentSelectionInterface.defaultProps = {
    className: '',
    employees: users,
};

TalentSelectionInterface.propTypes = {
    className: PropTypes.string,
    employees: PropTypes.arrayOf(PersonSchema).isRequired,
};

export default TalentSelectionInterface;
