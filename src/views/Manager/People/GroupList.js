import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../../../components/Filters/Filter';
import GroupSchema from '../../../schemas/Groups/Static';
import GroupCardList from '../../../components/Employees/Groups/CardList';
import FilterContainer from '../../../components/Filters/FilterContainer';

// storybook stuff
import { linkTo } from '@kadira/storybook';

class GroupListView extends React.Component {
    render() {
        return (
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
