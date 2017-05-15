import React from 'react';

import classNames from 'classnames';
import moment from 'moment';

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

        this.state = {
            currentlyEditingShiftId: 0,
            shifts: [
                {
                    id: 0,
                    title: 'First shift',
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 8, 0)),
                        end: moment(new Date(2017, 4, 1, 16, 0))
                    }
                },
                {
                    id: 1,
                    title: 'Second shift',
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    }
                },
                {
                    id: 2,
                    title: 'Third shift',
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 8, 0)),
                        end: moment(new Date(2017, 4, 1, 16, 0))
                    }
                },
                {
                    id: 3,
                    title: 'Fourth shift',
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    }
                },
                {
                    id: 4,
                    title: 'Super extra long shift name that goes on forever',
                    selectedDates: {
                        start: moment(new Date(2017, 4, 1, 16, 0,)),
                        end: moment(new Date(2017, 4, 2, 0, 0))
                    }
                }
            ]
        };
    }

    setCurrentlyEditingShift(currentlyEditingShiftId) {
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
            title: 'New',
            selectedDates: {
                start: moment(new Date()),
                end: moment(new Date())
            }
        });

        return this.setState({ shifts, currentlyEditingShiftId: highestId + 1 });
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        const currentlyEditingShift = this.state.shifts.find((shift) => shift.id === this.state.currentlyEditingShiftId);

        return (
            <div className={wrapperClasses}>
                <div className="flex">
                    <ol className="list ma0 pl0">
                        {
                            this.state.shifts.map((shift, index) => {
                                const buttonClasses = classNames({
                                    'db b br0 input-reset f5 tl pointer pa3 bg-light-gray underline-hover bt bl b--black-20 truncate w4': true,
                                    'bb': this.state.shifts.length === index + 1,
                                    'bg-white': shift.id === this.state.currentlyEditingShiftId
                                });

                                return (
                                    <li className="ma0" key={shift.id} onClick={() => this.setCurrentlyEditingShift(shift.id)}>
                                        <button className={buttonClasses}>{shift.title}</button>
                                    </li>
                                )
                            })
                        }
                        <li className="ma0">
                            <button className="input-reset pa3 bg-transparent f5 w-100 tl underline hover-no-underline" onClick={() => this.createShift()}>Add Shift</button>
                        </li>
                    </ol>
                    <Box className="flex-auto" contentWrapperClassName="ph3 pb3">
                        <SectionSwitcher
                            className="pt0"
                            secondaryMenuClassName="mb3"
                            sections={[
                                {
                                    key: 'basic',
                                    name: 'Basic Info',
                                    content: <OpportunityModalBasicInfo
                                        opportunity={currentlyEditingShift}
                                        updateOpportunity={(info) => console.log(info)}
                                    />
                                },
                                {
                                    key: 'talent',
                                    name: 'Talent',
                                    content: <OpportunityModalTalent
                                        opportunity={currentlyEditingShift}
                                        updateOpportunity={(info) => console.log(info)}
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