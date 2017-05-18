import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../schemas/Group';

import classNames from 'classnames';

import SecondaryMenu from '../../components/Global/SecondaryMenu';

import BasicButton from '../../components/Buttons/BasicButton';

import UserTable from '../../components/Talent/UserTable';
import TalentSelectionInterface from '../../components/Talent/TalentSelectionInterface';

import GroupDetailsEditor from '../../components/Talent/Groups/DetailsEditor';
import GroupCard from '../../components/Talent/Groups/Card';

import Modal from 'react-modal';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class GroupSingleView extends React.Component {
    constructor() {
        super();

        this.openAddTalentModal = this.openAddTalentModal.bind(this);
        this.closeAddTalentModal = this.closeAddTalentModal.bind(this);

        this.state = {
            isAddTalentModalOpen: false,
        }
    }

    openAddTalentModal() {
        return this.setState({ isAddTalentModalOpen: true });
    }

    closeAddTalentModal() {
        return this.setState({ isAddTalentModalOpen: false });
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
                            key: 'talent',
                            text: 'Talent',
                            href: '#talent',
                            isActive: false
                        },
                        {
                            key: 'groups',
                            text: 'Groups',
                            href: '#groups',
                            isActive: true
                        }
                    ]}
                    onClick={linkTo('Views', 'People')}
                />
                <div className="pa4 bg-near-white">
                    <div className="flex items-start">
                        <div className="w-one-third mr3">
                            <GroupCard group={this.props.group}/>
                            <GroupDetailsEditor group={this.props.group} className="mt3"/>
                        </div>

                        <div className="w-two-thirds">
                            <UserTable deleteUser={() => alert('User deleted')}/>

                            <div className="tr mt3">
                                <BasicButton className="button--positive" onClick={() => this.openAddTalentModal()}>Add Talent to Group</BasicButton>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isAddTalentModalOpen}
                    contentLabel={"Add talent modal"}
                    overlayClassName="sh-modal-overlay"
                    className="sh-modal sh-modal--full sh-shadow-2 "
                    onRequestClose={this.closeAddTalentModal}
                    closeTimeoutMS={100}
                >
                    <TalentSelectionInterface/>
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
