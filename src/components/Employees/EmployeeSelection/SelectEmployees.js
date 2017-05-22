import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../../schemas/Person';

import classNames from 'classnames';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

import UserTable from '../UserTable';

import GroupCardList from '../Groups/CardList';

// dummy data
import users from '../../../data/people.json';
const groups = [...Array(10).keys()].map((number) => {
    return {
        id: number,
        name: `Sample Group ${number + 1}`,
        employees: users
    };
});

class SelectEmployees extends React.Component {
    constructor(props) {
        super();

        this.updateCurrentSelectionCategory = this.updateCurrentSelectionCategory.bind(this);

        this.renderCategorySelectionInterface = this.renderCategorySelectionInterface.bind(this);

        this.state = {
            currentSelectionCategoryKey: props.selectionCategories[0].key,
            employeesSearch: '',
        }
    }

    updateCurrentSelectionCategory(categoryKey) {
        return this.setState({ currentSelectionCategoryKey: categoryKey });
    }

    renderCategorySelectionInterface(category) {
        let selectionInterface;

        const commonWrapperClasses = 'mt3';

        switch (category.key) {
            case 'employees':
                selectionInterface = (
                    <div className={classNames('', commonWrapperClasses)}>
                        <p>Select individual employees to add.</p>

                        <p>
                            <label className="f6 db" htmlFor="employees_search">Search employees</label>
                            <input className="mt2 w-100" type="text" id="employees_search" aria-describedby="employees_search_desc" name="employees_search" value={this.state.employeesSearch} onChange={(e) => this.setState({ employeesSearch: e.target.value })}/>
                            <small className="dib f6 black-60 lh-title mt2" id="employees_search_desc">Narrow down the employees by searching their details.</small>
                        </p>

                        <p className="f6 mt3 mb2">Employees</p>

                        <UserTable
                            tableProps={{
                                filterable: ['name'],
                                hideFilterInput: true,
                                filterBy: this.state.employeesSearch,
                            }}
                            enabledColumns={['avatar', 'name']}
                            onClickUser={() => alert('Selecting employee...')}
                        />
                    </div>
                );
                break;
            case 'groups':
                selectionInterface = (
                    <div className={classNames('', commonWrapperClasses)}>
                        <p>Select groups to add all of their employees.</p>

                        <p>
                            <label className="f6 db" htmlFor="group_search">Search groups</label>
                            <input className="mt2 w-100" type="text" id="group_search" aria-describedby="group_search_desc" name="group_search"/>
                            <small className="dib f6 black-60 lh-title mt2" id="group_search_desc">Narrow down the groups by searching their names and descriptions.</small>
                        </p>

                        <p className="f6 mt3 mb2">Groups</p>

                        <GroupCardList
                            groups={groups}
                            className="nt3"
                            cardProps={{
                                displayAvatarPreview: false,
                            }}
                            onSelectGroup={() => alert('Selecting group')}
                        />
                    </div>
                );
                break;
            case 'custom':
                selectionInterface = (
                    <div className={classNames('', commonWrapperClasses)}>
                        <p>Create custom rules to add all employees that match.</p>
                    </div>
                );
                break;
            default:
                break;
        }

        return selectionInterface;
    }

    render() {
        const currentlySelectedCategory = this.props.selectionCategories.find((category) => category.key === this.state.currentSelectionCategoryKey);

        return (
            <div>
                <ButtonBar className="w-100">
                    {this.props.selectionCategories.map((category) =>
                        <RadioButton
                            key={category.key}
                            name="selection_category"
                            id={'selection_category_' + category.key}
                            value={category.key}
                            checked={this.state.currentSelectionCategoryKey === category.key}
                            onClick={() => this.updateCurrentSelectionCategory(category.key)}
                        >
                            {category.title}
                        </RadioButton>
                    )}
                </ButtonBar>
                {this.renderCategorySelectionInterface(currentlySelectedCategory)}
            </div>
        );
    }
}

SelectEmployees.defaultProps = {
    className: '',
};

SelectEmployees.propTypes = {
    className: PropTypes.string,
    selectionCategories: PropTypes.array.isRequired,
};

export default SelectEmployees;
