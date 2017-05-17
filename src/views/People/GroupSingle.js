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
            <div className="pa4 bg-near-white">
                <GroupDetailsEditor group={this.props.group}/>
            </div>
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
