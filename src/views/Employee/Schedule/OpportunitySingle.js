import React from 'react';

import PropTypes from 'prop-types';
import OpportunitySchema from '../../../schemas/Opportunity';

import classNames from 'classnames';

import Box from '../../../components/Global/Box';

import BasicButton from '../../../components/Buttons/BasicButton';

class EmployeeOpportunitySingleView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className={classNames('pa4 bg-near-white', this.props.className)}>
                <Box className="w-third mr3">
                    <h2 className="f6 mt0 lh-title ttu">Opportunity Details</h2>

                    <h1 className="mb0 f3">{this.props.opportunity.title}</h1>

                    <dl className="mt3 flex flex-wrap nr3">
                        {[
                            {
                                id: 'startDate',
                                label: 'From',
                                content: this.props.opportunity.selectedDates.start,
                                isFullWidth: false,
                            },
                            {
                                id: 'endDate',
                                label: 'To',
                                content: this.props.opportunity.selectedDates.end,
                                isFullWidth: false,
                            }
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
