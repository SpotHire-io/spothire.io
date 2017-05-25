import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../schemas/Opportunity';

import Box from '../components/Global/Box';

import OverviewCalendar from '../components/Scheduling/OverviewCalendar';

import FilterContainer from '../components/Filters/FilterContainer';
import Filter from '../components/Filters/Filter';

import Select from 'react-select';

// storybook stuff
import { linkTo } from '@kadira/storybook';

// dummy data
import users from '../data/people.json';

class ScheduleView extends React.Component {
    constructor() {
        super();

        this.resetFilters = this.resetFilters.bind(this);

        this.state = {
            filteredUserIds: [
                {
                    label: `${users[0].firstName} ${users[0].lastName}`,
                    value: users[0].id,
                }
            ]
        };
    }

    resetFilters() {
        this.setState({
            filteredUserIds: [
                {
                    label: `${users[0].firstName} ${users[0].lastName}`,
                    value: users[0].id,
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <div className="pa4 bg-near-white">
                    <div className="flex">
                        <FilterContainer className="mr3 w-third self-start" onResetFilters={this.resetFilters}>
                            <label htmlFor="schedule_userId_filter" className="db mb2 f6">Managers</label>
                            <Select
                                id="schedule_userId_filter"
                                multi
                                options={users
                                    .filter((user) => user.type === 'admin' || user.type === 'manager')
                                    .map((user) => {
                                        return {
                                            label: `${user.firstName} ${user.lastName}`,
                                            value: user.id,
                                        };
                                    })}
                                value={this.state.filteredUserIds}
                                onChange={(selectedUsers) => this.setState({ filteredUserIds: selectedUsers })}
                            />
                            <small className="dib f6 black-60 lh-title mt2">Filter whose opportunities appear.</small>
                        </FilterContainer>
                        <Box className="flex-auto" title="Calendar">
                            <OverviewCalendar
                                style={{height: '75vh'}}
                                events={this.props.events.filter((event) => this.state.filteredUserIds.map((user) => user.value).includes(event.userId))}
                                onSelectEvent={linkTo('Views', 'Schedule:OpportunitySingle')}
                            />
                        </Box>
                    </div>
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
