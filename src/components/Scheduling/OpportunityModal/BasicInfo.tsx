import 'moment/locale/en-ca';
import * as React from 'react';
import * as moment from 'moment';
import * as classNames from 'classnames';
const TimePicker = require('rc-time-picker');
import Opportunity from '../../../schemas/Opportunity';
import SingleDatePickerFocusContainer from '../../Miscellaneous/SingleDatePickerFocusContainer';
import { Switch } from 'rebass';

interface Props {
    opportunity: Opportunity
    updateOpportunity: Function
}
interface State {

}

class OpportunityModalBasicInfo extends React.Component<Props, State> {
    constructor() {
        super();

        this.toggleAllDay = this.toggleAllDay.bind(this);
        this.updateOpportunityField = this.updateOpportunityField.bind(this);

        this.renderDateTimePicker = this.renderDateTimePicker.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
        this.renderTimePicker = this.renderTimePicker.bind(this);
    }

    toggleAllDay() {
        const opportunity = { ...this.props.opportunity };

        opportunity.isAllDay = ! this.props.opportunity.isAllDay;

        this.props.updateOpportunity(opportunity);
    }

    updateOpportunityField(field: string, value: string) {
        const opportunity: any = { ...this.props.opportunity };

        opportunity[field] = value;

        this.props.updateOpportunity(opportunity);
    }

    renderDateTimePicker(end: string) {
        return (
            <div className="flex" key={end}>
                {() => this.renderDatePicker(end)}
                {this.props.opportunity.isAllDay ? null : () => this.renderTimePicker(end)}
            </div>
        );
    }

    renderDatePicker(end: string) {
        return (
            <dl className={classNames('mb0 mt3', {'mr4 w-50': ! this.props.opportunity.isAllDay, 'w-100': this.props.opportunity.isAllDay})}>
                <dt className="f6 ml0 mb2">{end} date</dt>
                <dd className="ml0">
                    <SingleDatePickerFocusContainer
                        date={moment(this.props.opportunity.dates[end.toLowerCase()])}
                        onDateChange={newDate => {
                            const opportunity = {...this.props.opportunity};
                            const oldTime     = moment(opportunity.dates[end.toLowerCase()]); // copy current time

                            opportunity.dates[end.toLowerCase()] = moment({
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
                        value={moment(this.props.opportunity.dates[end.toLowerCase()])}
                        showSecond={false}
                        allowEmpty={false}
                        use12Hours={true}
                        onChange={(newTime: string) => {
                            const opportunity = {...this.props.opportunity};

                            opportunity.dates[end.toLowerCase()] = newTime;

                            this.props.updateOpportunity(opportunity);
                        }}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        return (
            <div>
                <p>
                    <label className="f6 db" htmlFor="opp_title">Name</label>
                    <input className="mt2 w-100" type="text" id="opp_title" name="opp_title" value={this.props.opportunity.title} onChange={(e) => this.updateOpportunityField('title', e.target.value)}/>
                </p>

                <p className="mt3">
                    <label className="f6 db" htmlFor="opp_location">Location</label>
                    <input className="mt2 w-100" type="text" id="opp_location" name="opp_location"/>
                </p>

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
                    <textarea className="mt2 w-100" name="opp_notes" id="opp_notes" cols={30} rows={5}/>
                </p>
            </div>
        )
    }
}

export default OpportunityModalBasicInfo;
