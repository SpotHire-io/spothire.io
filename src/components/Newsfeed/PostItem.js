const React      = require('react');
const classNames = require('classnames');
const moment     = require('moment');

const BasicButton = require('../Buttons/BasicButton');

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
            <div className="bg-white ba bt-0 b--black-20 flex">
                <div className="pa3 br b--black-20 w-50 flex items-center justify-center">
                    <p className="ma0">Response {post.isRequired ? 'required' : 'not required'}</p>
                </div>
                <div className="pa3 w-50">
                    <textarea className="w-100 b--black-10" rows="3"/>

                    <div className="tr mt2">
                        <BasicButton className="button--neutral">Reset</BasicButton>
                        <BasicButton className="button--positive ml2">Submit</BasicButton>
                    </div>
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
