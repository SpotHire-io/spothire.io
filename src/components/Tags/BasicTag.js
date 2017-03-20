const React      = require('react');
const classNames = require('classnames');

const BasicTag = ({ type, children, className }) => {
    let tagClasses = classNames({
        'dib f6 pv2 ph3 ba b--dashed br4': true,
        'gray': type === 'neutral',
        'dark-green': type === 'positive',
        'dark-red': type === 'negative',
        [className]: true
    });

    return <span className={tagClasses}>{children}</span>;
};

BasicTag.defaultProps = {
    className: ''
};

module.exports = BasicTag;
