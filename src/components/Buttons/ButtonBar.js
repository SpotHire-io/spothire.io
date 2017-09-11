import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Wraps a collection of buttons in a row, adjusting border radii according to their position.
 *
 * Children can be either RadioButtons or BasicButtons, though RadioButtons (with their outlined
 * and filled modes) make more sense.
 */
const ButtonBar = ({ children, className }) => {
    const wrapperClassName = classNames({
        'flex': true,
        [className]: true
    });

    return (
        <div className={wrapperClassName}>
            {React.Children.map(children, (child, index) => {
                let addedClassName;
                if (index === 0) {
                    addedClassName = 'button--left';
                } else if (index === children.length - 1) {
                    addedClassName = 'button--right';
                } else {
                    addedClassName = 'button--middle';
                }

                return React.cloneElement(child, {
                    className: classNames('flex-auto tc', child.props.className, addedClassName)
                });
            })}
        </div>
    );
};

export default ButtonBar;
