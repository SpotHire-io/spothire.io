import * as React from 'react';
import * as classNames from 'classnames';
import Box from '../../Global/Box';
import {Group} from '../../../schemas';
import BasicButton from '../../Buttons/BasicButton';

interface Props {
    className?: string
    group: Group
}

interface State {

}

/**
 * Form to edit basic details about a group, or to delete the group.
 */
export default class GroupDetailsEditor extends React.Component<Props, State> {
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
                    <textarea className="mt2 w-100" name="group_description" id="group_description" cols={30} rows={5}/>
                </p>

                <div className="tr mt3">
                    <BasicButton type="negative" onClick={() => console.log('Delete Group')}>Delete Group</BasicButton>
                </div>
            </Box>
        );
    }
}
