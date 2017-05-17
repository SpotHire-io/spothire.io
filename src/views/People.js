import React from 'react';

import PropTypes from 'prop-types';
import PersonSchema from '../schemas/Person';

import MainMenu from '../components/Global/MainMenu';

import SectionSwitcher from '../components/Miscellaneous/SectionSwitcher';

import TalentListView from './People/TalentList';
import GroupListView from './People/GroupList';

class PeopleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <SectionSwitcher
                    className="pb4 bg-near-white"
                    secondaryMenuClassName="ph4 bg-white"
                    sections={[
                        {
                            key: 'talent',
                            name: 'Talent',
                            content: (
                                <TalentListView/>
                            )
                        },
                        {
                            key: 'groups',
                            name: 'Groups',
                            content: (
                                <GroupListView
                                    groups={[...Array(10).keys()].map((number) => {
                                        return {
                                            id: number,
                                            name: `Sample Group ${number + 1}`,
                                            talent: this.props.users
                                        };
                                    })}
                                />
                            )
                        }
                    ]}
                />
            </div>
        );
    }
}

PeopleView.defaultProps = {

};

PeopleView.propTypes = {
    users: PropTypes.arrayOf(PersonSchema).isRequired
};

export default PeopleView;
