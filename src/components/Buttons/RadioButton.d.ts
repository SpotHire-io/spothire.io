import { StatelessComponent } from 'react'

interface Props {
  onClick: React.EventHandler<React.MouseEvent<{}>>
  children: React.ReactNode
  className?: string
  value: any
  name: any
  id: any
  checked: boolean
}

declare const RadioButton: StatelessComponent<Props>
export default RadioButton
