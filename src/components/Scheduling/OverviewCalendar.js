const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

const Modal = require('react-modal');

const BasicButton = require('../Buttons/BasicButton');

const SingleDatePicker = require('react-dates').SingleDatePicker;

const TimePicker = require('rc-time-picker');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const filteredUsers = [0];

class SingleDatePickerFocusContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            isFocused: false
        };
    }

    render() {
        return(
            <SingleDatePicker
                {...this.props}
                focused={this.state.isFocused}
                onFocusChange={({ focused }) => this.setState({ isFocused: focused })}
            />
        )
    }
}

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
        this.closeModal = this.closeModal.bind(this);
    }

    handleSelectSlot( selectedDates ) {
        const isModalOpen = true;

        this.setState({ isModalOpen, selectedDates });

        return true;
    }

    closeModal() {
        this.setState({ isModalOpen: false });
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
                    className="sh-modal sh-shadow-2 app-sans"
                    onRequestClose={this.closeModal}
                >
                    <h2 className="mt0 mb2">New Event</h2>

                    {[
                        'Start',
                        'End'
                    ].map((end) => (
                        <div className="cf" key={end}>
                            <dl className="fl mr4">
                                <dt className="f6 ml0 mb2">{end} date</dt>
                                <dd className="ml0">
                                    <SingleDatePickerFocusContainer
                                        date={moment(this.state.selectedDates[end.toLowerCase()])}
                                        onDateChange={newDate => {
                                            let selectedDates = {...this.state.selectedDates};
                                            const oldTime     = moment(selectedDates[end.toLowerCase()]); // copy current time

                                            selectedDates[end.toLowerCase()] = moment({
                                                year: newDate.year(),
                                                month: newDate.month(),
                                                date: newDate.date(),
                                                hour: oldTime.hour(),
                                                minute: oldTime.minute(),
                                                second: oldTime.second()
                                            });

                                            this.setState({ selectedDates });
                                        }}
                                        withPortal={true}
                                        isDayBlocked={day => {
                                            
                                        }}
                                    />
                                </dd>
                            </dl>

                            <dl className="fl">
                                <dt className="f6 ml0 mb2">{end} time</dt>
                                <dd className="ml0">
                                    <TimePicker
                                        value={moment(this.state.selectedDates[end.toLowerCase()])}
                                        showSecond={false}
                                        allowEmpty={false}
                                        use12Hours={true}
                                        onChange={newTime => {
                                            let selectedDates = {...this.state.selectedDates};

                                            selectedDates[end.toLowerCase()] = newTime;

                                            this.setState({ selectedDates });
                                        }}
                                    />
                                </dd>
                            </dl>
                        </div>
                    ))}

                    <div className="tr">
                        <BasicButton className="button--neutral mt3" onClick={() => this.closeModal()}>Cancel</BasicButton>
                        <BasicButton className="button--positive mt3 ml3" onClick={() => this.closeModal()}>Create</BasicButton>
                    </div>
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