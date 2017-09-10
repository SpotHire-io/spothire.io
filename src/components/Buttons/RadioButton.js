import React from 'react'
import classNames from 'classnames'

/**
 * A radio input appearing as a button.
 *
 * Makes most sense when used in a collection, grouped with a ButtonBar.
 */
const RadioButton = ({ checked, name, id, value, children, className='', onClick }) => {
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

export default RadioButton;
