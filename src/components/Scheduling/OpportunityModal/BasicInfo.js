const React      = require('react');
import classNames from 'classnames';

const moment      = require('moment');

const SingleDatePicker = require('react-dates').SingleDatePicker;

const TimePicker = require('rc-time-picker');

import { Switch } from 'rebass';

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

class OpportunityModalBasicInfo extends React.Component {
    constructor() {
        super();

        this.toggleAllDay = this.toggleAllDay.bind(this);
        this.renderDateTimePicker = this.renderDateTimePicker.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
        this.renderTimePicker = this.renderTimePicker.bind(this);
    }

    toggleAllDay() {
        const opportunity = { ...this.props.opportunity };

        opportunity.isAllDay = ! this.props.opportunity.isAllDay;

        this.props.updateOpportunity(opportunity);
    }

    renderDateTimePicker(end) {
        return (
            <div className="flex" key={end}>
                {this.renderDatePicker(end)}
                {this.props.opportunity.isAllDay ? null : this.renderTimePicker(end)}
            </div>
        );
    }

    renderDatePicker(end) {
        return (
            <dl className={classNames('mb0 mt3', {'mr4 w-50': ! this.props.opportunity.isAllDay, 'w-100': this.props.opportunity.isAllDay})}>
                <dt className="f6 ml0 mb2">{end} date</dt>
                <dd className="ml0">
                    <SingleDatePickerFocusContainer
                        date={moment(this.props.opportunity.selectedDates[end.toLowerCase()])}
                        onDateChange={newDate => {
                            const opportunity = {...this.props.opportunity};
                            const oldTime     = moment(opportunity.selectedDates[end.toLowerCase()]); // copy current time

                            opportunity.selectedDates[end.toLowerCase()] = moment({
                                year: newDate.year(),
                                month: newDate.month(),
                                date: newDate.date(),
                                hour: oldTime.hour(),
                                minute: oldTime.minute(),
                                second: oldTime.second()
                            });

                            this.props.updateOpportunity(opportunity);
                        }}
                        withPortal={true}
                        displayFormat="MMMM Do, YYYY"
                    />
                </dd>
            </dl>
        );
    }

    renderTimePicker(end) {
        return (
            <dl className={classNames('mb0 mt3 w-50')}>
                <dt className="f6 ml0 mb2">{end} time</dt>
                <dd className="ml0">
                    <TimePicker
                        value={moment(this.props.opportunity.selectedDates[end.toLowerCase()])}
                        showSecond={false}
                        allowEmpty={false}
                        use12Hours={true}
                        onChange={newTime => {
                            const opportunity = {...this.props.opportunity};

                            opportunity.selectedDates[end.toLowerCase()] = newTime;

                            this.props.updateOpportunity(opportunity);
                        }}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        return (
            <div className="mt3">
                <p className="mt3">
                    <label className="f6 db" htmlFor="opp_name">Name</label>
                    <input className="mt2 w-100" type="text" id="opp_name" name="opp_name"/>
                </p>

                <p className="mt3">
                    <label className="f6 db" htmlFor="opp_location">Location</label>
                    <input className="mt2 w-100" type="text" id="opp_location" name="opp_location"/>
                </p>

                <div className="flex mt3">
                    <p className="w-50 mr4">
                        <label className="f6 db" htmlFor="opp_hours">Number of hours</label>
                        <input className="mt2 w-100" type="number" id="opp_hours" name="opp_hours"/>
                    </p>
                    <p className="w-50 mt0">
                        <label className="f6 db" htmlFor="opp_rate">Pay rate</label>
                        <input className="mt2 w-100" type="number" id="opp_rate" name="opp_rate"/>
                    </p>
                </div>

                {[
                    'Start',
                    'End'
                ].map(this.renderDateTimePicker)}

                <div className="mt3">
                    <Switch aria-labelledby="opp_allDay" onClick={this.toggleAllDay} checked={this.props.opportunity.isAllDay} tabIndex="0"/>
                    <span onClick={this.toggleAllDay} id="opp_allDay" className="pointer dib v-top mt2 ml2 f6">All day</span>
                </div>

                <p className="mt3">
                    <label className="f6 db" htmlFor="opp_notes">Notes</label>
                    <textarea className="mt2 w-100" name="opp_notes" id="opp_notes" cols="30" rows="5"/>
                </p>
            </div>
        )
    }
}

OpportunityModalBasicInfo.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalBasicInfo;