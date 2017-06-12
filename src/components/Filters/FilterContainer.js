import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Global/Box';
import BasicButton from '../Buttons/BasicButton';

const FilterContainer = ({ children, className, headingSemanticLevel, onResetFilters }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    return (
        <Box className={wrapperClasses}>
            {React.createElement('h' + headingSemanticLevel, { className: 'f6 mt0 lh-title ttu' }, 'Filters')}
            {children}
            <div className="tr">
                <BasicButton className="button--neutral mt3" onClick={onResetFilters}>Reset Filters</BasicButton>
            </div>
        </Box>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2,
};

FilterContainer.propTypes = {
    className: PropTypes.string,
    headingSemanticLevel: PropTypes.number,
    children: PropTypes.node.isRequired,
    onResetFilters: PropTypes.func.isRequired,
};

export default FilterContainer;
