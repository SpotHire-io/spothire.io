const React      = require('react');
const classNames = require('classnames');

const PostItem = ({ post, className }) => {
    let wrapperClasses = classNames({
        '': true,
        [className]: true
    });

    return (
        <div className={wrapperClasses}>
            <h2>{post.title}</h2>
        </div>
    );
};

PostItem.defaultProps = {
    className: ''
};

module.exports = PostItem;
