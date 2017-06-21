import React from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';
import SelectIndividuals from './SelectEmployees/Individuals';
import SelectGroups from './SelectEmployees/Groups';
import SelectCustomRules from './SelectEmployees/CustomRules';

class SelectEmployees extends React.Component {
    constructor(props) {
        super();

        this.updateCurrentSelectionCategory = this.updateCurrentSelectionCategory.bind(this);

        this.renderCategorySelectionInterface = this.renderCategorySelectionInterface.bind(this);

        this.state = {
            currentSelectionCategoryKey: props.selectionCategories[0].key,
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
                    <SelectIndividuals className={commonWrapperClasses}/>
                );
                break;
            case 'groups':
                selectionInterface = (
                    <SelectGroups className={commonWrapperClasses}/>
                );
                break;
            case 'custom':
                selectionInterface = (
                    <SelectCustomRules className={commonWrapperClasses} onAddRule={this.props.onAddCustomRule}/>
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
                {(this.props.selectionCategories.length > 1) ? <ButtonBar className="w-100">
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
                </ButtonBar> : null}
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
    onAddCustomRule: PropTypes.func.isRequired,
};

export default SelectEmployees;
