import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Global/Box';
import BasicButton from '../../../components/Buttons/BasicButton';
import GroupSchema from '../../../schemas/Group';
import GroupCardList from '../../../components/Employees/Groups/CardList';

// storybook stuff
import { linkTo } from '@kadira/storybook';

/**
 * List of groups in the organisation, with management capabilities.
 */
class GroupListView extends React.Component {
    render() {
        return (
            <div className="flex ma4">
                <div className="w-third mr3">
                    <Box title="Groups" headingType="inline">
                        <p>Your organisation has {this.props.groups.length} groups.</p>

                        <div className="tr">{/* @TODO: onClick, send to a blank GroupSingleView page, allowing them to set new group details */}
                            <BasicButton type="positive" className="mt3" onClick={linkTo('Views (manager)', 'People:GroupSingleView')}>Add New</BasicButton>
                        </div>
                    </Box>
                </div>
                <GroupCardList
                    className="nt3 w-two-thirds"
                    groups={this.props.groups}
                    onSelectGroup={linkTo('Views (manager)', 'People:GroupSingleView')}
                />
            </div>
        );
    }
}

GroupListView.defaultProps = {
    className: '',
};

// GroupListView.propTypes = {
//     className: PropTypes.string,
//     groups: PropTypes.arrayOf(GroupSchema).isRequired,
// };

export default GroupListView;
