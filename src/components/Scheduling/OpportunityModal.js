const React      = require('react');
import classNames from 'classnames';

const moment      = require('moment');

const Modal = require('react-modal');

import SectionSwitcher from '../Miscellaneous/SectionSwitcher';

const BasicButton = require('../Buttons/BasicButton');

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
                <SectionSwitcher
                    secondaryMenuClassName=""
                    sections={[
                        {
                            key: 'basic',
                            name: 'Basic Info',
                            content: <OpportunityModalBasicInfo {...this.props}/>
                        },
                        {
                            key: 'invitees',
                            name: 'Invitees',
                            content: (
                                <p>Interface to add people...</p>
                            )
                        }
                    ]}
                />

                <div className="tr">
                    <BasicButton className="button--neutral mt3" onClick={() => this.props.closeModal()}>Cancel</BasicButton>
                    <BasicButton className="button--positive mt3 ml3" onClick={() => this.props.closeModal()}>Create</BasicButton>
                </div>
            </Modal>
        )
    }
}

OpportunityModal.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

module.exports = OpportunityModal;