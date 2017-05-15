import React from 'react';

import PropTypes from 'prop-types';
import GroupSchema from '../../../schemas/Group';

import classNames from 'classnames';

import GroupCard from './Card';

const GroupCardList = ({ className, groups, onSelectGroup }) => (
    <div className={classNames("flex flex-wrap justify-around", className)}>
        {groups.map((group) => (
            <div className="mt3 ph2 w-50">
                <div className="pointer bt bw2 b--transparent hover-b--blue-yonder" onClick={() => onSelectGroup(group.id)}>
                    <GroupCard
                        className="bg-animate hover-bg-white-70"
                        group={group}
                    />
                </div>
            </div>
        ))}
    </div>
);

GroupCardList.defaultProps = {
    className: '',
};

GroupCardList.propTypes = {
    className: PropTypes.string,
    groups: PropTypes.arrayOf(GroupSchema).isRequired,
    onSelectGroup: PropTypes.func,
};

export default GroupCardList;
