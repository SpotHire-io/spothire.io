const React      = require('react');
import classNames from 'classnames';

import { Radio } from 'rebass';

class OpportunityModalTalent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mt3">
                <div className="flex justify-between">
                    <Radio
                        label="all"
                        name="opp_talent_invited"
                        stacked
                    />
                    <Radio
                        label="available"
                        name="opp_talent_invited"
                        stacked
                    />
                    <Radio
                        label="selected"
                        name="opp_talent_invited"
                        stacked
                    />
                </div>
            </div>
        )
    }
}

OpportunityModalTalent.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalTalent;