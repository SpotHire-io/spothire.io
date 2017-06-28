import * as moment from 'moment'
import * as React from 'react'
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates'

interface Props extends SingleDatePickerShape {

}

interface State {
    isFocused: boolean
}

export default class SingleDatePickerFocusContainer extends React.Component<Props, State> {
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
