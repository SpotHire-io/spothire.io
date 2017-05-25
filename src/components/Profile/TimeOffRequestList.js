import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';
import TimeOffRequestSchema from '../../schemas/TimeOffRequest';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import BasicButton from '../../components/Buttons/BasicButton';

import { Checkbox, Close } from 'rebass';

import TimePicker from 'rc-time-picker';

class TimeOffRequestList extends React.Component {
    constructor(props) {
        super();

        this.state = {
            requests: props.timeOffRequests,
        };
    }

    render() {
        return (
            <div className={classNames(this.props.className)}>
                <ol className="list ma0 pa0 nt2">
                    {
                        this.state.requests.map((request, index) => {
                            return (
                                <li key={request.id} className="ma0 ph0 pv2">
                                    <p className="mt0 mb2">{request.reason} <small>({request.approvalState})</small></p>
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

TimeOffRequestList.defaultProps = {
    className: '',
};

TimeOffRequestList.propTypes = {
    className: PropTypes.string,
    employee: PersonSchema.isRequired,
    timeOffRequests: PropTypes.arrayOf(TimeOffRequestSchema).isRequired,
};

export default TimeOffRequestList;
