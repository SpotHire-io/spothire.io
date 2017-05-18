import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

import BasicButton from '../../components/Buttons/BasicButton';

import UserTable from '../../components/Talent/UserTable';

import OpportunityModalBasicInfo from '../../components/Scheduling/OpportunityModal/BasicInfo';
import ShiftManager from '../../components/Scheduling/ShiftManager';

class OpportunitySingleView extends React.Component {
    constructor() {
        super();
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
                                <h2 className="f6 mt0 lh-title ttu">Talent</h2>

                                <p>The following talent are invited or confirmed for the opportunity.</p>

                                <UserTable className="mt3" enabledColumns={['avatar', 'name']}/>

                                <div className="tr mt3">
                                    <BasicButton className="button--positive">Invite Talent to Opportunity</BasicButton>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <ShiftManager className="mt4 mh4"/>
                </div>
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
