import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import BigCalendar from 'react-big-calendar';
import moment      from 'moment';
import 'moment/locale/en-ca';

import OpportunityModal from './OpportunityModal';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

// storybook stuff
import { linkTo } from '@kadira/storybook';

class OverviewCalendar extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false,
            opportunity: {
                id: -1,
                isAllDay: false,
                selectedDates: {
                    start: new Date(1970, 0, 0),
                    end: new Date(1970, 0, 0)
                },
                employees: {
                    invited: 'all',
                    confirmed: []
                }
            }
        };

        this.handleSelectSlot = this.handleSelectSlot.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateOpportunity = this.updateOpportunity.bind(this);
    }

    handleSelectSlot( selectedDates ) {
        const isModalOpen = true;
        const opportunity = { ...this.state.opportunity }; // copy opportunity state

        // Pass in new dates for opportunity
        opportunity.selectedDates = selectedDates;

        this.setState({ isModalOpen, opportunity });

        return true;
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    updateOpportunity( opportunity ) {
        this.setState({ opportunity });
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        const EventWrapper = (props) => {
            if (typeof this.props.filter != 'undefined' && this.props.filter.values.indexOf( props.event[ this.props.filter.property ] ) !== -1) {
                return <div className="rbc-alt-bg">{props.children}</div>;
            } else {
                return props.children;
            }
        };

        const ImageEvent = ({ event }) => {
            return (
                <div className="mt1">
                    <div>
                        <img className="w1 h1 br-100 mr1" src="http://placehold.it/40x40"/>
                        <img className="w1 h1 br-100 mr1" src="http://placehold.it/40x40"/>
                    </div>
                    <p className="ma0 pa0 lh-solid">
                        {event.title}
                    </p>
                </div>
            );
        };

        const AgendaEvent = ({ event }) => {
            return (
                <div className="flex">
                    <div className="flex flex-wrap justify-between content-start w-10 pr2">
                        {[...Array(3).keys()].map((number) => <img key={number} className="w1 h1 br-100 mr1 mb1" src="http://placehold.it/40x40"/>)}
                    </div>
                    <div className="w-90">
                        <h3 className="f5 b ma0 pa0 lh-solid">
                            {event.title}
                        </h3>
                        <p className="mt2 pa0">
                            {event.desc}
                        </p>
                    </div>
                </div>
            );
        };

        return (
            <div className={wrapperClasses} style={this.props.style}>
                <BigCalendar
                    selectable
                    events={this.props.events}
                    components={{
                        event: ImageEvent,
                        eventWrapper: EventWrapper,
                        agenda: {
                            event: AgendaEvent,
                        },
                    }}
                    scrollToTime={new Date(1970, 1, 1, 7)}
                    startAccessor={(event) => new Date(event.selectedDates.start)}
                    endAccessor={(event) => new Date(event.selectedDates.end)}
                    allDayAccessor="isAllDay"
                    onSelectSlot={this.handleSelectSlot}
                    onSelectEvent={this.props.onSelectEvent}
                    {...this.props.calendarProps}
                />
                <OpportunityModal
                    isOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    opportunity={this.state.opportunity}
                    updateOpportunity={this.updateOpportunity}
                    addOpportunity={linkTo('Views', 'Schedule:OpportunitySingle')}
                />
            </div>
        )
    }
}

OverviewCalendar.defaultProps = {
    className: '',
    style: {},
    events: [],
    onSelectEvent: (event) => console.log(event),
    calendarProps: {
        views: ['week', 'day', 'agenda'],
        defaultView: 'week'
    },
};

OverviewCalendar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    events: PropTypes.array.isRequired,
    onSelectEvent: PropTypes.func,
    calendarProps: PropTypes.object,
};

export default OverviewCalendar;
