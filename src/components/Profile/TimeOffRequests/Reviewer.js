import 'moment/locale/en-ca'
import React from 'react'
import classNames from 'classnames'
import TimeOffRequestList from './List'

/**
 * Time off request interface for reviewers (managers).
 *
 * @TODO: Get requests via a GraphQL query on the employee, who should be passed via props
 */
export default class Reviewer extends React.Component {
    constructor (props) {
        super()
        this.state = {
            requests: props.timeOffRequests, // @TODO: Instead of storing the requests in state, update them via the API and just use props
        }
    }

    approveRequest = (requestId) => {
        this.updateRequestField(requestId, 'approvalState', 'approved')
    }

    rejectRequest = (requestId) => {
        this.updateRequestField(requestId, 'approvalState', 'rejected')
    }

    updateRequestField = (requestId, field, value) => {
        let requests = [...this.state.requests]
        const index = requests.findIndex(request => request.id === requestId)

        requests[index][field] = value
        this.setState({ requests }) // @TODO: an API call instead
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

Reviewer.defaultProps = {
    className: ''
}