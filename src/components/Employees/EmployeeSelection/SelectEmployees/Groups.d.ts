import * as React from 'react'

interface Props {
  className?: string
  onAddGroup?: (groupId: number) => any
}
interface State {}

export default class SelectGroups extends React.Component<Props, State> {}