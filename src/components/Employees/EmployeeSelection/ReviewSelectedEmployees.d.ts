import { StatelessComponent } from 'react'
import * as Schemas from '../../../schemas'

interface Selection {
    id: string
}

interface Category {
    title: string
    key: string
    selections: Selection[]
    renderMethod(selection: Selection, className: string): any
}

interface Props {
    className?: string
    selectionCategories: Category[]
    unSelectById(key: string, id: string): any
    selectedEmployees: {
        employees: Schemas.Employee[]
        groups: Schemas.Group[]
        customRules: any[]
    }
}

declare const ReviewSelectedEmployees: StatelessComponent<Props>
export default ReviewSelectedEmployees