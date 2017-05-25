import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';

import Modal from 'react-modal';

import BasicButton from '../Buttons/BasicButton';

import OpportunityModalBasicInfo from './OpportunityModal/BasicInfo';

class OpportunityModal extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel={"New event modal"}
                overlayClassName="sh-modal-overlay"
                className="sh-modal sh-shadow-2 "
                onRequestClose={this.props.closeModal}
                closeTimeoutMS={100}
            >
                <h2 className="absolute top-0 right-0 left-0 bg-blue-yonder white bb bw1 b--white-40 ma0 pa3 f5">New Opportunity</h2>

                <div className="mt4 pt3">
                    <OpportunityModalBasicInfo {...this.props}/>
                </div>

                <div className="tr">
                    <BasicButton className="button--neutral mt3" onClick={() => this.props.closeModal()}>Cancel</BasicButton>
                    <BasicButton className="button--positive mt3 ml3" onClick={this.props.addOpportunity}>Create</BasicButton>
                </div>
            </Modal>
        )
    }
}

OpportunityModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    updateOpportunity: PropTypes.func.isRequired,
    opportunity: OpportunitySchema,
    addOpportunity: PropTypes.func.isRequired,
};

export default OpportunityModal;
