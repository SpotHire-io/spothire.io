import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../schemas/Group';

import classNames from 'classnames';

import SecondaryMenu from '../../components/Global/SecondaryMenu';

import BasicButton from '../../components/Buttons/BasicButton';

import UserTable from '../../components/Talent/UserTable';
import GroupDetailsEditor from '../../components/Talent/Groups/DetailsEditor';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class GroupSingleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const wrapperClasses = classNames({
            [this.props.className]: true
        });

        return (
            <div>
                <SecondaryMenu
                    className="ph4 bg-white"
                    items={[
                        {
                            key: 'talent',
                            text: 'Talent',
                            href: '#talent',
                            isActive: false
                        },
                        {
                            key: 'groups',
                            text: 'Groups',
                            href: '#groups',
                            isActive: true
                        }
                    ]}
                    onClick={linkTo('Views', 'People')}
                />
                <div className="pa4 bg-near-white">
                    <div className="flex items-start">
                        <GroupDetailsEditor group={this.props.group} className="w-one-third mr3"/>

                        <div className="w-two-thirds">
                            <UserTable/>

                            <div className="tr mt3">
                                <BasicButton className="button--positive">Add Talent to Group</BasicButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

GroupSingleView.defaultProps = {
    className: '',
};

GroupSingleView.propTypes = {
    className: PropTypes.string,
    group: GroupSchema.isRequired,
};

export default GroupSingleView;
