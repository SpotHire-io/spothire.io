const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

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
            <div className={wrapperClasses} style={{height: '50vh'}}>
                <BigCalendar
                    events={this.props.events}
                    defaultView="week"
                    views={['week', 'day']}
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