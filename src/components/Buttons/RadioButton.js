import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioButton = ({ checked, name, id, value, children, className, onClick }) => {
    const labelClassName = classNames({
        'button button--neutral': true,
        'button--outline': checked === undefined || ! checked,
        [className]: true
    });

    return (
        <label className={labelClassName} onClick={onClick} htmlFor={id}>
            <input id={id} name={name} type="radio" className="clip" checked={checked} value={value}/>
            {children}
        </label>
    );
};

RadioButton.defaultProps = {
    className: ''
};

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default RadioButton;
