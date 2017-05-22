import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectCustomRules extends React.Component {
    constructor() {
        super();

        this.renderValueInputs = this.renderValueInputs.bind(this);

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
                <p>a metadata field!</p>
            );
        }

        return selectionInterface;
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
