import * as React from 'react';
import * as classNames from 'classnames';
import Box from '../Global/Box';
import BasicButton from '../Buttons/BasicButton';

interface Props {
    className?: string
    headingSemanticLevel?: number
    children?: React.ReactChildren
    onResetFilters?: React.EventHandler<any>
}

const FilterContainer: React.StatelessComponent<Props>  = ({ children, className, headingSemanticLevel, onResetFilters }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    return (
        <Box className={wrapperClasses} headingSemanticLevel={headingSemanticLevel} title="Filters" headingType="inline">
            {children}
            <div className="tr">
                <BasicButton className="button--neutral mt3" onClick={onResetFilters}>Reset Filters</BasicButton>
            </div>
        </Box>
    );
};

FilterContainer.defaultProps = {
    className: '',
    headingSemanticLevel: 2
}

export default FilterContainer;
