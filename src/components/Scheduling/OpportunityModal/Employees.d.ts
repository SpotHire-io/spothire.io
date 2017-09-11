import * as React from 'react'
import { Opportunity } from '../../../schemas'

interface Props {
    updateOpportunity: Function
    opportunity?: Opportunity
}

interface State {
    isAddEmployeesModalOpen: boolean
}

export default class Employees extends React.Component<Props, State> {}
