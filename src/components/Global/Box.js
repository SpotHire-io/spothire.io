const React      = require('react');
const classNames = require('classnames');

const Box = ({ children, className }) => {
    let wrapperClasses = classNames({
        'mt3 ': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>
            {children}
        </div>
    );
};

Box.defaultProps = {
    className: ''
};

Box.propTypes = {
    id: React.PropTypes.string.isRequired
};

module.exports = Box;
