import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../schemas/Group';

import classNames from 'classnames';

import GroupDetailsEditor from '../../components/Talent/Groups/DetailsEditor';

class GroupSingleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <GroupDetailsEditor group={this.props.group}/>
        );
    }
}

GroupSingleView.defaultProps = {
    className: '',
};

GroupSingleView.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupSingleView;
