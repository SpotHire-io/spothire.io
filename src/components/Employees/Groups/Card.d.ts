import { StatelessComponent } from 'react'
import { Group } from '../../../schemas'

interface Props {
    className?: string
    group: Group
    displayAvatarPreview?: boolean
}

declare const Card: StatelessComponent<Props>
export default Card