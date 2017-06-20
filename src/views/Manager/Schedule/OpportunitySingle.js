import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../components/Global/Modal';
import Box from '../../../components/Global/Box';
import BasicButton from '../../../components/Buttons/BasicButton';
import UserTable from '../../../components/Employees/UserTable';
import ShiftManager from '../../../components/Scheduling/ShiftManager';
import SectionSwitcher from '../../../components/Miscellaneous/SectionSwitcher';
import OpportunitySchema from '../../../schemas/Opportunity';
import EmployeeSelectionInterface from '../../../components/Employees/EmployeeSelectionInterface';
import OpportunityModalBasicInfo from '../../../components/Scheduling/OpportunityModal/BasicInfo';

class OpportunitySingleView extends React.Component {
    constructor(props) {
        super();

        this.updateOpportunity = this.updateOpportunity.bind(this);

        this.openAddEmployeesModal = this.openAddEmployeesModal.bind(this);
        this.closeAddEmployeesModal = this.closeAddEmployeesModal.bind(this);

        this.state = {
            isAddEmployeesModalOpen: false,
            opportunity: props.opportunity,
        };
    }

    updateOpportunity(opportunity) {
        this.setState({ opportunity });
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
                <SectionSwitcher
                    className="pb4 bg-near-white"
                    secondaryMenuClassName="ph4 mb4 bg-white"
                    sections={[
                        {
                            key: 'overview',
                            name: 'Overview',
                            content: (
                                <div className="flex mh4 items-start">
                                    <Box className="w-third mr3" title="Opportunity Details" headingType="inline">
                                        <h1 className="mb4 f3">{this.state.opportunity.title}</h1>
                                    </Box>
                                    <div className="w-two-thirds">
                                        <Box title="Opportunity Settings" headingType="inline">
                                            <OpportunityModalBasicInfo opportunity={this.state.opportunity} updateOpportunity={this.updateOpportunity}/>
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
                                    <Box className="w-third mr3" title="Opportunity Details" headingType="inline">
                                        <h1 className="mb4 f3">{this.state.opportunity.title}</h1>
                                    </Box>
                                    <div className="w-two-thirds">
                                        <Box title="Employees" headingType="inline">
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

OpportunitySingleView.defaultProps = {
    className: '',
};

OpportunitySingleView.propTypes = {
    className: PropTypes.string,
    opportunity: OpportunitySchema.isRequired
};

export default OpportunitySingleView;
