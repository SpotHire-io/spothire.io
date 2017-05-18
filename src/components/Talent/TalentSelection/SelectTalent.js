import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../../schemas/Person';

import classNames from 'classnames';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

class SelectTalent extends React.Component {
    constructor(props) {
        super();

        this.updateCurrentSelectionCategory = this.updateCurrentSelectionCategory.bind(this);

        this.state = {
            currentSelectionCategoryKey: props.selectionCategories[0].key
        }
    }

    updateCurrentSelectionCategory(categoryKey) {
        return this.setState({ currentSelectionCategoryKey: categoryKey });
    }

    render() {
        return (
            <div>
                <ButtonBar className="w-100">
                    {this.props.selectionCategories.map((category) =>
                        <RadioButton
                            key={category.key}
                            name="selected_talent_category"
                            id={'selected_talent_category_' + category.key}
                            value={category.key}
                            checked={this.state.currentSelectionCategoryKey === category.key}
                            onClick={() => this.updateCurrentSelectionCategory(category.key)}
                        >
                            {category.title}
                        </RadioButton>
                    )}
                </ButtonBar>
            </div>
        );
    }
}

SelectTalent.defaultProps = {
    className: '',
};

SelectTalent.propTypes = {
    className: PropTypes.string,
    selectionCategories: PropTypes.object.isRequired,
};

export default SelectTalent;
