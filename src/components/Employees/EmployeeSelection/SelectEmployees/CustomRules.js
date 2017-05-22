import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectCustomRules extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedKey: null,
        };
    }

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Create custom rules to add all employees that match.</p>

                <div className="mt3">
                    <label className="db mb2 f6" htmlFor="custom_key">Key</label>
                    <Select
                        id="custom_key"
                        className="mt0"
                        options={[
                            {
                                label: 'Profile fields',
                                value: 'optgroup-profile-fields',
                                disabled: true
                            },
                            {
                                label: 'Height (profile field)',
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
                        onChange={(newKey) => this.setState({ selectedKey: newKey.value })}
                    />
                    <small className="dib f6 black-60 lh-title mt2">
                        The key you want to filter on. This can be a profile field, filled out by the employee, or a custom
                        metadata key set by a manager.
                    </small>
                </div>
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
