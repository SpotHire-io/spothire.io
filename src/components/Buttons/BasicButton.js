import React from 'react';

import classNames from 'classnames';

const BasicButton = ({ children, className, onClick }) => {
    let buttonClasses = classNames({
        'button input-reset f5 no-select': true,
        [className]: true
    });

    return <button onClick={onClick} className={buttonClasses}>{children}</button>;
};

BasicButton.defaultProps = {
    className: ''
};

module.exports = BasicButton;
