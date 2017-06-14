import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import UserTable from '../../../components/Employees/UserTable';
import GroupCard from '../../../components/Employees/Groups/Card';
import GroupSchema from '../../../schemas/Groups/Static';
import BasicButton from '../../../components/Buttons/BasicButton';
import SecondaryMenu from '../../../components/Global/SecondaryMenu';
import GroupDetailsEditor from '../../../components/Employees/Groups/DetailsEditor';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class GroupSingleView extends React.Component {
    constructor() {
        super();

        this.openAddEmployeesModal = this.openAddEmployeesModal.bind(this);
        this.closeAddEmployeesModal = this.closeAddEmployeesModal.bind(this);

        this.state = {
            isAddEmployeesModalOpen: false,
        }
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
                <SecondaryMenu
                    className="ph4 bg-white"
                    items={[
                        {
                            key: 'employees',
                            text: 'Employees',
                            href: '#employees',
                            isActive: false
                        },
                        {
                            key: 'groups',
                            text: 'Groups',
                            href: '#groups',
                            isActive: true
                        }
                    ]}
                    onClick={linkTo('Views (manager)', 'People')}
                />
                <div className="pa4 bg-near-white">
                    <div className="flex items-start">
                        <div className="w-third mr3">
                            <GroupCard group={this.props.group}/>
                            <GroupDetailsEditor group={this.props.group} className="mt3"/>
                        </div>

                        <div className="w-two-thirds">
                            <UserTable deleteUser={() => alert('User deleted')}/>

                            <div className="tr mt3">
                                <BasicButton className="button--positive" onClick={() => this.openAddEmployeesModal()}>Add Employees to Group</BasicButton>
                            </div>
                        </div>
                    </div>
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

GroupSingleView.defaultProps = {
    className: '',
};

GroupSingleView.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupSingleView;
