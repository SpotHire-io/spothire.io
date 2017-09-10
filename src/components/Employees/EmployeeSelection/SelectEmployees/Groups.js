import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {range} from 'lodash'
import CardList from '../../Groups/CardList'

// dummy data
const userData = require('../../../../data/people.json');

const type = 'virtual'
const groups = range(10).map((number) => {
    return {
        id: number,
        type,
        name: `Sample Group ${number + 1}`,
        employees: userData
    };
});

/**
 * Interface to select all the employees within groups.
 *
 * Once a group is selected, it’s passed to the parent with `props.onAddGroup`.
 */
export default class SelectGroups extends React.Component {
    defaultProps = {
        className: '',
        onAddGroup: (groupId) => alert(`Group #${groupId} added!`),
    };

    render() {
        return (
            <div className={classNames('', this.props.className)}>
                <p>Select groups to add all of their employees.</p>

                <p>
                    <label className="f6 db" htmlFor="group_search">Search groups</label>
                    <input className="mt2 w-100" type="text" id="group_search" aria-describedby="group_search_desc" name="group_search"/>
                    <small className="dib f6 black-60 lh-title mt2" id="group_search_desc">Narrow down the groups by searching their names and descriptions.</small>
                </p>

                <p className="f6 mt3 mb2">Groups</p>

                <CardList
                    groups={groups}
                    className="nt3"
                    cardProps={{
                        displayAvatarPreview: false,
                    }}
                    onSelectGroup={this.props.onAddGroup}
                />
            </div>
        );
    }
}
