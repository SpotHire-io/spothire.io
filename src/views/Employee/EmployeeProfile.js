import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/Global/Box';
import PersonSchema from '../../schemas/Person';
import BasicButton from '../../components/Buttons/BasicButton';

class EmployeeProfileView extends React.Component {
    render() {
        return (
            <div className="pa4 bg-near-white">
                <div className="flex">
                    <Box className="w-third mr3 self-start" title="Your Profile" headingType="inline">
                        <h1 className="mb4 f3">{this.props.employee.firstName} {this.props.employee.lastName}</h1>
                        <img className="db w-100 ba bw1 b--silver border-box pointer" onClick={() => alert('upload main profile photo interface')} src={this.props.employee.imageSrc} alt={`Profile of ${this.props.employee.firstName}`}/>

                        <div className="mt3">
                            <h3 className="f6 normal ma0">Other photos <small>(<span onClick={() => alert('upload secondary profile photo interface')} className="pointer underline hover-no-underline">add more</span>)</small></h3>

                            <ul className="mt2 nb2 flex flex-wrap pa0 list nr2">
                                {[...Array(6).keys()].map((number) => (
                                    <li className="dib mt0 mb2 pa0 w-25 pr2">
                                        <img className="db w-100 ba bw1 b--silver border-box" src={this.props.employee.imageSrc} alt={`Profile of ${this.props.employee.firstName}`}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Box>
                    <div className="w-two-thirds">
                        <Box title="Essential Information" headingType="inline">
                            <div className="flex mt3">
                                <div className="w-50 mr4">
                                    <label className="f6 db mb2" htmlFor="employee_email">Email address</label>
                                    <input className="w-100" type="email" id="employee_email" name="employee_email" defaultValue={this.props.employee.email}/>
                                </div>

                                <div className="w-50 mt0">
                                    <label className="f6 db mb2" htmlFor="employee_phone">Phone number</label>
                                    <input className="w-100" type="tel" id="employee_phone" name="employee_phone" defaultValue={this.props.employee.phone}/>
                                </div>
                            </div>

                            <div className="mt3">
                                <label className="f6 db mb2" htmlFor="employee_emergencyContactInformation">Emergency contact information</label>
                                <input className="w-100" type="text" id="employee_emergencyContactInformation" name="employee_emergencyContactInformation" defaultValue={this.props.employee.emergencyContactInformation}/>
                                <small className="f6 black-60 db mt2" id="employee_emergencyContactInformation_desc">Who should a manager contact if something goes wrong? How can a manager contact them?</small>
                            </div>
                        </Box>

                        <Box className="mt3" title="Further Information" headingType="inline">
                            <p>Managers who know more about you can schedule you for more opportunities. Answering these questions helps managers find you good opportunities.</p>

                            <div className="mt3">
                                <label className="f6 db mb2" htmlFor="employee_location">Location</label>
                                <input className="w-100" type="text" id="employee_location" name="employee_location"/>
                            </div>

                            <div className="flex mt3">
                                <div className="w-50 mr4">
                                    <label className="f6 db mb2" htmlFor="employee_height">Height</label>
                                    <input className="w-100" type="number" id="employee_height" name="employee_height"/>
                                </div>

                                <div className="w-50 mt0">
                                    <label className="f6 db mb2" htmlFor="employee_hair">Hair colour</label>
                                    <input className="w-100" type="text" id="employee_hair" name="employee_hair"/>
                                </div>
                            </div>
                        </Box>

                        <Box className="mt3" title="Account Settings" headingType="inline">
                            <div className="flex mt3">
                                <div className="w-50 mr4">
                                    <label className="f6 db mb2" htmlFor="employee_password">New password</label>
                                    <input className="w-100" type="password" id="employee_password" name="employee_password"/>
                                </div>

                                <div className="w-50 mt0">
                                    <label className="f6 db mb2" htmlFor="employee_passwordConfirmation">Confirm password</label>
                                    <input className="w-100" type="password" id="employee_passwordConfirmation" name="employee_passwordConfirmation"/>
                                </div>
                            </div>
                        </Box>

                        <div className="mt3 tr">
                            <BasicButton type="positive" onClick={() => alert('Profile changes saved!')}>Save Profile</BasicButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EmployeeProfileView.defaultProps = {
    className: '',
};

// EmployeeProfileView.propTypes = {
//     className: PropTypes.string,
//     employee: PersonSchema.isRequired,
// };

export default EmployeeProfileView;
