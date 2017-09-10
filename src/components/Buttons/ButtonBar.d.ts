import { StatelessComponent } from 'react'

type Child = React.ReactElement<{className: string}>
interface Props {
    className?: string
    children: Child[]
}

declare const ButtonBar: StatelessComponent<Props>
export default ButtonBar
