import React from 'react'
import { SingleDatePicker } from 'react-dates'

/**
 * Wrapper for react-dates/SingleDatePicker to handle its focused state.
 *
 * Takes all the props of the actual component.
 */
export default class SingleDatePickerFocusContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            isFocused: false
        }
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
