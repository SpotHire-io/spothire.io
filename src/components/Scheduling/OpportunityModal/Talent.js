const React      = require('react');
import classNames from 'classnames';

import ButtonBar from '../../Buttons/ButtonBar';
import RadioButton from '../../Buttons/RadioButton';

class OpportunityModalTalent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mt3">
                <ButtonBar className="w-100">
                    <RadioButton name="opp_talent_invited" id="opp_talent_invited_all" value="all" checked={this.props.opportunity.talent.invited === 'all'}>All</RadioButton>
                    <RadioButton name="opp_talent_invited" id="opp_talent_invited_available" value="available" checked={this.props.opportunity.talent.invited === 'available'}>Available</RadioButton>
                    <RadioButton name="opp_talent_invited" id="opp_talent_invited_selected" value="selected" checked={this.props.opportunity.talent.invited === 'selected'}>Selected</RadioButton>
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