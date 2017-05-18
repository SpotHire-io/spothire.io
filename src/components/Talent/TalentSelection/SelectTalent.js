import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../../schemas/Person';

import classNames from 'classnames';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

import GroupCardList from '../../Talent/Groups/CardList';

// dummy data
import users from '../../../data/users.json';
const groups = [...Array(10).keys()].map((number) => {
    return {
        id: number,
        name: `Sample Group ${number + 1}`,
        talent: users
    };
});

class SelectTalent extends React.Component {
    constructor(props) {
        super();

        this.updateCurrentSelectionCategory = this.updateCurrentSelectionCategory.bind(this);

        this.renderCategorySelectionInterface = this.renderCategorySelectionInterface.bind(this);

        this.state = {
            currentSelectionCategoryKey: props.selectionCategories[0].key
        }
    }

    updateCurrentSelectionCategory(categoryKey) {
        return this.setState({ currentSelectionCategoryKey: categoryKey });
    }

    renderCategorySelectionInterface(category) {
        let selectionInterface;

        const commonWrapperClasses = 'mt3';

        switch (category.key) {
            case 'talents':
                selectionInterface = (
                    <div className={classNames('', commonWrapperClasses)}>
                        <p>
                            <label className="f6 db" htmlFor="talents_search">Search talents</label>
                            <input className="mt2 w-100" type="text" id="talents_search" aria-describedby="talents_search_desc" name="talents_search"/>
                            <small className="dib f6 black-60 lh-title mt2" id="talents_search_desc">Narrow down the talents by searching their details.</small>
                        </p>
                    </div>
                );
                break;
            case 'groups':
                selectionInterface = (
                    <div className={classNames('', commonWrapperClasses)}>
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
                    <p>custom...</p>
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
                {this.renderCategorySelectionInterface(currentlySelectedCategory)}
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
