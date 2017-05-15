const React      = require('react');
const classNames = require('classnames');

const BasicButton = ({ children, className, onClick }) => {
    let buttonClasses = classNames({
        'button input-reset f5': true,
        [className]: true
    });

    return <button onClick={onClick} className={buttonClasses}>{children}</button>;
};

BasicButton.defaultProps = {
    className: ''
};

module.exports = BasicButton;
