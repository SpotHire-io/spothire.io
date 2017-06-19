import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({ children, className, contentWrapperClassName, headingSemanticLevel, headingType, title }) => {
    let wrapperClasses = classNames({
        'bg-white ba b--black-20 sh-shadow-2': true,
        [className]: true
    });

    const renderTitle = () => {
        if (title !== undefined && title.length > 0) {
            return React.createElement(
                'h' + headingSemanticLevel,
                { className: classNames({
                    'bg-teal white bb bw1 b--white-40 ma0 pa3 f5': headingType === 'block',
                    'f6 mt0 lh-title ttu': headingType === 'inline',
                }) },
                title
            );
        }
    };

    return (
        <div className={wrapperClasses}>
            {(headingType === 'block') ? renderTitle() : null}
            <div className={contentWrapperClassName}>
                {(headingType === 'inline') ? renderTitle() : null}
                {children}
            </div>
        </div>
    );
};

Box.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
    headingType: 'block',
    contentWrapperClassName: 'pa3'
};

Box.propTypes = {
    className: PropTypes.string,
    contentWrapperClassName: PropTypes.string,
    headingSemanticLevel: PropTypes.number,
    headingType: PropTypes.oneOf(['block', 'inline']),
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Box;
