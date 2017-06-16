import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
                    className: classNames('flex-auto tc', child.className, addedClassName)
                });
            })}
        </div>
    );
};

ButtonBar.defaultProps = {
    className: ''
};

ButtonBar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonBar;
