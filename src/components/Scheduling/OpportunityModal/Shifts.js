const React      = require('react');
import classNames from 'classnames';

import SelectableUserTable from '../../Miscellaneous/SelectableUserTable';

class OpportunityModalShifts extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mt3">
                <SelectableUserTable className="h5 overflow-auto"/>
            </div>
        )
    }
}

OpportunityModalShifts.propTypes = {
    updateOpportunity: React.PropTypes.func.isRequired,
    opportunity: React.PropTypes.object.isRequired
};

export default OpportunityModalShifts;