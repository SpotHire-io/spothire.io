import React from 'react';
import classNames from 'classnames';

/**
 * Tag for quick status overviews.
 *
 * Used, for example, to show whether a post requires a response—what its replied-to status is.
 *
 * Use `props.type` to set its visual significance.
 * Use `props.isNarrow` to slim the tag down for compressed displays.
 */
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

export default BasicTag;
