import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const BoxConnector = ({ className, isActive }) => (
    <div className={classNames('mh5 bl br b--black-20', className)}/>
);

BoxConnector.defaultProps = {
    className: 'h3',
};

BoxConnector.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
};

export default BoxConnector;
