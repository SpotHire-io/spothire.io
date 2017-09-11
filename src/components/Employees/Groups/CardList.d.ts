import { StatelessComponent } from 'react'
import { Group } from '../../../schemas'

interface Props {
    className?: string
    groups: Group[]
    onSelectGroup?: (groupId: number) => any
    cardProps?: any
}

declare const CardList: StatelessComponent<Props>
export default CardList