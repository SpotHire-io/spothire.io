import * as React from 'react'
import { Group } from '../../../schemas'

interface Props {
    className?: string
    group: Group
}

interface State { }

export default class DetailsEditor extends React.Component<Props, State> {}