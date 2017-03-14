const React      = require('react');
const classNames = require('classnames');
const moment     = require('moment');

const PostItem = ({ post, className }) => {
    let wrapperClasses = classNames({
        'pt-sans': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>
            <div className="bg-white ba b--black-20 pa3">
                <h2 className="mv0 lh-title">{post.title}</h2>

                <div className="mt3 georgia">
                    {post.content}
                </div>
            </div>
            <div className="bg-white-10 ba bt-0 b--black-10 ph3 pv2 f6">
                {moment(post.date).format("MMMM Do, h:mm a")}
            </div>
        </div>
    );
};

PostItem.defaultProps = {
    className: ''
};

module.exports = PostItem;
