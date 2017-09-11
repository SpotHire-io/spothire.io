import * as React from 'react'
import { TimeOffRequest } from '../../../schemas'

interface Props {
    className?: string
    timeOffRequests: TimeOffRequest[]
}

interface State {
    requests: TimeOffRequest[]
}
export default class Reviewer extends React.Component<Props, State> {}
