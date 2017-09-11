import { StatelessComponent } from 'react'

interface Props {
    className?: string
    isNarrow?: boolean
    children?: React.ReactNode
    type?: 'neutral' | 'positive' | 'negative'
}

declare const BasicTag: StatelessComponent<Props>
export default BasicTag
