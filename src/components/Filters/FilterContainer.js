const React      = require('react');
const classNames = require('classnames');

const BasicButton = require('../Buttons/BasicButton');

const FilterContainer = ({ children, className, headingSemanticLevel }) => {
    let wrapperClasses = classNames({
        'pt-sans bg-white ba b--black-20 pa3': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>
            {React.createElement('h' + headingSemanticLevel, { className: 'f6 mt0 lh-title ttu' }, 'Filters')}
            {children}
            <div className="tr mt3">
                <BasicButton className="button--standard">Apply Filters</BasicButton>
            </div>
        </div>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
};

module.exports = FilterContainer;
