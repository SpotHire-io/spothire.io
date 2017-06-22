import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ButtonBar, RadioButton} from '../../Buttons';
import SelectIndividuals from './SelectEmployees/Individuals';
import SelectGroups from './SelectEmployees/Groups';
import SelectCustomRules from './SelectEmployees/CustomRules';

interface Props {
    className?: string
    selectionCategories: any[]
    onAddCustomRule: Function
}

interface State {
    currentSelectionCategoryKey: string
}

class SelectEmployees extends React.Component<Props, State> {
    constructor(props: Props) {
        super();

        this.updateCurrentSelectionCategory = this.updateCurrentSelectionCategory.bind(this);

        this.renderCategorySelectionInterface = this.renderCategorySelectionInterface.bind(this);

        this.state = {
            currentSelectionCategoryKey: props.selectionCategories[0].key,
        }
    }

    updateCurrentSelectionCategory(categoryKey: string) {
        return this.setState({ currentSelectionCategoryKey: categoryKey });
    }

    renderCategorySelectionInterface(category: {key: string}) {
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

export default SelectEmployees;
