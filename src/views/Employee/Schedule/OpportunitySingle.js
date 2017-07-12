import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../../schemas/Opportunity';

import classNames from 'classnames';

import moment from 'moment';

import Box from '../../../components/Global/Box';

import BasicButton from '../../../components/Buttons/BasicButton';

import PostList from '../../../components/Newsfeed/PostList';

import ShiftList from '../../../components/Scheduling/ShiftList';

import posts from '../../../data/posts.json';

/**
 * View for an employee to see the details of a single opportunity and to participate in it.
 *
 * Allows them access to the opportunity details, opportunity posts, and shifts.
 */
class EmployeeOpportunitySingleView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const rsvpState = (Math.random() > 0.5) ? 'invited' : 'confirmed'; // @TODO: replace this and calls to `rsvpState` with the individual employee's RSVP state for the opportunity

        return (
            <div className={classNames('pa4 bg-near-white flex', this.props.className)}>
                <div className="w-third mr3">
                    <Box title="Opportunity Details" headingType="inline">
                        <h1 className="mb0 f3">{this.props.opportunity.title}</h1>

                        <dl className="ma0 flex flex-wrap nr3">
                            {[// @TODO: pull all of this information from the opportunity, not just some of it
                                {
                                    id: 'startDate',
                                    label: 'From',
                                    content: moment(this.props.opportunity.dates.start).format((this.props.opportunity.isAllDay) ? 'MMMM Do, YYYY [(all day)]' : 'MMMM, Do, YYYY h:mm a'),
                                },
                                {
                                    id: 'endDate',
                                    label: 'To',
                                    content: moment(this.props.opportunity.dates.end).format((this.props.opportunity.isAllDay) ? 'MMMM Do, YYYY [(all day)]' : 'MMMM, Do, YYYY h:mm a'),
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

                        <div className="tr">
                            <BasicButton type="neutral" className="mt3 f6">Export</BasicButton>
                        </div>
                    </Box>
                    <Box className="mt3" title="RSVP" headingType="inline">
                        <p className="mt0">You are <strong>{rsvpState}</strong> {(rsvpState === 'confirmed' ? 'for' : 'to')} this opportunity.</p>

                        <BasicButton
                            className="mt3 w-100"
                            type={(rsvpState === 'confirmed') ? 'negative' : 'positive'}
                        >
                            {(rsvpState === 'confirmed') ? 'Cancel Confirmation' : 'Accept Invitation'}
                        </BasicButton>
                    </Box>
                </div>
                <div className="w-two-thirds">
                    <Box title="Posts" headingType="inline">
                        <PostList
                            postProps={{
                                isInline: true
                            }}
                            posts={posts}
                        />
                    </Box>

                    <Box className="mt3" title="Shifts" headingType="inline">
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

// EmployeeOpportunitySingleView.propTypes = {
//     className: PropTypes.string,
//     opportunity: OpportunitySchema.isRequired
// };

export default EmployeeOpportunitySingleView;
