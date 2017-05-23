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

        this.state = {
            selectedKey: null,
        };
    }

    renderValueInputs() {
        let selectionInterface;

        if (this.state.selectedKey === null) {
            selectionInterface = null;
        } else if (this.state.selectedKey.indexOf('profile-') === 0) {
            selectionInterface = (
                <p>a profile field!</p>
            );
        } else if (this.state.selectedKey.indexOf('metadata-') === 0) {
            selectionInterface = (
                <div className="mt3">
                    <div>
                        <label htmlFor="custom_filter_type" className="db mb2 f6">Filter type</label>
                        <Select
                            id="custom_filter_type"
                            name="custom_filter_type"
                            options={[
                                {
                                    label: 'is equal to',
                                    value: 'equals'
                                },
                                {
                                    label: 'contains',
                                    value: 'contains'
                                }
                            ]}
                        />
                        <small className="dib f6 black-60 lh-title mt2">
                            The type of filtering you want to do.
                        </small>
                    </div>
                    <div className="mt3">
                        <label htmlFor="custom_value" className="db mb2 f6">Value</label>
                        <input className="w-100 db" type="text" id="custom_value" name="custom_value"/>
                        <small className="dib f6 black-60 lh-title mt2">
                            The value you want to match against.
                        </small>
                    </div>
                </div>
            );
        }

        return selectionInterface;
    }

    renderPlainLanguageDescription() {
        if (this.state.selectedKey !== null) {
            return (
                <div className="bt bb-0 br-0 bl-0 b--dotted mt3 pt3">
                    <p>This rule will find all employees with custom metadata that contains “value”.</p>
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
                        options={[
                            {
                                label: 'Profile fields',
                                value: 'optgroup-profile-fields',
                                disabled: true
                            },
                            {
                                label: 'Height',
                                value: 'profile-test'
                            },
                            {
                                label: 'Private metadata',
                                value: 'optgroup-private-metadata',
                                disabled: true
                            },
                            {
                                label: 'Reliable',
                                value: 'metadata-Reliable'
                            }
                        ]}
                        onChange={(newKey) => (newKey !== null) ? this.setState({ selectedKey: newKey.value }) : this.setState({ selectedKey: null })}
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
