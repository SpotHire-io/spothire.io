import * as React from 'react'

interface Props {
    className?: string
    selectedItem?: string
    userType?: 'manager' | 'employee'
}
interface State {
    isUserMenuOpen: boolean
}

export default class MainMenu extends React.Component<Props, State> {}
