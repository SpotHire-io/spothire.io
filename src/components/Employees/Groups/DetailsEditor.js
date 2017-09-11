import React from 'react';
import classNames from 'classnames';
import Box from '../../Global/Box';
import BasicButton from '../../Buttons/BasicButton';

/**
 * Form to edit basic details about a group, or to delete the group.
 */
export default class DetailsEditor extends React.Component {
    render() {
        return (
            <Box className={this.props.className} title="Group Details" headingType="inline">
                <form>
                    {/* @TODO: Use state to store updated values for these inputs */}
                    <p>
                        <label className="f6 db" htmlFor="group_name">Name</label>
                        <input className="mt2 w-100" type="text" id="group_name" name="group_name" value={this.props.group.name}/>
                    </p>

                    <p className="mt3">
                        <label className="f6 db" htmlFor="group_description">Description</label>
                        <textarea className="mt2 w-100" name="group_description" id="group_description" cols={30} rows={5}/>
                    </p>

                    <div className="tr mt3">
                        {/* @TODO: Connect these buttons to initiate API requests */}
                        <BasicButton type="negative" onClick={() => console.log('Delete Group')}>Delete Group</BasicButton>
                        <BasicButton className="ml3" type="positive" onClick={() => console.log('Save group details')}>Save</BasicButton>
                    </div>
                </form>
            </Box>
        );
    }
}
