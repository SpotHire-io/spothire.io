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

        this.state = {
            requests: props.timeOffRequests,
        };
    }

    approveRequest(requestId) {
        let requests = [...this.state.requests];

        requests[requests.findIndex((request) => request.id === requestId)].approvalState = 'approved';

        this.setState({ requests });
    }

    rejectRequest(requestId) {
        let requests = [...this.state.requests];

        requests[requests.findIndex((request) => request.id === requestId)].approvalState = 'rejected';

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
