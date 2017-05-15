const React      = require('react');
const classNames = require('classnames');

const Box = ({ children, className, contentWrapperClassName, headingSemanticLevel, title }) => {
    let wrapperClasses = classNames({
        'bg-white ba b--black-20 sh-shadow-2': true,
        [className]: true
    });

    const renderTitle = () => {
        if (typeof title != 'undefined' && title.length > 0) {
            return React.createElement(
                'h' + headingSemanticLevel,
                { className: 'bg-blue-yonder white bb bw1 b--white-40 ma0 pa3 f5' },
                title
            );
        }
    };

    return (
        <div className={wrapperClasses}>
            {renderTitle()}
            <div className={contentWrapperClassName}>
                {children}
            </div>
        </div>
    );
};

Box.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
    contentWrapperClassName: 'pa3'
};

module.exports = Box;
