import * as React from 'react'
import { Opportunity } from '../../../schemas'

interface Props {
    isOpen: boolean
    closeModal: React.EventHandler<any>
    updateOpportunity: Function
    opportunity: Opportunity
    addOpportunity: React.EventHandler<any>
}
interface State { }

export default class OpportunityModal extends React.Component<Props, State> {}
