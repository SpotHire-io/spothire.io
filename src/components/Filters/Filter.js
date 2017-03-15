const React      = require('react');
const classNames = require('classnames');

const Filter = ({ type, onChange, className }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>

        </div>
    );
};

Filter.defaultProps = {
    className: ''
};

module.exports = Filter;
