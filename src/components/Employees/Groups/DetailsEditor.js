import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../../Global/Box';
import GroupSchema from '../../../schemas/Group';
import BasicButton from '../../Buttons/BasicButton';

class GroupDetailsEditor extends React.Component {
    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <Box className={wrapperClasses} title="Group Details" headingType="inline">
                <p>
                    <label className="f6 db" htmlFor="group_name">Name</label>
                    <input className="mt2 w-100" type="text" id="group_name" name="group_name" value={this.props.group.name}/>
                </p>

                <p className="mt3">
                    <label className="f6 db" htmlFor="group_description">Description</label>
                    <textarea className="mt2 w-100" name="group_description" id="group_description" cols="30" rows="5"/>
                </p>

                <div className="tr mt3">
                    <BasicButton className="button--negative">Delete Group</BasicButton>
                </div>
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
