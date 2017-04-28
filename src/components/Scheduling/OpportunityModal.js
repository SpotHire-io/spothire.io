const React      = require('react');

const moment      = require('moment');

const Modal = require('react-modal');

import SectionSwitcher from '../Miscellaneous/SectionSwitcher';

const BasicButton = require('../Buttons/BasicButton');

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

class OpportunityModal extends React.Component {
    constructor() {
        super();

        this.toggleAllDay = this.toggleAllDay.bind(this);
    }

    toggleAllDay() {
        const opportunity = { ...this.props.opportunity };

        opportunity.isAllDay = ! this.props.opportunity.isAllDay;

        this.props.updateOpportunity(opportunity);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel={"New event modal"}
                overlayClassName="sh-modal-overlay"
                className="sh-modal sh-shadow-2 "
                onRequestClose={ this.props.closeModal}
            >
                <SectionSwitcher
                    secondaryMenuClassName=""
                    sections={[
                        {
                            key: 'basic',
                            name: 'Basic Info',
                            content: (
                                <div className="mt3">
                                    <p className="mt3">
                                        <label className="f6 db" htmlFor="opp_name">Name</label>
                                        <input className="mt2 w-100" type="text" id="opp_name" name="opp_name"/>
                                    </p>

                                    <p className="mt3">
                                        <label className="f6 db" htmlFor="opp_location">Location</label>
                                        <input className="mt2 w-100" type="text" id="opp_location" name="opp_location"/>
                                    </p>

                                    {[
                                        'Start',
                                        'End'
                                    ].map((end) => (
                                        <div className="flex" key={end}>
                                            <dl className="w-50 mr4 mb0 mt3">
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

                                            <dl className="w-50 mb0 mt3">
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
                                        </div>
                                    ))}

                                    <div className="mt3" onClick={this.toggleAllDay} aria-labelledby="opp_allDay">
                                        <Switch checked={this.props.opportunity.isAllDay}/>
                                        <span id="opp_allDay" className="pointer dib v-top mt2 ml2 f6">All day</span>
                                    </div>

                                    <p className="mt3">
                                        <label className="f6 db" htmlFor="opp_notes">Notes</label>
                                        <textarea className="mt2 w-100" name="opp_notes" id="opp_notes" cols="30" rows="5"/>
                                    </p>
                                </div>
                            )
                        },
                        {
                            key: 'invitees',
                            name: 'Invitees',
                            content: (
                                <p>Interface to add people...</p>
                            )
                        }
                    ]}
                />


                <div className="tr">
                    <BasicButton className="button--neutral mt3" onClick={() => this.props.closeModal()}>Cancel</BasicButton>
                    <BasicButton className="button--positive mt3 ml3" onClick={() => this.props.closeModal()}>Create</BasicButton>
                </div>
            </Modal>
        )
    }
}

OpportunityModal.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

module.exports = OpportunityModal;