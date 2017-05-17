import React from 'react';

import PropTypes from 'prop-types';

import MainMenu from '../components/Global/MainMenu';
import Box from '../components/Global/Box';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';

import events from '../data/events.json';

class ScheduleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MainMenu selectedItem="Schedule"/>
                <div className="pa4 bg-near-white">
                    <Box title="Calendar">
                        <OverviewCalendar
                            events={events}
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

};

export default ScheduleView;
