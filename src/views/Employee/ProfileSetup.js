import React from 'react'
import Box from '../../components/Global/Box'
import BasicButton from '../../components/Buttons/BasicButton'

/**
 * View for when a user has been sent an invite to join SpotHire for the given organisation,
 * allowing them to set their initial profile details.
 */
export default class ProfileSetup extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <div className="bg-near-white pa4 min-vh-100 flex flex-column justify-center items-center">
                <form>
                    <Box className="mw6">
                        <img src="/img/logo-colour.svg" alt="SpotHire logo" className="db w-90 w-50-ns center mv4"/>

                        <p>
                            Welcome to SpotHire! You’ve been invited to join [Organisation’s] SpotHire organisation. Using SpotHire, [Organisation] will
                            connect you with work opportunities that fit your schedule and capabilities.
                        </p>
                    </Box>

                    <Box className="mt3 mw6" title="Account setup" headingType="inline">
                        <div className="flex-ns mt3">
                            <div className="w-50-ns mr4-ns">
                                <label className="f6 db mb2" htmlFor="employee_first_name">First name</label>
                                <input className="w-100" type="text" id="employee_first_name" name="employee_first_name" defaultValue={this.props.employee.firstName}/>
                            </div>

                            <div className="mt3 w-50-ns mt0-ns">
                                <label className="f6 db mb2" htmlFor="employee_last_name">Last name</label>
                                <input className="w-100" type="text" id="employee_last_name" name="employee_last_name" defaultValue={this.props.employee.lastName}/>
                            </div>
                        </div>

                        <div className="flex-ns mt3">
                            <div className="w-50-ns mr4-ns">
                                <label className="f6 db mb2" htmlFor="employee_email">Email address</label>
                                <input className="w-100" type="email" id="employee_email" name="employee_email" defaultValue={this.props.employee.email}/>
                            </div>

                            <div className="mt3 w-50-ns mt0-ns">
                                <label className="f6 db mb2" htmlFor="employee_phone">Phone number</label>
                                <input className="w-100" type="tel" id="employee_phone" name="employee_phone" defaultValue={this.props.employee.phone}/>
                            </div>
                        </div>

                        <BasicButton className="mt3 w-100" type="positive">Create Account</BasicButton>
                    </Box>
                </form>
            </div>
        )
    }
}
