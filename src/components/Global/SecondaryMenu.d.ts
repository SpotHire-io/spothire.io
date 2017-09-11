import * as React from 'react'

interface Item {
    key?: any
    href?: string
    text?: React.ReactNode
    isActive?: boolean
}

interface Props {
    className?: string
    items: Item[]
    onClick: React.EventHandler<React.MouseEvent<{}>>
}

interface State {}

export default class SecondaryMenu extends React.Component<Props, State> {}
