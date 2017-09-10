import * as React from 'react'

type FilterKeys = FilterKey[]
type FilterTypes = FilterType[]
interface FilterKey {
    label: string
    value: string
    disabled?: boolean
}
interface FilterType {
    label: string
    value: string
}
interface Props {
  className?: string
  onAddRule?: Function
}
interface State {
  selectedKey: string
  filterType: FilterType
  filterValue: string
}

export default class CustomRules extends React.Component<Props, State> {}