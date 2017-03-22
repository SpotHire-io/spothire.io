const React      = require('react');
const classNames = require('classnames');

const BasicButton = require('../Buttons/BasicButton');

const FilterContainer = ({ children, className, headingSemanticLevel }) => {
    let wrapperClasses = classNames({
        'app-sans bg-white ba b--black-20 pa3 sh-shadow-2 ': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>
            {React.createElement('h' + headingSemanticLevel, { className: 'f6 mt0 lh-title ttu' }, 'Filters')}
            {children}
            <div className="tr">
                <BasicButton className="button--neutral mt3">Reset Filters</BasicButton>
                <BasicButton className="button--standard mt3 ml2">Apply Filters</BasicButton>
            </div>
        </div>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
};

module.exports = FilterContainer;
