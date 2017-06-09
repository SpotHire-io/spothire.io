import React from 'react';

import PropTypes from 'prop-types';
import PostSchema from '../../schemas/Post';

import classNames from 'classnames';

import Post from './Post';

class PostList extends React.Component {
    constructor() {
        super();

        this.togglePost = this.togglePost.bind(this);

        this.state = {
            openPosts: []
        };
    }

    togglePost(postId) {
        // Grab a copy of the openPosts state
        let openPosts = [...this.state.openPosts];
        const postIndex = openPosts.indexOf(postId);

        if (postIndex === -1) {
            // If post isn't in the list, add it
            openPosts.push(postId);
        } else {
            // If the post is in the list, let's remove it
            openPosts.splice(postIndex, 1);
        }

        this.setState({ openPosts });
    }

    render() {
        const wrapperClasses = classNames({
            '': true,
            [this.props.className]: true
        });

        return (
            <div className={wrapperClasses}>
                {this.props.posts.map((post, index) => {
                    const postClasses = classNames({
                        'mb3': this.props.posts.length !== index + 1
                    });

                    const boundTogglePost = this.togglePost.bind(null, post.id);

                    return (
                        <Post
                            key={post.id}
                            className={postClasses}
                            post={post}
                            isInline={this.props.isInline}
                            isOpen={this.state.openPosts.indexOf(post.id) !== -1}
                            toggleOpenState={boundTogglePost}
                        />
                    )
                })}
            </div>
        )
    }
}

PostList.defaultProps = {
    className: '',
    isInline: false,
};

PostList.propTypes = {
    className: PropTypes.string,
    posts: PropTypes.arrayOf(PostSchema),
    isInline: PropTypes.bool,
};

export default PostList;
