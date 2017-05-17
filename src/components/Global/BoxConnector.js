import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const BoxConnector = ({ className, isActive }) => (
    <div className={classNames('mh5 animate-all bl br bt-0 bb-0', className, {
        'bw1 b--black-20': isActive,
        'b--black-10': ! isActive,
    })}/>
);

BoxConnector.defaultProps = {
    className: 'h1',
};

BoxConnector.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
};

export default BoxConnector;
