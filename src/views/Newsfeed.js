import React from 'react';

import PropTypes from 'prop-types';

import MainMenu from '../components/Global/MainMenu';

import PostList from '../components/Newsfeed/PostList';

import FilterContainer from '../components/Filters/FilterContainer';
import Filter from '../components/Filters/Filter';

class NewsfeedView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="pa4 bg-near-white">
                    <div className="flex">
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
                        <PostList
                            className="w-two-thirds"
                            posts={this.props.posts}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

NewsfeedView.defaultProps = {

};

NewsfeedView.propTypes = {
    posts: PropTypes.array
};

export default NewsfeedView;
