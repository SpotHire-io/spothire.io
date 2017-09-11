import React from 'react';
import classNames from 'classnames';

/**
 * Standard UI container. Most content and interfaces should be wrapped in a Box.
 *
 * Can display a title (set as `props.title`) with two different styles (`props.headingType`),
 * and the heading’s h-level can be controlled (`props.headingSemanticLevel`) to allow for
 * proper hierarchies.
 */
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

export default Box;
