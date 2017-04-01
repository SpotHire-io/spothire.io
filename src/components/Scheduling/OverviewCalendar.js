const React      = require('react');
const classNames = require('classnames');

const BigCalendar = require('react-big-calendar');
const moment      = require('moment');

const BigCalendarViews = require('react-big-calendar').views;

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class OverviewCalendar extends React.Component {
    constructor() {
        super();

        console.log(BigCalendarViews);
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
                    views={() => [BigCalendarViews.WEEK, BigCalendarViews.DAY]}
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