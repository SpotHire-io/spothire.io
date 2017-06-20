import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Global/Box';
import BasicButton from '../../../components/Buttons/BasicButton';
import GroupSchema from '../../../schemas/Group';
import GroupCardList from '../../../components/Employees/Groups/CardList';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class GroupListView extends React.Component {
    render() {
        return (
            <div className="flex ma4">
                <div className="w-third mr3">
                    <Box title="Groups" headingType="inline">
                        <p>Your organisation has {this.props.groups.length} groups.</p>

                        <div className="tr">
                            <BasicButton className="mt3 button--positive">Add New</BasicButton>
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

GroupListView.propTypes = {
    className: PropTypes.string,
    groups: PropTypes.arrayOf(GroupSchema).isRequired,
};

export default GroupListView;
