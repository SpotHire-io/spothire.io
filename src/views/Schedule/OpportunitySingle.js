import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

import BasicButton from '../../components/Buttons/BasicButton';

import UserTable from '../../components/Talent/UserTable';
import EmployeeSelectionInterface from '../../components/Talent/EmployeeSelectionInterface';

import OpportunityModalBasicInfo from '../../components/Scheduling/OpportunityModal/BasicInfo';
import ShiftManager from '../../components/Scheduling/ShiftManager';

import Modal from 'react-modal';

class OpportunitySingleView extends React.Component {
    constructor() {
        super();

        this.openAddEmployeesModal = this.openAddEmployeesModal.bind(this);
        this.closeAddEmployeesModal = this.closeAddEmployeesModal.bind(this);

        this.state = {
            isAddEmployeesModalOpen: false,
        };
    }

    openAddEmployeesModal() {
        return this.setState({ isAddEmployeesModalOpen: true });
    }

    closeAddEmployeesModal() {
        return this.setState({ isAddEmployeesModalOpen: false });
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div>
                <div className="pv4 bg-near-white">
                    <div className="flex mh4 items-start">
                        <Box className="w-third mr3">
                            <h2 className="f6 mt0 lh-title ttu">Opportunity Details</h2>

                            <h1 className="mb4 f3">{this.props.opportunity.title}</h1>
                        </Box>
                        <div className="w-two-thirds">
                            <Box>
                                <h2 className="f6 mt0 lh-title ttu">Opportunity Settings</h2>

                                <OpportunityModalBasicInfo opportunity={this.props.opportunity} updateOpportunity={() => console.log('updating opportunity!')}/>
                            </Box>
                            <Box className="mt4">
                                <h2 className="f6 mt0 lh-title ttu">Employees</h2>

                                <p>The following employees are invited or confirmed for the opportunity.</p>

                                <UserTable className="mt3" enabledColumns={['avatar', 'name']} hasShadow={false}/>

                                <div className="tr mt3">
                                    <BasicButton className="button--positive" onClick={() => this.openAddEmployeesModal()}>Invite Employees to Opportunity</BasicButton>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <ShiftManager className="mt4 mh4"/>
                </div>
                <Modal
                    isOpen={this.state.isAddEmployeesModalOpen}
                    contentLabel={"Add employees modal"}
                    overlayClassName="sh-modal-overlay"
                    className="sh-modal sh-modal--full sh-shadow-2 "
                    onRequestClose={this.closeAddEmployeesModal}
                    closeTimeoutMS={100}
                >
                    <EmployeeSelectionInterface/>
                </Modal>
            </div>
        );
    }
}

OpportunitySingleView.defaultProps = {
    className: '',
};

OpportunitySingleView.propTypes = {
    className: PropTypes.string,
    opportunity: OpportunitySchema.isRequired
};

export default OpportunitySingleView;
