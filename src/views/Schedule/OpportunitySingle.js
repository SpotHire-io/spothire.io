import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

import BasicButton from '../../components/Buttons/BasicButton';

import SectionSwitcher from '../../components/Miscellaneous/SectionSwitcher';

import UserTable from '../../components/Employees/UserTable';
import EmployeeSelectionInterface from '../../components/Employees/EmployeeSelectionInterface';

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
                <SectionSwitcher
                    className="pb4 bg-near-white"
                    secondaryMenuClassName="ph4 mb4 bg-white"
                    sections={[
                        {
                            key: 'overview',
                            name: 'Overview',
                            content: (
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
                                    </div>
                                </div>
                            ),
                        },
                        {
                            key: 'employees',
                            name: 'Employees',
                            content: (
                                <div className="flex mh4 items-start">
                                    <Box className="w-third mr3">
                                        <h2 className="f6 mt0 lh-title ttu">Opportunity Details</h2>

                                        <h1 className="mb4 f3">{this.props.opportunity.title}</h1>
                                    </Box>
                                    <div className="w-two-thirds">
                                        <Box>
                                            <h2 className="f6 mt0 lh-title ttu">Employees</h2>

                                            <p>The following employees are invited or confirmed for the opportunity.</p>

                                            <UserTable className="mt3" enabledColumns={['avatar', 'name']} hasShadow={false}/>

                                            <div className="tr mt3">
                                                <BasicButton className="button--positive" onClick={() => this.openAddEmployeesModal()}>Invite Employees to Opportunity</BasicButton>
                                            </div>
                                        </Box>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            key: 'shifts',
                            name: 'Shifts',
                            content: (
                                <ShiftManager
                                    className="mt4 mh4"
                                    instructionsContent={(
                                        <div>
                                            <h2 className="f6 mt0 lh-title ttu">Opportunity Shifts</h2>

                                            <p>
                                                Shifts have all the features of a normal opportunity, but are linked to their opportunity.
                                                Use them to organise different teams for large events, or to manage different shifts during
                                                a long opportunity. Employees can be invited to specific shifts instead of the overall opportunity.
                                            </p>
                                        </div>
                                    )}
                                />
                            )
                        }
                    ]}
                />
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
