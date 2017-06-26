import 'moment/locale/en-ca'
import * as React from 'react'
import * as classNames from 'classnames'
import {TimeOffRequest} from '../../../schemas'
import TimeOffRequestList from './List'

interface Props {
    className?: string
    timeOffRequests: TimeOffRequest[]
}

interface State {
    requests: TimeOffRequest[]
}

export default class TimeOffRequestReviewer extends React.Component<Props, State> {
    public static defaultProps = {
        className: ''
    }
    constructor(props: Props) {
        super()
        this.state = {
            requests: props.timeOffRequests,
        }
    }

    approveRequest = (requestId: number) => {
        this.updateRequestField(requestId, 'approvalState', 'approved')
    }

    rejectRequest = (requestId: number) => {
        this.updateRequestField(requestId, 'approvalState', 'rejected')
    }

    updateRequestField = (requestId: number, field: 'approvalState', value: 'pending' | 'rejected' | 'approved') => {
        let requests = [...this.state.requests]
        const index = requests.findIndex((request: TimeOffRequest) => request.id === requestId)

        requests[index][field] = value
        this.setState({ requests })
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <TimeOffRequestList
                    timeOffRequests={this.state.requests}
                    interfaceType='reviewer'
                    approveRequest={this.approveRequest}
                    rejectRequest={this.rejectRequest}
                />
            </div>
        )
    }
}
