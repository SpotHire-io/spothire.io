import * as React from 'react';
import * as classNames from 'classnames';

interface Props {
    onClick: React.EventHandler<React.MouseEvent<{}>>
    children: React.ReactNode
    className?: string
    value: any
    name: any
    id: any
    checked: boolean
}

/**
 * A radio input appearing as a button.
 *
 * Makes most sense when used in a collection, grouped with a ButtonBar.
 */
const RadioButton: React.StatelessComponent<Props> = ({ checked, name, id, value, children, className='', onClick }: Props) => {
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
