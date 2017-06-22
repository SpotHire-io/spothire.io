import * as React from 'react';
import Modal from '../../../components/Global/Modal';
import UserTable from '../../../components/Employees/UserTable';
import BasicButton from '../../../components/Buttons/BasicButton';
import Opportunity from '../../../schemas/Opportunity';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

interface Props {
    updateOpportunity: Function
    opportunity?: Opportunity
}

interface State {
    isAddEmployeesModalOpen: boolean
}

export default class OpportunityModalEmployees extends React.Component<Props, State> {
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
                    onClose={this.closeAddEmployeesModal}
                    contentLabel="Add employees modal"
                    fullWidth={true}
                >
                    <EmployeeSelectionInterface/>
                </Modal>
            </div>
        )
    }
}

