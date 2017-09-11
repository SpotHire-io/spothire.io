import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import TimePicker from 'rc-time-picker';
import SingleDatePickerFocusContainer from '../../Miscellaneous/SingleDatePickerFocusContainer';
import { Switch } from 'rebass';

/**
 * Interface to configure basic information about an opportunity.
 *
 * Pass the opportunity via `props.opportunity` and a function accepting the edited opportunity
 * via `props.updateOpportunity`.
 */
const BasicInfo = ({ updateOpportunity, opportunity }) => {
    const toggleAllDay = () => {
        const updatedOpportunity = { ...opportunity };

        updatedOpportunity.isAllDay = ! opportunity.isAllDay;

        updateOpportunity(updatedOpportunity);
    }

    const updateOpportunityField = (field, value) => {
        const updatedOpportunity = { ...opportunity };

        updatedOpportunity[field] = value;

        updateOpportunity(updatedOpportunity);
    }

    const renderDateTimePicker = end => (
        <div className="flex" key={end}>
            {renderDatePicker(end)}
            {opportunity.isAllDay ? null : renderTimePicker(end)}
        </div>
    );

    const renderDatePicker = end => (
        <dl className={classNames('mb0 mt3', {'mr4 w-50': ! opportunity.isAllDay, 'w-100': opportunity.isAllDay})}>
            <dt className="f6 ml0 mb2">{end} date</dt>
            <dd className="ml0">
                <SingleDatePickerFocusContainer
                    date={moment(opportunity.dates[end.toLowerCase()])}
                    onDateChange={newDate => {
                        const updatedOpportunity = {...opportunity};
                        const oldTime = moment(updatedOpportunity.dates[end.toLowerCase()]); // copy current time

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

    const renderTimePicker = end => (
        <dl className={classNames('mb0 mt3 w-50')}>
            <dt className="f6 ml0 mb2">{end} time</dt>
            <dd className="ml0">
                <TimePicker
                    value={moment(opportunity.dates[end.toLowerCase()])}
                    showSecond={false}
                    allowEmpty={false}
                    use12Hours={true}
                    onChange={(newTime) => {
                        const updatedOpportunity = {...opportunity};

                        updatedOpportunity.dates[end.toLowerCase()] = newTime;

                        updateOpportunity(updatedOpportunity);
                    }}
                />
            </dd>
        </dl>
    );

    return ( // @TODO: Update fields to save to the opportunity, instead of just defaultValue
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

export default BasicInfo;
