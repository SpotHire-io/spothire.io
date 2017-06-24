import * as React from 'react';
import * as classNames from 'classnames';
import GroupCard from './Card';
import {Group} from '../../../schemas';

interface Props {
    className?: string
    groups: Group[]
    onSelectGroup?: Function
    cardProps?: any
}

const GroupCardList: React.StatelessComponent<Props> = ({ className, cardProps, groups, onSelectGroup }) => (
    <div className={classNames("flex flex-wrap justify-around nr3", className)}>
        {groups.map((group) => (
            <div className="mt3 pr3 w-50" key={group.id}>
                <div className="pointer bt bw2 b--transparent hover-b--teal animate-all" style={{ marginTop: '-4px' }} onClick={() => onSelectGroup(group.id)}>
                    <GroupCard
                        className="bg-animate hover-bg-white-70"
                        group={group}
                        {...cardProps}
                    />
                </div>
            </div>
        ))}
    </div>
);

GroupCardList.defaultProps = {
    className: '',
};
export default GroupCardList;
