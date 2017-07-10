import * as React from 'react'
import Box from '../../components/Global/Box'
import { Person } from '../../schemas'

interface Props {
    employee: Person
}

interface State {
}

export default class ProfileSetup extends React.Component<Props, State> {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <div className="bg-near-white pa4">
                <Box className="mw6 center">
                    <img src="/img/logo-colour.svg" alt="SpotHire logo" className="db w-50 center mv4"/>

                    <p>
                        Welcome to SpotHire! You’ve been invited to join [Organisation’s] SpotHire organisation. Using SpotHire, [Organisation] will
                        connect you with work opportunities that fit your schedule and capabilities.
                    </p>
                </Box>
            </div>
        )
    }
}
