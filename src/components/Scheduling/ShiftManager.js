import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/en-ca';

import Box from '../Global/Box';

import BasicButton from '../Buttons/BasicButton';

import SectionSwitcher from '../Miscellaneous/SectionSwitcher';

import OpportunityModalBasicInfo from './OpportunityModal/BasicInfo';
import OpportunityModalTalent from './OpportunityModal/Talent';

class ShiftManager extends React.Component {
    constructor() {
        super();

        this.setCurrentlyEditingShift = this.setCurrentlyEditingShift.bind(this);

        this.deleteShift = this.deleteShift.bind(this);
        this.createShift = this.createShift.bind(this);
        this.updateShift = this.updateShift.bind(this);

        this.sectionSwitcherInstance = null; // becomes a ref, to allow us to reset the active pane on switching shift

        this.state = {
            currentlyEditingShiftId: 0,
            shifts: [
                {
                    id: 0,
                    title: 'First shift',
                    isAllDay: false,
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 8, 0)),
                        end: moment(new Date(2017, 4, 1, 16, 0))
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                },
                {
                    id: 1,
                    title: 'Second shift',
                    isAllDay: false,
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                },
                {
                    id: 2,
                    title: 'Third shift',
                    isAllDay: false,
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 8, 0)),
                        end: moment(new Date(2017, 4, 1, 16, 0))
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                },
                {
                    id: 3,
                    title: 'Fourth shift',
                    isAllDay: false,
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                },
                {
                    id: 4,
                    title: 'Super extra long shift name that goes on forever',
                    isAllDay: false,
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    },
                    employees: {
                        invited: 'all',
                        confirmed: []
                    }
                }
            ]
        };
    }

    setCurrentlyEditingShift(currentlyEditingShiftId) {
        this.sectionSwitcherInstance.resetActiveSection(); // reset the open tab

        return this.setState({ currentlyEditingShiftId });
    }

    deleteShift(shiftId) {
        let shifts = [...this.state.shifts];

        // find the shift's indexx
        const shiftIndex = shifts.findIndex((shift) => shift.id === shiftId);

        // drop the shift
        shifts.splice(shiftIndex, 1);

        // set the new shifts
        this.setState({ shifts });

        // move the current shfit to the one previous to the one just deleted (or the first shift, if the deleted one was first)
        return this.setCurrentlyEditingShift(shifts[(shiftIndex > 0) ? shiftIndex - 1 : 0].id);
    }

    createShift() {
        let shifts = [...this.state.shifts];

        // extract the highest ID currently existing so we have something to mock
        const highestId = shifts.reduce((currentHighestId, shift) => {
            return Math.max(currentHighestId, shift.id);
        }, -1);

        shifts.push({
            id: highestId + 1,
            title: '',
            isAllDay: false,
            selectedDates: {
                start: moment(new Date()),
                end: moment(new Date())
            },
            employees: {
                invited: 'all',
                confirmed: []
            }
        });

        return this.setState({ shifts, currentlyEditingShiftId: highestId + 1 });
    }

    updateShift( updatedShift ) {
        const shifts = [...this.state.shifts];
        const shiftIndex = shifts.findIndex((shift) => shift.id === updatedShift.id);

        shifts[shiftIndex] = updatedShift;

        this.setState({ shifts });
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        const currentlyEditingShift = this.state.shifts.find((shift) => shift.id === this.state.currentlyEditingShiftId);

        console.log(typeof currentlyEditingShift.selectedDates.start);

        return (
            <div className={wrapperClasses}>
                <div className="flex">
                    <CSSTransitionGroup transitionName="animation__shift-tab" transitionEnterTimeout={100} transitionLeaveTimeout={1} component="ol" className="list ma0 pl0 w-30">
                        {
                            this.state.shifts.map((shift, index) => {
                                const buttonClasses = classNames({
                                    'db b br0 input-reset f5 tl pointer pa3 bg-light-gray underline-hover bt bl b--black-20 truncate w-100': true,
                                    'bb': this.state.shifts.length === index + 1,
                                    'bg-white': shift.id === this.state.currentlyEditingShiftId
                                });

                                return (
                                    <li className="ma0 pl0 relative z-1" key={shift.id} onClick={() => this.setCurrentlyEditingShift(shift.id)}>
                                        <button className={buttonClasses}>{(shift.title.length > 0) ? shift.title : 'Untitled'}</button>
                                    </li>
                                )
                            })
                        }
                        <li className="ma0 shift-tab--new-shift">
                            <button className="input-reset pa3 bg-transparent f5 w-100 tl underline hover-no-underline" onClick={() => this.createShift()}>Add Shift</button>
                        </li>
                    </CSSTransitionGroup>
                    <Box className="w-70 relative z-1" contentWrapperClassName="ph3 pb3">
                        <SectionSwitcher
                            className="pt0"
                            secondaryMenuClassName="mb3"
                            ref={(sectionSwitcherInstance) => this.sectionSwitcherInstance = sectionSwitcherInstance}
                            sections={[
                                {
                                    key: 'basic',
                                    name: 'Basic Info',
                                    content: <OpportunityModalBasicInfo
                                        opportunity={currentlyEditingShift}
                                        updateOpportunity={this.updateShift}
                                    />
                                },
                                {
                                    key: 'employees',
                                    name: 'Employees',
                                    content: <OpportunityModalTalent
                                        opportunity={currentlyEditingShift}
                                        updateOpportunity={this.updateShift}
                                    />
                                }
                            ]}
                        />

                        <div className="mt3">
                            <BasicButton className="button--negative" onClick={() => this.deleteShift(currentlyEditingShift.id)}>
                                Delete Shift
                            </BasicButton>
                        </div>
                    </Box>
                </div>
            </div>
        )
    }
}

ShiftManager.defaultProps = {
    className: ''
};

export default ShiftManager;
