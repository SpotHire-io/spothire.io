import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Global/Box';
import PersonSchema from '../../../schemas/Person';
import SecondaryMenu from '../../../components/Global/SecondaryMenu';
import MetadataInterface from '../../../components/Employees/MetadataInterface';
import AvailabilityViewer from '../../../components/Profile/AvailabilityViewer';
import TimeOffRequestReviewer from '../../../components/Profile/TimeOffRequests/Reviewer';

// storybook stuff
import { linkTo } from '@kadira/storybook';

// demo data
import timeOffRequests from '../../../data/timeOffRequests.json';

/**
 * Manager version of a single employee’s details. Allows them to set private
 * notes and metadata, visible only by managers and admin.
 */
class EmployeeSingleView extends React.Component {
    render() {
        return (
            <div>
                <SecondaryMenu
                    className="ph4 bg-white"
                    items={[
                        {
                            key: 'employees',
                            text: 'Employees',
                            href: '#employees',
                            isActive: true
                        },
                        {
                            key: 'groups',
                            text: 'Groups',
                            href: '#groups',
                            isActive: false
                        }
                    ]}
                    onClick={linkTo('Views (manager)', 'People')}
                />
                <div className="pv4 bg-near-white">
                    <div className="flex mh4">
                        <div className="w-third mr3">
                            <Box title="Employee Details" headingType="inline">
                                <h1 className="mb4 f3">{this.props.employee.firstName} {this.props.employee.lastName}</h1>
                                <img className="db w-100 ba bw1 b--silver border-box" src={this.props.employee.imageSrc} alt={`Profile of ${this.props.employee.firstName}`}/>

                                <div className="mt3">
                                    <h3 className="f6 normal ma0">Other photos</h3>

                                    <ul className="mt2 nb2 flex flex-wrap pa0 list nr2">
                                        {[...Array(6).keys()].map((number) => (
                                            <li className="dib mt0 mb2 pa0 w-25 pr2">
                                                <img className="db w-100 ba bw1 b--silver border-box" src={this.props.employee.imageSrc} alt={`Profile of ${this.props.employee.firstName}`}/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <dl className="mt3 mb0">
                                    {[
                                        {
                                            label: 'Email',
                                            content: <a className="link dark-blue underline-hover" href={`mailto:${this.props.employee.email}`}>{this.props.employee.email}</a>
                                        },
                                        {
                                            label: 'Phone',
                                            content: this.props.employee.phone
                                        },
                                        {
                                            label: 'Emergency Contact Information',
                                            content: this.props.employee.emergencyContactInformation
                                        }
                                    ].map((dataPair) => (
                                        <div className="mt3" key={dataPair.label}>
                                            <dt className="f6">{dataPair.label}</dt>
                                            <dd className="mh0 mb0 mt2">{dataPair.content}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </Box>
                        </div>
                        <div className="w-two-thirds">
                            <Box title="Employee Settings" headingType="inline">
                                <p className="mt3">
                                    <label className="f6 db" htmlFor="employee_notes">Notes</label>
                                    <textarea className="mt2 w-100" name="employee_notes" id="employee_notes" aria-describedby="employee_notes_desc" cols="30" rows="5"/>
                                    <small className="f6 black-60" id="employee_notes_desc">Only managers can read these notes.</small>
                                </p>
                            </Box>
                            <Box className="mt3" title="Employee Metadata" headingType="inline">
                                <MetadataInterface className="mt3" employee={this.props.employee}/>
                            </Box>
                            <div className="mt3 flex items-start">
                                <Box className="w-50 mr3" contentWrapperClassName="pa3 max-h5 overflow-auto" title="Weekly Availability" headingType="inline">
                                    <AvailabilityViewer employee={this.props.employee}/>
                                </Box>
                                <Box className="w-50" contentWrapperClassName="pa3 max-h5 overflow-auto" title="Requests for Time Off" headingType="inline">
                                    <TimeOffRequestReviewer className="pt1" timeOffRequests={timeOffRequests}/>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EmployeeSingleView.defaultProps = {
    className: '',
};

// EmployeeSingleView.propTypes = {
//     className: PropTypes.string,
//     employee: PersonSchema.isRequired
// };

export default EmployeeSingleView;
