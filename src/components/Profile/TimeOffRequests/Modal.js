import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import { Switch } from 'rebass';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimePicker from 'rc-time-picker';
import Modal from '../../Global/Modal';
import BasicButton from '../../Buttons/BasicButton';
import SingleDatePickerFocusContainer from '../../Miscellaneous/SingleDatePickerFocusContainer';

class NewTimeOffRequestModal extends React.Component {
    constructor() {
        super();

        this.toggleAllDay = this.toggleAllDay.bind(this);
        this.renderDateTimePicker = this.renderDateTimePicker.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
        this.renderTimePicker = this.renderTimePicker.bind(this);

        this.defaultRequest = {
            reason: '',
            isAllDay: false,
            dates: {
                start: moment(),
                end: moment(),
            },
        };

        this.submitRequest = this.submitRequest.bind(this);

        this.state = {
            request: this.defaultRequest,
        }
    }

    submitRequest() {
        this.props.onSubmitRequest({...this.state.request}); // send a copy because we're resetting the state
        this.setState({ request: this.defaultRequest });
        this.props.closeModal();
    }

    toggleAllDay() {
        let request = { ...this.state.request };

        request.isAllDay = ! this.state.request.isAllDay;

        this.setState({ request });
    }

    renderDateTimePicker(end) {
        return (
            <div className="flex" key={end}>
                {this.renderDatePicker(end)}
                {this.state.request.isAllDay ? null : this.renderTimePicker(end)}
            </div>
        );
    }

    renderDatePicker(end) {
        return (
            <dl className={classNames('mb0 mt3', {'mr4 w-50': ! this.state.request.isAllDay, 'w-100': this.state.request.isAllDay})}>
                <dt className="f6 ml0 mb2">{end} date</dt>
                <dd className="ml0">
                    <SingleDatePickerFocusContainer
                        date={moment(this.state.request.dates[end.toLowerCase()])}
                        onDateChange={newDate => {
                            const request = {...this.state.request};
                            const oldTime = moment(request.dates[end.toLowerCase()]); // copy current time

                            request.dates[end.toLowerCase()] = moment({
                                year: newDate.year(),
                                month: newDate.month(),
                                date: newDate.date(),
                                hour: oldTime.hour(),
                                minute: oldTime.minute(),
                                second: oldTime.second()
                            });

                            this.setState({ request });
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
                        value={moment(this.state.request.dates[end.toLowerCase()])}
                        showSecond={false}
                        allowEmpty={false}
                        use12Hours={true}
                        onChange={newTime => {
                            const request = {...this.state.request};

                            request.dates[end.toLowerCase()] = newTime;

                            this.setState({ request });
                        }}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="New time off request modal"
                onClose={this.props.closeModal}
            >
                <h2 className="absolute top-0 right-0 left-0 bg-teal white bb bw1 b--white-40 ma0 pa3 f5">Submit Time Off Request</h2>

                <div className="mt4 pt3">
                    <p>
                        <label className="f6 db" htmlFor="request_reason">Reason</label>
                        <input
                            className="mt2 w-100"
                            type="text"
                            id="request_reason"
                            name="request_reason"
                            value={this.state.request.reason}
                            onChange={(e) => {
                                let request = {...this.state.request};

                                request.reason = e.target.value;

                                this.setState({ request });
                            }}
                        />
                    </p>

                    {[
                        'Start',
                        'End'
                    ].map(this.renderDateTimePicker)}

                    <div className="mt3">
                        <Switch aria-labelledby="opp_allDay" onClick={this.toggleAllDay} checked={this.state.request.isAllDay} tabIndex="0"/>
                        <span onClick={this.toggleAllDay} id="opp_allDay" className="pointer dib v-top mt2 ml2 f6">All day</span>
                    </div>
                </div>

                <div className="tr">
                    <BasicButton className="button--neutral mt3" onClick={() => this.props.closeModal()}>Cancel</BasicButton>
                    <BasicButton className="button--positive mt3 ml3" onClick={() => this.submitRequest()}>Submit</BasicButton>
                </div>
            </Modal>
        )
    }
}

NewTimeOffRequestModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func.isRequired,
};

export default NewTimeOffRequestModal;
