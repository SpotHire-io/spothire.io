const React      = require('react');
const classNames = require('classnames');

import BasicButton from './BasicButton';

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
                    className: classNames(child.className, addedClassName)
                });
            })}
        </div>
    );
};

ButtonBar.defaultProps = {
    className: ''
};

module.exports = ButtonBar;
