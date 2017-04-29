const React      = require('react');
const classNames = require('classnames');

import BasicButton from 'BasicButton';

const RadioButton = ({ checked, name, value, children, className, onClick }) => {
    let buttonClasses = classNames({
        'button': true,
        [className]: true
    });

    return (
        <label htmlFor={name}>

        </label>
        <BasicButton  className={buttonClasses}>{children}</BasicButton>
    );
};

RadioButton.defaultProps = {
    className: ''
};

module.exports = RadioButton;
