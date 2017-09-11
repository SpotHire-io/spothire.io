import 'moment/locale/en-ca';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimeOffRequestList from './List';
import TimeOffRequestNew from './New';

/**
 * Time off request interface for a requester (employee).
 *
 * Requires an employee (`props.employee`) and their time off requests (`props.timeOffRequests`).
 *
 * @TODO: Convert these props to a GraphQL call that ties in an employee’s time off requests to their
 *        profile, getting all the data in one go.
 */
class TimeOffRequestRequester extends React.Component {
    constructor(props) {
        super();

        this.addRequest = this.addRequest.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);

        this.state = {
            requests: props.timeOffRequests, // @TODO: replace this with calls to the API to set it on the employee itself
        };
    }

    addRequest(request) {
        let requests = [...this.state.requests];
        let newRequest = {...request};

        newRequest.id = this.props.timeOffRequests.reduce((currentHighestId, request) => { // @TODO: get the ID from the API when creating the request
            return Math.max(currentHighestId, request.id);
        }, -1) + 1;
        newRequest.employeeId = this.props.employee.id;
        newRequest.approvalState = 'pending';

        requests.push(newRequest); // @TODO: create via the API

        this.setState({ requests });
    }

    deleteRequest(requestId) {
        let requests = [...this.state.requests];

        requests.splice(requests.findIndex((request) => request.id === requestId), 1); // @TODO: delete via the API

        this.setState({ requests });
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <TimeOffRequestList timeOffRequests={this.state.requests} deleteRequest={this.deleteRequest} interfaceType="reviewer"/>
                <TimeOffRequestNew addRequest={this.addRequest}/>
            </div>
        );
    }
}

TimeOffRequestRequester.defaultProps = {
    className: '',
};

// TimeOffRequestRequester.propTypes = {
//     className: PropTypes.string,
// };

export default TimeOffRequestRequester;
