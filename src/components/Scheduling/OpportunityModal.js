const React      = require('react');
const classNames = require('classnames');

const moment      = require('moment');

const Modal = require('react-modal');

const BasicButton = require('../Buttons/BasicButton');

const SingleDatePicker = require('react-dates').SingleDatePicker;

const TimePicker = require('rc-time-picker');

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

        this.state = {
            isModalOpen: false,
            selectedDates: {
                start: new Date(1970, 0, 0),
                end: new Date(1970, 0, 0)
            }
        };

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isModalOpen}
                contentLabel={"New event modal"}
                overlayClassName="sh-modal-overlay"
                className="sh-modal sh-shadow-2 "
                onRequestClose={this.closeModal}
            >
                <h2 className="mt0 mb2">New Event</h2>

                {[
                    'Start',
                    'End'
                ].map((end) => (
                    <div className="flex" key={end}>
                        <dl className="w-50 mr4">
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
                                    displayFormat="MMMM Do, YYYY"
                                />
                            </dd>
                        </dl>

                        <dl className="w-50">
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
        )
    }
}

OpportunityModal.defaultProps = {
    className: ''
};

OpportunityModal.propTypes = {

};

module.exports = OpportunityModal;