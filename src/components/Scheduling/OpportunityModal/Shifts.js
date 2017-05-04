const React      = require('react');
import classNames from 'classnames';

import ShiftList from '../../Miscellaneous/ShiftList';

class OpportunityModalShifts extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mt3">
                <ShiftList/>
            </div>
        )
    }
}

OpportunityModalShifts.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalShifts;