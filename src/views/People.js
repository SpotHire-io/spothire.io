import React from 'react';

import PropTypes from 'prop-types';

import MainMenu from '../components/Global/MainMenu';

import SectionSwitcher from '../components/Miscellaneous/SectionSwitcher';

import UserTable from '../components/Talent/UserTable';
import GroupCardList from '../components/Talent/Groups/CardList';

import FilterContainer from '../components/Filters/FilterContainer';
import Filter from '../components/Filters/Filter';

import users from '../data/users.json';

class PeopleView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MainMenu selectedItem="People"/>
                <SectionSwitcher
                    className="pb4 bg-near-white"
                    secondaryMenuClassName="ph4 bg-white"
                    sections={[
                        {
                            key: 'people',
                            name: 'People',
                            content: (
                                <div className="flex ma4">
                                    <FilterContainer className="mr3 w-third self-start">
                                        <Filter
                                            id="text1"
                                            label="Other text filter"
                                            type="text"
                                            data={{
                                                placeholder: 'A text filter'
                                            }}
                                        />
                                        <Filter
                                            id="text2"
                                            label="Text filter"
                                            type="text"
                                            data={{
                                                placeholder: 'Another text filter'
                                            }}
                                        />
                                        <Filter
                                            id="select1"
                                            label="Single select"
                                            type="select"
                                            data={{
                                                inputProps: {
                                                    id: 'select1'
                                                },
                                                options: [
                                                    {
                                                        value: '1',
                                                        label: 'Option 1'
                                                    },
                                                    {
                                                        value: '2',
                                                        label: 'Option 2'
                                                    }
                                                ]
                                            }}
                                        />
                                        <Filter
                                            id="select2"
                                            label="Multi select"
                                            type="select"
                                            data={{
                                                inputProps: {
                                                    id: 'select2'
                                                },
                                                options: [
                                                    {
                                                        value: '1',
                                                        label: 'Option 1'
                                                    },
                                                    {
                                                        value: '2',
                                                        label: 'Option 2'
                                                    }
                                                ],
                                                selectConfig: {
                                                    multi: true
                                                }
                                            }}
                                        />
                                    </FilterContainer>
                                    <UserTable className="w-two-thirds"/>
                                </div>
                            )
                        },
                        {
                            key: 'groups',
                            name: 'Groups',
                            content: (
                                <div className="flex ma4">
                                    <FilterContainer className="mr3 w-third self-start">
                                        <Filter
                                            id="text1"
                                            label="Other text filter"
                                            type="text"
                                            data={{
                                                placeholder: 'A text filter'
                                            }}
                                        />
                                        <Filter
                                            id="text2"
                                            label="Text filter"
                                            type="text"
                                            data={{
                                                placeholder: 'Another text filter'
                                            }}
                                        />
                                        <Filter
                                            id="select1"
                                            label="Single select"
                                            type="select"
                                            data={{
                                                inputProps: {
                                                    id: 'select1'
                                                },
                                                options: [
                                                    {
                                                        value: '1',
                                                        label: 'Option 1'
                                                    },
                                                    {
                                                        value: '2',
                                                        label: 'Option 2'
                                                    }
                                                ]
                                            }}
                                        />
                                        <Filter
                                            id="select2"
                                            label="Multi select"
                                            type="select"
                                            data={{
                                                inputProps: {
                                                    id: 'select2'
                                                },
                                                options: [
                                                    {
                                                        value: '1',
                                                        label: 'Option 1'
                                                    },
                                                    {
                                                        value: '2',
                                                        label: 'Option 2'
                                                    }
                                                ],
                                                selectConfig: {
                                                    multi: true
                                                }
                                            }}
                                        />
                                    </FilterContainer>
                                    <GroupCardList
                                        className="nt3 w-two-thirds"
                                        groups={[...Array(10).keys()].map((number) => {
                                            return {
                                                id: number,
                                                name: `Sample Group ${number + 1}`,
                                                talent: users
                                            };
                                        })}
                                        onSelectGroup={(groupId) => console.log(`Group ID ${groupId} selected`)}
                                    />
                                </div>
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

};

export default PeopleView;
