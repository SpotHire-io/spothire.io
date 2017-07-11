import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

interface Props {
    onClick?: React.EventHandler<React.MouseEvent<{}>>
    children: React.ReactNode
    className?: string
    type?: 'neutral' | 'standard' |  'positive' | 'negative'
}

/**
 * Used for most interactions requiring a button.
 *
 * Comes in four types, corresponding to different appearances.
 * Can stand alone. When beside another button, the button to the right should have `mr3` added as a class.
 */
const BasicButton: React.StatelessComponent<Props> = ({ children, className = '', onClick, type = 'neutral' }) => {
    let buttonClasses = classNames({
        'button input-reset f5 no-select': true,
        'button--neutral': type === 'neutral',
        'button--standard': type === 'standard',
        'button--positive': type === 'positive',
        'button--negative': type === 'negative',
        [className]: true
    });

    return <button onClick={onClick} className={buttonClasses}>{children}</button>;
};

export default BasicButton;
