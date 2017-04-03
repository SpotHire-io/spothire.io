const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const filteredUsers = [0];

class EventWrapper extends React.Component {
    render() {
        return (filteredUsers.indexOf(this.props.event.userId) !== -1) ?
            this.props.children :
            <div className="rbc-alt-bg">{this.props.children}</div>;
    }
}

class OverviewCalendar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses} style={{height: '75vh'}}>
                <BigCalendar
                    events={this.props.events}
                    components={{
                        eventWrapper: EventWrapper
                    }}
                    defaultView="week"
                    views={['week', 'day']}
                    startAccessor={(event) => new Date(event.start)}
                    endAccessor={(event) => new Date(event.end)}
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