import 'moment/locale/en-ca';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimeOffRequestSchema from '../../../schemas/TimeOffRequest';
import TimeOffRequestList from './List';

class TimeOffRequestReviewer extends React.Component {
    constructor(props) {
        super();

        this.approveRequest = this.approveRequest.bind(this);
        this.rejectRequest = this.rejectRequest.bind(this);
        this.updateRequestField = this.updateRequestField.bind(this);

        this.state = {
            requests: props.timeOffRequests,
        };
    }

    approveRequest(requestId) {
        this.updateRequestField(requestId, 'approvalState', 'approved');
    }

    rejectRequest(requestId) {
        this.updateRequestField(requestId, 'approvalState', 'rejected');
    }

    updateRequestField(requestId, field, value) {
        let requests = [...this.state.requests];

        requests[requests.findIndex((request) => request.id === requestId)][field] = value;

        this.setState({ requests });
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <TimeOffRequestList timeOffRequests={this.state.requests} interfaceType="reviewer" approveRequest={this.approveRequest} rejectRequest={this.rejectRequest}/>
            </div>
        );
    }
}

TimeOffRequestReviewer.defaultProps = {
    className: '',
};

TimeOffRequestReviewer.propTypes = {
    className: PropTypes.string,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
};

export default TimeOffRequestReviewer;
