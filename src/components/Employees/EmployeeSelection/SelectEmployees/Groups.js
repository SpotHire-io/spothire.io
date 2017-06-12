import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GroupCardList from '../../Groups/CardList';

// dummy data
import users from '../../../../data/people.json';

const groups = [...Array(10).keys()].map((number) => {
    return {
        id: number,
        name: `Sample Group ${number + 1}`,
        employees: users
    };
});

class SelectGroups extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

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

                <GroupCardList
                    groups={groups}
                    className="nt3"
                    cardProps={{
                        displayAvatarPreview: false,
                    }}
                    onSelectGroup={() => alert('Selecting group')}
                />
            </div>
        );
    }
}

SelectGroups.defaultProps = {
    className: '',
};

SelectGroups.propTypes = {
    className: PropTypes.string,
};

export default SelectGroups;
