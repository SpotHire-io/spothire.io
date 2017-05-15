import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

class Group extends React.Component {
    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                Group
            </div>
        )
    }
}

Group.defaultProps = {
    className: '',
};

Group.propTypes = {
    className: PropTypes.string,
};

export default Group;
