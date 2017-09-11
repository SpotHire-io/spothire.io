import { StatelessComponent } from 'react'

interface Props {
    className?: string
    contentWrapperClassName?: string
    headingSemanticLevel?: number
    headingType?: 'block' | 'inline'
    title?: string
    children: React.ReactNode
}

declare const Box: StatelessComponent<Props>
export default Box
