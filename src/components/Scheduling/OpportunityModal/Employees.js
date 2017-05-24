import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import OpportunitySchema from '../../../schemas/Opportunity';

import BasicButton from '../../../components/Buttons/BasicButton';

import UserTable from '../../../components/Employees/UserTable';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

import Modal from 'react-modal';

class OpportunityModalEmployees extends React.Component {
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
        return (
            <div>
                <p>The following employees are invited or confirmed for the {(this.props.opportunity.isShift) ? 'shift' : 'opportunity'}.</p>

                <UserTable className="mt3" enabledColumns={['avatar', 'name']} hasShadow={false}/>

                <div className="tr mt3">
                    <BasicButton className="button--positive" onClick={() => this.openAddEmployeesModal()}>Invite Employees to {(this.props.opportunity.isShift) ? 'Shift' : 'Opportunity'}</BasicButton>
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
        )
    }
}

OpportunityModalEmployees.propTypes = {
    updateOpportunity: PropTypes.func.isRequired,
    opportunity: OpportunitySchema
};

export default OpportunityModalEmployees;
