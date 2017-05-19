import React from 'react';

import classNames from 'classnames';

import Box from '../Global/Box';

import BasicButton from '../Buttons/BasicButton';

const FilterContainer = ({ children, className, headingSemanticLevel }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    return (
        <Box className={wrapperClasses}>
            {React.createElement('h' + headingSemanticLevel, { className: 'f6 mt0 lh-title ttu' }, 'Filters')}
            {children}
            <div className="tr">
                <BasicButton className="button--neutral mt3">Reset Filters</BasicButton>
                <BasicButton className="button--standard mt3 ml2">Apply Filters</BasicButton>
            </div>
        </Box>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
};

export default FilterContainer;
