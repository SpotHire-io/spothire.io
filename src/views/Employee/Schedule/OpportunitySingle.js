import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../../schemas/Opportunity';

import classNames from 'classnames';

import moment from 'moment';

import Box from '../../../components/Global/Box';

import BasicButton from '../../../components/Buttons/BasicButton';

import PostList from '../../../components/Newsfeed/PostList';

import ShiftList from '../../../components/Miscellaneous/ShiftList';

import posts from '../../../data/posts.json';

class EmployeeOpportunitySingleView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const rsvpState = (Math.random() > 0.5) ? 'invited' : 'confirmed';

        return (
            <div className={classNames('pa4 bg-near-white flex', this.props.className)}>
                <div className="w-third mr3">
                    <Box>
                        <h2 className="f6 mt0 lh-title ttu">Opportunity Details</h2>

                        <h1 className="mb0 f3">{this.props.opportunity.title}</h1>

                        <dl className="ma0 flex flex-wrap nr3">
                            {[
                                {
                                    id: 'startDate',
                                    label: 'From',
                                    content: moment(this.props.opportunity.selectedDates.start).format((this.props.opportunity.isAllDay) ? 'MMMM Do, YYYY [(all day)]' : 'MMMM, Do, YYYY h:mm a'),
                                },
                                {
                                    id: 'endDate',
                                    label: 'To',
                                    content: moment(this.props.opportunity.selectedDates.end).format((this.props.opportunity.isAllDay) ? 'MMMM Do, YYYY [(all day)]' : 'MMMM, Do, YYYY h:mm a'),
                                },
                                {
                                    id: 'location',
                                    label: 'Location',
                                    content: '100 Street St., Toronto',
                                    isFullWidth: true,
                                },
                                {
                                    id: 'notes',
                                    label: 'Notes',
                                    content: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
                                    isFullWidth: true,
                                },
                            ].map((section) => (
                                <div
                                    className={classNames({
                                        'pr3 mt3': true,
                                        'w-50': section.isFullWidth !== true,
                                        'w-100': section.isFullWidth
                                    })}
                                    key={section.id}
                                >
                                    <dt className="f6 mb2">{section.label}</dt>
                                    <dd className="ma0">{section.content}</dd>
                                </div>
                            ))}
                        </dl>
                    </Box>
                    <Box className="mt3">
                        <h2 className="f6 mt0 lh-title ttu">RSVP</h2>

                        <p className="mt0">You are <strong>{rsvpState}</strong> {(rsvpState === 'confirmed' ? 'for' : 'to')} this opportunity.</p>

                        <BasicButton
                            className={classNames({
                                'mt3 w-100': true,
                                'button--negative': rsvpState === 'confirmed',
                                'button--positive': rsvpState === 'invited',
                            })}
                        >
                            {(rsvpState === 'confirmed') ? 'Cancel Confirmation' : 'Accept Invitation'}
                        </BasicButton>
                    </Box>
                </div>
                <div className="w-two-thirds">
                    <Box>
                        <h2 className="f6 mt0 lh-title ttu">Posts</h2>

                        <PostList
                            isInline={true}
                            posts={posts}
                        />
                    </Box>

                    <Box className="mt3">
                        <h2 className="f6 mt0 lh-title ttu">Shifts</h2>

                        <ShiftList/>
                    </Box>
                </div>
            </div>
        );
    }
}

EmployeeOpportunitySingleView.defaultProps = {
    className: '',
};

EmployeeOpportunitySingleView.propTypes = {
    className: PropTypes.string,
    opportunity: OpportunitySchema.isRequired
};

export default EmployeeOpportunitySingleView;
