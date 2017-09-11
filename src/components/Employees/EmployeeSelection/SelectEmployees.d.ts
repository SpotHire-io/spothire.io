import * as React from 'react'

interface Category {
    key: 'employees' | 'custom' | 'groups'
    title: string
}
interface Props {
    className?: string
    selectionCategories: Category[]
    onAddCustomRule: Function
}
interface State {
    currentSelectionCategoryKey: string
}

export default class SelectEmployees extends React.Component<Props, State> {}
