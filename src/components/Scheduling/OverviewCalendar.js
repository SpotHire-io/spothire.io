const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

import OpportunityModal from './OpportunityModal';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const filteredUsers = [0];

class OverviewCalendar extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false,
            opportunity: {
                isAllDay: false,
                selectedDates: {
                    start: new Date(1970, 0, 0),
                    end: new Date(1970, 0, 0)
                },
                talent: {
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
            return (this.props.filter.values.indexOf( props.event[ this.props.filter.property ] ) !== -1) ?
                props.children :
                <div className="rbc-alt-bg">{props.children}</div>;
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

        return (
            <div className={wrapperClasses} style={{height: '75vh'}}>
                <BigCalendar
                    selectable
                    events={this.props.events}
                    components={{
                        event: ImageEvent,
                        eventWrapper: EventWrapper,

                    }}
                    defaultView="week"
                    scrollToTime={new Date(1970, 1, 1, 7)}
                    views={['week', 'day']}
                    startAccessor={(event) => new Date(event.start)}
                    endAccessor={(event) => new Date(event.end)}
                    onSelectSlot={this.handleSelectSlot}
                />
                <OpportunityModal
                    isOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    opportunity={this.state.opportunity}
                    updateOpportunity={this.updateOpportunity}
                />
            </div>
        )
    }
}

OverviewCalendar.defaultProps = {
    className: '',
    events: []
};

OverviewCalendar.propTypes = {
    events: React.PropTypes.array.isRequired
};

module.exports = OverviewCalendar;