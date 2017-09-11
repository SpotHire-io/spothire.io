import React from 'react'
import classNames from 'classnames'
import Box from '../Global/Box'
import BasicButton from '../Buttons/BasicButton'

/**
 * Basic container for label/input pairs, with a built-in reset feature (`props.onResetFilters`).
 */
const FilterContainer  = ({ children, className = '', headingSemanticLevel = 2, onResetFilters }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    })

    return (
        <Box className={wrapperClasses} headingSemanticLevel={headingSemanticLevel} title="Filters" headingType="inline">
            {children}
            <div className="tr">
                <BasicButton type="neutral" className="mt3" onClick={onResetFilters}>Reset Filters</BasicButton>
            </div>
        </Box>
    )
}

export default FilterContainer
