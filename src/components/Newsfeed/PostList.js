const React      = require('react');
const classNames = require('classnames');

const Post = require('./Post');

class PostList extends React.Component {
    constructor() {
        super();

        this.state = {
            openPosts: []
        };
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

                    return (
                        <Post
                            className={postClasses}
                            post={post}
                            isOpen={this.state.openPosts.indexOf(post.id) !== -1}
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

module.exports = PostList;