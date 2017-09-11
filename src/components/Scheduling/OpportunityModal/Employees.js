import React from 'react';
import Modal from '../../../components/Global/Modal';
import UserTable from '../../../components/Employees/UserTable';
import BasicButton from '../../../components/Buttons/BasicButton';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

/**
 * Interface to review employees added to an opportunity, and to select more via a modal.
 */
export default class OpportunityModalEmployees extends React.Component {
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
                    <BasicButton type="positive" onClick={() => this.openAddEmployeesModal()}>Invite Employees to {(this.props.opportunity.isShift) ? 'Shift' : 'Opportunity'}</BasicButton>
                </div>

                <Modal
                    isOpen={this.state.isAddEmployeesModalOpen}
                    onClose={this.closeAddEmployeesModal}
                    contentLabel="Add employees modal"
                    fullWidth={true}
                >
                    <EmployeeSelectionInterface />
                </Modal>
            </div>
        )
    }
}

