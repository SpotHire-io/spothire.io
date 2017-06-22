import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

interface Props {
    onClick: React.EventHandler<React.MouseEvent<{}>>
    children: React.ReactNode
    className?: string
}

const BasicButton: React.StatelessComponent<Props> = ({ children, className='', onClick }) => {
    let buttonClasses = classNames({
        'button input-reset f5 no-select': true,
        [className]: true
    });

    return <button onClick={onClick} className={buttonClasses}>{children}</button>;
};

export default BasicButton;
