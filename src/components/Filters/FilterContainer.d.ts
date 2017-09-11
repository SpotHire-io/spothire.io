import { StatelessComponent } from 'react'
import { Person } from '../../schemas';

interface Props {
    className?: string
    headingSemanticLevel?: number
    children?: React.ReactChildren
    onResetFilters?: React.EventHandler<any>
}

declare const FilterContainer: StatelessComponent<Props>
export default FilterContainer
