const React      = require('react');
const classNames = require('classnames');

import BasicButton from './BasicButton';

const RadioButton = ({ checked, name, id, value, children, className, onClick }) => {
    const labelClassName = classNames({
        'button button--standard': true,
        'button--outline': typeof checked == 'null' || ! checked,
        [className]: true
    });

    return (
        <label className={labelClassName} onClick={onClick} htmlFor={id}>
            <input id={id} name={name} type="radio" className="clip" checked={checked}/>
            {children}
        </label>
    );
};

RadioButton.defaultProps = {
    className: ''
};

module.exports = RadioButton;
