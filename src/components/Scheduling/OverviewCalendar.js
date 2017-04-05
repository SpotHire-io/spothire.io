const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

const Modal = require('react-modal');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const filteredUsers = [0];

class OverviewCalendar extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false,
            selectedDates: {
                start: new Date(1970, 0, 0),
                end: new Date(1970, 0, 0)
            }
        };

        this.handleSelectSlot = this.handleSelectSlot.bind(this);
    }

    handleSelectSlot( selectedDates ) {
        const isModalOpen = true;

        this.setState({ isModalOpen, selectedDates });

        return true;
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
                    views={['week', 'day']}
                    startAccessor={(event) => new Date(event.start)}
                    endAccessor={(event) => new Date(event.end)}
                    onSelectSlot={this.handleSelectSlot}
                />
                <Modal
                    isOpen={this.state.isModalOpen}
                    contentLabel={"New event modal"}
                    overlayClassName="sh-modal-overlay"
                >
                    Start: {this.state.selectedDates.start.toLocaleString()}
                    End: {this.state.selectedDates.end.toLocaleString()}
                </Modal>
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