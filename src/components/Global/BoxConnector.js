import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const BoxConnector = ({ className, isActive }) => (
    <div className={classNames('mh5 animate-all bl br', className, {
        'bw1 b--black-30': isActive,
        'b--black-20': ! isActive,
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
