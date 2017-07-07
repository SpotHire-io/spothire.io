import * as React from 'react';
import Modal from '../../Global/Modal';
import BasicButton from '../../Buttons/BasicButton';
import {Opportunity} from '../../../schemas';
import OpportunityModalBasicInfo from './BasicInfo';

interface Props {
    isOpen: boolean
    closeModal: React.EventHandler<any>
    updateOpportunity: Function
    opportunity: Opportunity
    addOpportunity: React.EventHandler<any>
}
interface State {

}

class OpportunityModal extends React.Component<Props, State> {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="New event modal"
                onClose={this.props.closeModal}
            >
                <h2 className="absolute top-0 right-0 left-0 bg-teal white bb bw1 b--white-40 ma0 pa3 f5">New Opportunity</h2>

                <div className="mt4 pt3">
                    <OpportunityModalBasicInfo opportunity={this.props.opportunity} updateOpportunity={this.props.updateOpportunity}/>
                </div>

                <div className="tr">
                    <BasicButton type="neutral" className="mt3" onClick={this.props.closeModal}>Cancel</BasicButton>
                    <BasicButton type="positive" className="mt3 ml3" onClick={this.props.addOpportunity}>Create</BasicButton>
                </div>
            </Modal>
        )
    }
}

export default OpportunityModal;
