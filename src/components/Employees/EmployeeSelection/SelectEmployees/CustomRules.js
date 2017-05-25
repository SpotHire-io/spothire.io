import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectCustomRules extends React.Component {
    constructor() {
        super();

        this.renderValueInputs = this.renderValueInputs.bind(this);
        this.renderPlainLanguageDescription = this.renderPlainLanguageDescription.bind(this);

        this.filterKeys = [
            {
                label: 'Profile fields',
                value: 'optgroup-profile-fields',
                disabled: true
            },
            {
                label: 'Height',
                value: 'profile-number-height'
            },
            {
                label: 'Private metadata',
                value: 'optgroup-private-metadata',
                disabled: true
            },
            {
                label: 'Reliable',
                value: 'metadata-text-Reliable'
            }
        ];

        this.filterTypes = [
            {
                label: 'is equal to',
                value: 'equals'
            },
            {
                label: 'contains',
                value: 'contains'
            },
            {
                label: 'is greater than',
                value: 'greater'
            },
            {
                label: 'is less than',
                value: 'less'
            },
        ];

        this.state = {
            selectedKey: null,
            filterType: null,
            filterValue: '',
        };
    }

    renderValueInputs() {
        if (this.state.selectedKey === null) {
            return null;
        }

        const categoryFilters = {
            text: ['equals', 'contains'],
            number: ['greater', 'equals', 'less'],
        };

        const categoryValueTypes = {
            text: 'text',
            number: 'number',
        };

        const currentCategory = this.state.selectedKey.split('-')[1];

        return (
            <div className="mt3">
                <div>
                    <label htmlFor="custom_filter_type" className="db mb2 f6">Filter type</label>
                    <Select
                        id="custom_filter_type"
                        name="custom_filter_type"
                        value={this.state.filterType}
                        onChange={(newFilterType) => this.setState({ filterType: newFilterType })}
                        options={this.filterTypes.filter((filterType) => categoryFilters[currentCategory].includes(filterType.value))}
                    />
                    <small className="dib f6 black-60 lh-title mt2">
                        The type of filtering you want to do.
                    </small>
                </div>
                <div className="mt3">
                    <label htmlFor="custom_value" className="db mb2 f6">Value</label>
                    <input className="w-100 db" type={categoryValueTypes[currentCategory]} id="custom_value" name="custom_value" value={this.state.filterValue} onChange={(e) => this.setState({ filterValue: e.target.value })}/>
                    <small className="dib f6 black-60 lh-title mt2">
                        The value you want to match against.
                    </small>
                </div>
            </div>
        );
    }

    renderPlainLanguageDescription() {
        if (this.state.selectedKey !== null && this.state.filterType !== null) {
            const currentFilterType = this.filterTypes.find((filterType) => filterType.value === this.state.filterType.value);
            const currentFilterKey = this.filterKeys.find((filterKey) => filterKey.value === this.state.selectedKey);

            return (
                <div className="bt bb-0 br-0 bl-0 b--dotted mt3 pt3">
                    <p>This rule will find all employees with <em>{currentFilterKey.label}</em> that <em>{currentFilterType.label}</em> “{this.state.filterValue}”.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Create custom rules to add all employees that match.</p>

                <div className="mt3">
                    <label className="db mb2 f6" htmlFor="custom_key">Key</label>
                    <Select
                        id="custom_key"
                        name="custom_key"
                        className="mt0"
                        value={this.state.selectedKey}
                        options={this.filterKeys}
                        onChange={(newKey) => (newKey !== null) ? this.setState({ selectedKey: newKey.value, filterType: null }) : this.setState({ selectedKey: null, filterType: null })}
                    />
                    <small className="dib f6 black-60 lh-title mt2">
                        The key you want to filter on. This can be a profile field, filled out by the employee, or a custom
                        metadata key, set by a manager.
                    </small>
                </div>

                {this.renderValueInputs()}
                {this.renderPlainLanguageDescription()}
            </div>
        );
    }
}

SelectCustomRules.defaultProps = {
    className: '',
};

SelectCustomRules.propTypes = {
    className: PropTypes.string,
};

export default SelectCustomRules;
