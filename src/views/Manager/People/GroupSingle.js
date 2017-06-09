import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import SecondaryMenu from '../../../components/Global/SecondaryMenu';

import BasicButton from '../../../components/Buttons/BasicButton';

import UserTable from '../../../components/Employees/UserTable';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';

import GroupDetailsEditor from '../../../components/Employees/Groups/DetailsEditor';
import GroupCard from '../../../components/Employees/Groups/Card';

import Modal from 'react-modal';

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
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

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