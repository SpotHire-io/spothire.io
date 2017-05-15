import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import Box from '../../Global/Box';

class GroupSingle extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <Box className={wrapperClasses}>
                {this.props.group.name}
            </Box>
        );
    }
}

GroupSingle.defaultProps = {
    className: '',
};

GroupSingle.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupSingle;
