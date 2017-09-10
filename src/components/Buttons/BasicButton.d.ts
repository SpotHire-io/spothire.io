import { StatelessComponent } from 'react'

interface Props {
  onClick?: React.EventHandler<React.MouseEvent<{}>>
  children: React.ReactNode
  className?: string
  type?: 'neutral' | 'standard' |  'positive' | 'negative'
}

declare const BasicButton: StatelessComponent<Props>
export default BasicButton
