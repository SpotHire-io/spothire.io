import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import Box from '../../Global/Box';

class GroupDetailsEditor extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <Box className={wrapperClasses}>
                <h2 className="f6 mt0 lh-title ttu">Group Details</h2>

                <p>
                    <label className="f6 db" htmlFor="opp_name">Name</label>
                    <input className="mt2 w-100" type="text" id="opp_name" name="opp_name" value={this.props.group.name}/>
                </p>

                <p className="mt3">
                    <label className="f6 db" htmlFor="opp_notes">Notes</label>
                    <textarea className="mt2 w-100" name="opp_notes" id="opp_notes" cols="30" rows="5"/>
                </p>
            </Box>
        );
    }
}

GroupDetailsEditor.defaultProps = {
    className: '',
};

GroupDetailsEditor.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupDetailsEditor;
