import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../schemas/Person';
import OpportunitySchema from '../schemas/Opportunity';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import Box from '../components/Global/Box';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';

import AvailabilityEditor from '../components/Profile/AvailabilityEditor';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class DashboardView extends React.Component {
    constructor() {
        super();

        this.state = {
            visibleCalendarView: 'week',
        }
    }

    render() {
        return (
            <div className="pa4 bg-near-white flex flex-wrap">
                <Box className="w-100" title="Calendar">
                    <OverviewCalendar
                        className={classNames({
                            'animate-all': true,
                            'h5': this.state.visibleCalendarView !== 'month',
                            'h6': this.state.visibleCalendarView === 'month'
                        })}
                        events={this.props.events}
                        onSelectEvent={linkTo('Views', 'Schedule:OpportunitySingle')}
                        calendarProps={{
                            views: ['month', 'week', 'day'],
                            defaultView: 'week',
                            onView: (visibleCalendarView) => this.setState({ visibleCalendarView }),
                        }}
                    />
                </Box>

                <Box className="mt3 w-third mr3" title="Agenda" contentWrapperClassName="pa3 max-h5 overflow-auto">
                    <ol className="list pa0 ma0 nt3">
                        {
                            this.props.events
                                .sort((eventA, eventB) => moment(eventA.selectedDates.start) - moment(eventB.selectedDates.start))
                                .map((event) => {
                                    return (
                                        <li className="mt3 pa0" key={event.id}>
                                            <a className="db link hover-bg-near-white black" href="#" onClick={linkTo('Views', 'Schedule:OpportunitySingle')}>
                                                <h3 className="mv0 f5">{event.title}</h3>
                                                <p className="mt1">{moment(event.selectedDates.start).format('MMMM Do, YYYY')}</p>
                                            </a>
                                        </li>
                                    );
                                })
                        }
                    </ol>
                </Box>

                <Box className="mt3 w-third" title="Availability" contentWrapperClassName="pa3 max-h5 overflow-auto">
                    <AvailabilityEditor employee={this.props.employee} onSubmitAvailability={(availability) => console.log(availability)}/>
                </Box>
            </div>
        );
    }
}

DashboardView.defaultProps = {

};

DashboardView.propTypes = {
    events: PropTypes.arrayOf(OpportunitySchema).isRequired,
    employee: PersonSchema.isRequired,
};

export default DashboardView;
