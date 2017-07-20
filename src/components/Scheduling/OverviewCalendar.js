import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BigCalendar from 'react-big-calendar';
import OpportunityModal from './OpportunityModal';

// storybook stuff; @TODO: Replace usage of linkTo with react-router Link
import { linkTo } from '@kadira/storybook';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

/**
 * Main calendar component for viewing and managing opportunities.
 *
 * Includes `OpportunityModal` to create new opportunities.
 *
 * @TODO: Connect opportunity creation to the API, so that the list of opportunities actually updates.
 *        Also, probably, remove the "in-progress" opportunity from the state.
 */
class OverviewCalendar extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false,
            opportunity: {
                id: -1,
                title: '',
                isAllDay: false,
                isShift: false,
                dates: {
                    start: '1970-01-01T00:00:00.000',
                    end: '1970-01-01T00:00:00.000'
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
        opportunity.dates = selectedDates;

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
            if (this.props.highlightFilter !== undefined && this.props.highlightFilter.values.indexOf( props.event[ this.props.highlightFilter.property ] ) !== -1) {
                return <div className="rbc-alt-bg">{props.children}</div>;
            } else {
                return props.children;
            }
        };

        const ImageEvent = ({ event }) => {
            return (
                <div className="mt1">
                    {/* @TODO: Pull the two below images from the people attached to the opportunity itself */}
                    <div>
                        <img className="w1 h1 br-100 mr1" src="http://placehold.it/40x40" alt="placeholder"/>
                        <img className="w1 h1 br-100 mr1" src="http://placehold.it/40x40" alt="placeholder"/>
                    </div>
                    <p className="ma0 pa0 lh-solid">
                        {event.title}
                    </p>
                </div>
            );
        };

        const AgendaEvent = ({ event }) => {
            return (
                <div className="flex pointer hover-bg-near-white" onClick={this.props.onSelectEvent}>
                    <div className="flex flex-wrap justify-between content-start w-10 pr2">
                        {/* @TODO: Pull the below images from the people attached to the opportunity itself */}
                        {[...Array(3).keys()].map((number) => <img key={number} className="w1 h1 br-100 mr1 mb1" src="http://placehold.it/40x40" alt="placehold"/>)}
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
                    startAccessor={(event) => new Date(event.dates.start)}
                    endAccessor={(event) => new Date(event.dates.end)}
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
                    addOpportunity={linkTo('Views (manager)', 'Schedule:OpportunitySingle')} // @TODO: This should trigger an API call before redirecting to the newly created opportunity's page
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
    highlightFilter: PropTypes.shape({
        property: PropTypes.string,
        values: PropTypes.array,
    }),
};

export default OverviewCalendar;
