import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../schemas/Group';

import classNames from 'classnames';

class GroupListView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div className="pa4 bg-near-white">
                group list
            </div>
        );
    }
}

GroupListView.defaultProps = {
    className: '',
};

GroupListView.propTypes = {
    className: PropTypes.string,
};

export default GroupListView;
