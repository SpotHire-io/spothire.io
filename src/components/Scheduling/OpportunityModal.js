const React      = require('react');
import classNames from 'classnames';

const moment      = require('moment');

const Modal = require('react-modal');

import SectionSwitcher from '../Miscellaneous/SectionSwitcher';

const BasicButton = require('../Buttons/BasicButton');

import OpportunityModalBasicInfo from './OpportunityModal/BasicInfo';
import OpportunityModalShifts from './OpportunityModal/Shifts';
import OpportunityModalTalent from './OpportunityModal/Talent';

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
                <SectionSwitcher
                    className="mt4 pt1"
                    secondaryMenuClassName="mb3"
                    sections={[
                        {
                            key: 'basic',
                            name: 'Basic Info',
                            content: <OpportunityModalBasicInfo {...this.props}/>
                        },
                        {
                            key: 'talent',
                            name: 'Talent',
                            content: <OpportunityModalTalent {...this.props}/>
                        },
                        {
                            key: 'shifts',
                            name: 'Shifts',
                            content: <OpportunityModalShifts {...this.props}/>
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