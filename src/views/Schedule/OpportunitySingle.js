import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../schemas/Opportunity';

import classNames from 'classnames';

import Box from '../../components/Global/Box';

import OpportunityModalBasicInfo from '../../components/Scheduling/OpportunityModal/BasicInfo';

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

                                {console.log(this.props.opportunity)}

                                <OpportunityModalBasicInfo opportunity={this.props.opportunity} updateOpportunity={() => console.log('updating opportunity!')}/>
                            </Box>
                        </div>
                    </div>
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
