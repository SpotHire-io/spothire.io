import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const BasicTag = ({ type, children, className, isNarrow }) => {
    let tagClasses = classNames({
        'dib f6 ba b--dashed br4': true,
        'gray': type === 'neutral',
        'dark-green': type === 'positive',
        'dark-red': type === 'negative',
        'pv2 ph3': ! isNarrow,
        'pv1 ph2': isNarrow,
        [className]: true
    });

    return <span className={tagClasses}>{children}</span>;
};

BasicTag.defaultProps = {
    className: '',
    isNarrow: false,
    type: 'neutral',
};

BasicTag.propTypes = {
    className: PropTypes.string,
    isNarrow: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(['neutral', 'positive', 'negative']),
};

export default BasicTag;
