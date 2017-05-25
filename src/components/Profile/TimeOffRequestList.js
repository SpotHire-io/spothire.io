import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../../schemas/Person';
import TimeOffRequestSchema from '../../schemas/TimeOffRequest';

import classNames from 'classnames';

import moment from 'moment';
import 'moment/locale/en-ca';

import BasicButton from '../../components/Buttons/BasicButton';

import BasicTag from '../../components/Tags/BasicTag';

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
                <ol className="list ma0 pa0 nt3">
                    {
                        this.state.requests.map((request, index) => {
                            let tagType = 'neutral';

                            if (request.approvalState === 'approved') {
                                tagType = 'positive';
                            } else if (request.approvalState === 'rejected') {
                                tagType = 'negative';
                            }

                            return (
                                <li key={request.id} className="ma0 pa0 mt3">
                                    <div className="flex justify-between items-baseline mb1">
                                        <p className="mt0">
                                            {moment(request.dates.start).format('MMMM Do, YYYY')} {(! request.isAllDay) ? <small className="mh1">({moment(request.dates.start).format('h:mm a')})</small> : null} to<br/>
                                            {moment(request.dates.end).format('MMMM Do, YYYY')} {(! request.isAllDay) ? <small className="mh1">({moment(request.dates.end).format('h:mm a')})</small> : null}
                                        </p>
                                        <BasicTag className="ml2" type={tagType} isNarrow>{request.approvalState}</BasicTag>
                                    </div>
                                    <p className="mt0 f6">{request.reason}</p>
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
