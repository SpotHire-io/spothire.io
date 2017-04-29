const React      = require('react');
import classNames from 'classnames';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

class OpportunityModalTalent extends React.Component {
    constructor() {
        super();

        this.updateInviteType = this.updateInviteType.bind(this);
    }

    updateInviteType(inviteType) {
        const opportunity = { ...this.props.opportunity };

        opportunity.talent.invited = inviteType;

        this.props.updateOpportunity(opportunity);
    }

    render() {
        return (
            <div className="mt3">
                <ButtonBar className="w-100">
                    {[
                        'All',
                        'Available',
                        'Selected'
                    ].map((inviteType) =>
                        <RadioButton
                            name="opp_talent_invited"
                            id={'opp_talent_invited_' + inviteType.toLowerCase()}
                            value={inviteType.toLowerCase()}
                            checked={this.props.opportunity.talent.invited === inviteType.toLowerCase()}
                            onClick={() => this.updateInviteType(inviteType.toLowerCase())}
                        >
                            {inviteType}
                        </RadioButton>
                    )}
                </ButtonBar>
            </div>
        )
    }
}

OpportunityModalTalent.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalTalent;