import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Switch } from 'rebass';
import PostList from '../../components/Newsfeed/PostList';
import FilterContainer from '../../components/Filters/FilterContainer';

class NewsfeedView extends React.Component {
    constructor() {
        super();

        this.toggleShowOnlyPostsNotRespondedTo = this.toggleShowOnlyPostsNotRespondedTo.bind(this);

        this.defaultFilters = {
            showOnlyPostsNotRespondedTo: false,
        };

        this.state = {
            ...this.defaultFilters,
        };
    }

    toggleShowOnlyPostsNotRespondedTo() {
        this.setState({ showOnlyPostsNotRespondedTo: ! this.state.showOnlyPostsNotRespondedTo });
    }

    render() {
        let filteredPosts = this.props.posts;

        if (this.state.showOnlyPostsNotRespondedTo) {
            filteredPosts = filteredPosts.filter((post) => post.responseRequired === true && post.isRespondedTo === false)
        }

        return (
            <div>
                <div className="pa4 bg-near-white">
                    <div className="flex">
                        <FilterContainer className="mr3 w-third self-start" onResetFilters={() => this.setState({ ...this.defaultFilters })}>
                            <div>
                                <div className={classNames('sh-rebass-switch-small dib', {'sh-rebass-switch-small--checked': this.state.showOnlyPostsNotRespondedTo})}>
                                    <Switch aria-labelledby="feed_onlyNotRespondedTo" onClick={this.toggleShowOnlyPostsNotRespondedTo} checked={this.state.showOnlyPostsNotRespondedTo} tabIndex="0"/>
                                </div>
                                <span onClick={this.toggleShowOnlyPostsNotRespondedTo} id="feed_onlyNotRespondedTo" className="pointer dib v-top ml2 f6">Only posts that need your response</span>
                            </div>
                        </FilterContainer>
                        <PostList
                            className="w-two-thirds"
                            posts={filteredPosts}
                            postProps={{
                                showOpportunityName: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

NewsfeedView.defaultProps = {

};

// NewsfeedView.propTypes = {
//     posts: PropTypes.array
// };

export default NewsfeedView;
