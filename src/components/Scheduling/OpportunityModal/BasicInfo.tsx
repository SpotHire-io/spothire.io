import 'moment/locale/en-ca';
import * as React from 'react';
import * as moment from 'moment';
import * as classNames from 'classnames';
const TimePicker = require('rc-time-picker');
import OpportunitySchema from '../../../schemas/Opportunity';
import SingleDatePickerFocusContainer from '../../Miscellaneous/SingleDatePickerFocusContainer';
import { Switch } from 'rebass';

interface Props {
    updateOpportunity: Function,
    opportunity: OpportunitySchema
}

const OpportunityModalBasicInfo: React.StatelessComponent<Props> = ({ updateOpportunity, opportunity }) => {
    const toggleAllDay = () => {
        const updatedOpportunity: OpportunitySchema = { ...opportunity };

        updatedOpportunity.isAllDay = ! opportunity.isAllDay;

        updateOpportunity(updatedOpportunity);
    }

    const updateOpportunityField = (field: any, value: any) => {
        const updatedOpportunity: OpportunitySchema = { ...opportunity };

        updatedOpportunity[field] = value;

        updateOpportunity(updatedOpportunity);
    }

    const renderDateTimePicker = (end: 'Start' | 'End') => (
        <div className="flex" key={end}>
            {renderDatePicker(end)}
            {opportunity.isAllDay ? null : renderTimePicker(end)}
        </div>
    );

    const renderDatePicker = (end: 'Start' | 'End') => (
        <dl className={classNames('mb0 mt3', {'mr4 w-50': ! opportunity.isAllDay, 'w-100': opportunity.isAllDay})}>
            <dt className="f6 ml0 mb2">{end} date</dt>
            <dd className="ml0">
                <SingleDatePickerFocusContainer
                    date={moment(opportunity.dates[end.toLowerCase()])}
                    onDateChange={(newDate: moment.Moment) => {
                        const updatedOpportunity: OpportunitySchema = {...opportunity};
                        const oldTime: moment.Moment = moment(updatedOpportunity.dates[end.toLowerCase()]); // copy current time

                        updatedOpportunity.dates[end.toLowerCase()] = moment({
                            year: newDate.year(),
                            month: newDate.month(),
                            date: newDate.date(),
                            hour: oldTime.hour(),
                            minute: oldTime.minute(),
                            second: oldTime.second()
                        });

                        updateOpportunity(updatedOpportunity);
                    }}
                    withPortal={true}
                    displayFormat="MMMM Do, YYYY"
                    id={`opp${end}Date`}
                />
            </dd>
        </dl>
    );

    const renderTimePicker = (end: 'Start' | 'End') => (
        <dl className={classNames('mb0 mt3 w-50')}>
            <dt className="f6 ml0 mb2">{end} time</dt>
            <dd className="ml0">
                <TimePicker
                    value={moment(opportunity.dates[end.toLowerCase()])}
                    showSecond={false}
                    allowEmpty={false}
                    use12Hours={true}
                    onChange={(newTime: moment.Moment) => {
                        const updatedOpportunity = {...opportunity};

                        updatedOpportunity.dates[end.toLowerCase()] = newTime;

                        updateOpportunity(updatedOpportunity);
                    }}
                />
            </dd>
        </dl>
    );

    return (
        <div>
            <p>
                <label className="f6 db" htmlFor="opp_title">Name</label>
                <input className="mt2 w-100" type="text" id="opp_title" name="opp_title" value={opportunity.title} onChange={(e) => updateOpportunityField('title', e.target.value)}/>
            </p>

            <p className="mt3">
                <label className="f6 db" htmlFor="opp_location">Location</label>
                <input className="mt2 w-100" type="text" id="opp_location" name="opp_location"/>
            </p>

            {[
                'Start',
                'End'
            ].map(renderDateTimePicker)}

            <div className="mt3">
                <Switch aria-labelledby="opp_allDay" onClick={toggleAllDay} checked={opportunity.isAllDay} tabIndex="0"/>
                <span onClick={toggleAllDay} id="opp_allDay" className="pointer dib v-top mt2 ml2 f6">All day</span>
            </div>

            <p className="mt3">
                <label className="f6 db" htmlFor="opp_notes">Notes</label>
                <textarea className="mt2 w-100" name="opp_notes" id="opp_notes"/>
            </p>
        </div>
    );
}

export default OpportunityModalBasicInfo;
