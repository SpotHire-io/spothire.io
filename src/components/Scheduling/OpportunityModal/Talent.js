const React      = require('react');
import classNames from 'classnames';

class OpportunityModalTalent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mt3">
                <p>Hello</p>
            </div>
        )
    }
}

OpportunityModalTalent.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalTalent;