import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

class TalentListView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div className="pa4 bg-near-white">
                talent list
            </div>
        );
    }
}

TalentListView.defaultProps = {
    className: '',
};

TalentListView.propTypes = {
    className: PropTypes.string,
};

export default TalentListView;
