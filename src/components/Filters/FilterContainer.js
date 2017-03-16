const React      = require('react');
const classNames = require('classnames');

const BasicButton = require('../Buttons/BasicButton');

const Filter = require('./Filter');

const FilterContainer = ({ children, className, headingSemanticLevel }) => {
    let wrapperClasses = classNames({
        'pt-sans bg-white ba b--black-20 pa3': true,
        [className]: true
    });

    const thing = function () {
        console.log(children);

        React.Children.forEach(children, (child) => {
            console.log(child.type.name);
        });
    };

    return (
        <div className={wrapperClasses}>
            {React.createElement('h' + headingSemanticLevel, { className: 'f6 mt0 lh-title ttu' }, 'Filters')}
            {children}
            <p onClick={() => thing()}>Click me!</p>
        </div>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
};

module.exports = FilterContainer;
