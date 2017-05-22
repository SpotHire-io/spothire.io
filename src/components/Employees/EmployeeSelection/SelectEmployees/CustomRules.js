import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

class SelectCustomRules extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Create custom rules to add all employees that match.</p>
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
