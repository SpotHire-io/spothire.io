import * as React from 'react'
import { MetaPairs, Person } from '../../schemas'


interface Props {
    className?: string
    employee: Person
}

interface State {
    metaPairs: MetaPairs
    currentlyEditingMetaPairId: number
}

export default class MetadataInterface extends React.Component<Props, State> {}
