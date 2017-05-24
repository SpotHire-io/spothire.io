import React from 'react';

import PropTypes from 'prop-types';

import Box from '../components/Global/Box';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class DashboardView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pa4 bg-near-white">
                <Box className="w-100" title="Calendar">
                    <OverviewCalendar
                        className="h5"
                        events={this.props.events}
                        onSelectEvent={linkTo('Views', 'Schedule:OpportunitySingle')}
                        calendarProps={{
                            views: ['month', 'week', 'day'],
                            defaultView: 'week',
                        }}
                    />
                </Box>

                <Box className="mt3 w-third" title="Agenda">
                    <OverviewCalendar
                        className="h5"
                        events={this.props.events}
                        onSelectEvent={linkTo('Views', 'Schedule:OpportunitySingle')}
                        calendarProps={{
                            views: ['agenda'],
                            defaultView: 'agenda',
                        }}
                    />
                </Box>
            </div>
        );
    }
}

DashboardView.defaultProps = {

};

DashboardView.propTypes = {

};

export default DashboardView;
