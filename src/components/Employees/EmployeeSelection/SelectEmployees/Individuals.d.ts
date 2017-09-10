import * as React from 'react'

interface Props {
  className?: string
  onAddUser?: (userId: string) => any
}
interface State {
  employeesSearch?: string
}

export default class SelectIndividuals extends React.Component<Props, State> {}