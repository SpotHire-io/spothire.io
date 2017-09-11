import { StatelessComponent } from 'react'
import OpportunitySchema from '../../../schemas/Opportunity';

interface Props {
    updateOpportunity: Function,
    opportunity: OpportunitySchema
}

declare const BasicInfo: StatelessComponent<Props>
export default BasicInfo
