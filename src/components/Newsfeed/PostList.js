import React from 'react';

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
            // If course isn't in the list (i.e. it isn't interesting), let's add it to the list
            openPosts.push(postId);
        } else {
            // If the course is in the list, let's remove it
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
                            className={postClasses}
                            post={post}
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
    className: ''
};

export default PostList;
