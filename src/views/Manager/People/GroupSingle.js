import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../components/Global/Modal';
import UserTable from '../../../components/Employees/UserTable';
import GroupCard from '../../../components/Employees/Groups/Card';
import GroupSchema from '../../../schemas/Group';
import BasicButton from '../../../components/Buttons/BasicButton';
import Box from '../../../components/Global/Box';
import SecondaryMenu from '../../../components/Global/SecondaryMenu';
import GroupDetailsEditor from '../../../components/Employees/Groups/DetailsEditor';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

// storybook stuff
import { linkTo } from '@kadira/storybook';

/**
 * Details for a given group, and interface to add new group members.
 */
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
                {/* @TODO: Replace this with a wrapper component tying into react-router, to enable actual routing (see views/Manager/People/EmployeeSingle) */}
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
                            {/* @TODO: deleteUser should remove the user from the group */}
                            <UserTable deleteUser={() => alert('User deleted')}/>

                            <div className="tr mt3">
                                <BasicButton type="positive" onClick={() => this.openAddEmployeesModal()}>Add Employees to Group</BasicButton>
                            </div>
                        </div>
                    </div>
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
        );
    }
}

GroupSingleView.defaultProps = {
    className: '',
};

// GroupSingleView.propTypes = {
//     className: PropTypes.string,
//     group: GroupSchema.isRequired,
// };

export default GroupSingleView;
