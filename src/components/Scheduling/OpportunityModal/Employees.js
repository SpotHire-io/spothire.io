import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import OpportunitySchema from '../../../schemas/Opportunity';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

import SelectableUserTable from '../../Employees/SelectableUserTable';

class OpportunityModalEmployees extends React.Component {
    constructor() {
        super();

        this.updateInviteType = this.updateInviteType.bind(this);
        this.renderSelectionInterface = this.renderSelectionInterface.bind(this);
    }

    updateInviteType(inviteType) {
        const opportunity = { ...this.props.opportunity };

        opportunity.employees.invited = inviteType;

        this.props.updateOpportunity(opportunity);
    }

    renderSelectionInterface() {
        let selectionInterface;

        switch (this.props.opportunity.employees.invited) {
            case 'all':
                selectionInterface = (
                    <p>All employees will be invited.</p>
                );
                break;
            case 'available':
                selectionInterface = (
                    <p>Only employees available to work during the opportunity will be invited.</p>
                );
                break;
            case 'selected':
                selectionInterface = (
                    <div className="mt3">
                        <p>Employees selected from this list will be invited.</p>
                        <SelectableUserTable className="mt3 h5 overflow-auto" hasShadow={false}/>
                    </div>
                );
                break;
            default:
                break;
        }

        return selectionInterface;
    }

    render() {
        return (
            <div>
                <p className="f6">Invited employees</p>
                <ButtonBar className="w-100 mt2">
                    {[
                        'All',
                        'Available',
                        'Selected'
                    ].map((inviteType) =>
                        <RadioButton
                            key={inviteType.toLowerCase()}
                            name="opp_employees_invited"
                            id={'opp_employees_invited_' + inviteType.toLowerCase()}
                            value={inviteType.toLowerCase()}
                            checked={this.props.opportunity.employees.invited === inviteType.toLowerCase()}
                            onClick={() => this.updateInviteType(inviteType.toLowerCase())}
                        >
                            {inviteType}
                        </RadioButton>
                    )}
                </ButtonBar>
                {this.renderSelectionInterface()}
            </div>
        )
    }
}

OpportunityModalEmployees.propTypes = {
    updateOpportunity: PropTypes.func.isRequired,
    opportunity: OpportunitySchema
};

export default OpportunityModalEmployees;