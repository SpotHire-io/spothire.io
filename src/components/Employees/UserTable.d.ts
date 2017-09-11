import * as React from 'react'
import { Person } from '../../schemas'

interface Props {
    className?: string,
    hasShadow?: boolean,
    inlineAddingRowIsOpen?: boolean,
    editUser?: Function, // @TODO: This function should redirect to the employee’s page
    deleteUser?: Function,
    onClickUser?: Function,
    users?: Person[],
    tableProps?: object,
    enabledColumns: string[]
}

interface State {}

export default class SelectEmployees extends React.Component<Props, State> {}
