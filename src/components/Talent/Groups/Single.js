import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import Box from '../../Global/Box';

class GroupSingle extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <Box className={wrapperClasses}>
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

GroupSingle.defaultProps = {
    className: '',
};

GroupSingle.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupSingle;
