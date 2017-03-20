const React      = require('react');
const classNames = require('classnames');
const moment     = require('moment');

const Arrow = require('react-svg-arrow');

const BasicButton = require('../Buttons/BasicButton');

const Post = ({ post, className, isOpen, toggleOpenState }) => {
    let wrapperClasses = classNames({
        'sh-shadow-2': isOpen,
        'o-70 glow pointer sh-shadow-1': ! isOpen,
        'app-sans animate-shadow': true,
        [className]: true
    });

    const renderHeader = function () {
        const headerClasses = classNames({
            'bg-white ba b--black-20 bb-0 pa3': true,
            'flex items-center justify-between': true,
            'pointer bg-animate hover-bg-transparent': isOpen
        });

        return (
            <div className={headerClasses} onClick={(isOpen) ? toggleOpenState : null}>
                <h2 className="mv0 lh-title">{post.title}</h2>

                <Arrow
                    color={(isOpen) ? "rgb(119, 119, 119)" : "rgb(111, 111, 111)"}
                    size={6}
                    direction={(isOpen) ? "bottom" : "top"}
                />
            </div>
        );
    };

    const renderInteractionInterface = function () {
        return (
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
        );
    };

    const renderExcerpt = function () {
        let excerptContent;

        if (typeof post.excerpt != 'undefined') {
            excerptContent = post.excerpt;
        } else {
            excerptContent = React.Children.toArray(post.content.props.children)[0];
        }

        return excerptContent;
    };

    return (
        <div className={wrapperClasses} onClick={(isOpen) ? null : toggleOpenState}>
            {renderHeader()}
            <div className="bg-white ba b--black-20 ph3 pv4">
                <div className="georgia f4 measure">
                    {(isOpen) ? post.content : renderExcerpt()}
                </div>
            </div>
            {(isOpen) ? renderInteractionInterface() : null}
            <div className="bg-white-10 ba bt-0 b--black-10 ph3 pv2 f6">
                {moment(post.date).format("MMMM Do, h:mm a")}
            </div>
        </div>
    );
};

Post.defaultProps = {
    className: '',
    isOpen: true
};

module.exports = Post;
