import * as React from 'react';
import * as classNames from 'classnames';
import Post from './Post';

/**
 * A list of blog posts.
 *
 * Maintains the open/closed state of its posts
 */
export default class PostList extends React.Component {
    constructor (props) {
        super();
        props = {
            className: '',
            postProps: {}
        }

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
                    return (
                        <Post
                            key={post.id}
                            className={classNames({
                                'mb3': this.props.posts.length !== index + 1
                            })}
                            post={post}
                            isOpen={this.state.openPosts.indexOf(post.id) !== -1}
                            toggleOpenState={() => this.togglePost(post.id)}
                            {...this.props.postProps}
                        />
                    )
                })}
            </div>
        )
    }
}
