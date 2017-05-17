import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../schemas/Opportunity';

import MainMenu from '../components/Global/MainMenu';
import Box from '../components/Global/Box';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';

class ScheduleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="pa4 bg-near-white">
                    <Box title="Calendar">
                        <OverviewCalendar
                            events={this.props.events}
                            filter={{
                                property: 'userId',
                                values: [0]
                            }}
                        />
                    </Box>
                </div>
            </div>
        );
    }
}

ScheduleView.defaultProps = {

};

ScheduleView.propTypes = {
    events: PropTypes.arrayOf(OpportunitySchema)
};

export default ScheduleView;
