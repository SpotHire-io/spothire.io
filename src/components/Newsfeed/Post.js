import 'moment/locale/en-ca';
import React from 'react';
import moment from 'moment';
import { Arrow } from 'rebass';
import classNames from 'classnames';
import BasicTag from '../Tags/BasicTag';
import BasicButton from '../Buttons/BasicButton';

/**
 * A blog post linked to an opportunity, allowing user responses.
 */
const Post = ({ post, className, isOpen, toggleOpenState, isInline, showOpportunityName }) => {
    let wrapperClasses = classNames({
        'sh-shadow-2': ! isInline && isOpen,
        'sh-shadow-1': ! isInline && ! isOpen,
        'o-70 glow pointer': ! isOpen,
        ' animate-shadow': true,
        [className]: true
    });

    const renderHeader = function () {
        const headerClasses = classNames({
            'bg-white ba b--black-20 bb-0 pa3': true,
            'flex items-center justify-between': true,
            'pointer bg-animate hover-bg-transparent': isOpen
        });

        return (
            <div className={headerClasses} onClick={() => (isOpen) ? toggleOpenState() : null}>
                <h2 className={classNames('mv0 lh-title', { 'f5': isInline, 'f4': ! isInline })}>
                    {post.title} {(isInline) ? <span className="f6 ml1 normal">({moment(post.date).format("MMMM Do, h:mm a")})</span> : null}
                </h2>

                <div>
                    {renderStatusTag()}

                    <Arrow
                        className="ml2"
                        color={(isOpen) ? "rgb(119, 119, 119)" : "rgb(111, 111, 111)"}
                        direction={(isOpen) ? "down" : "up"}
                    />
                </div>
            </div>
        );
    };

    const renderStatusTag = function () {
        let tagType = 'positive';
        let tagText = 'You’ve responded';

        if (! post.responseRequired) {
            tagType = 'neutral';
            tagText = 'Response not required';
        }

        if (! post.isRespondedTo) {
            tagType = 'negative';
            tagText = 'You need to respond';
        }

        return <BasicTag isNarrow={isInline} type={tagType}>{tagText}</BasicTag>;
    };

    const renderInteractionInterface = function () {
        return (
            <div className="bg-white ba bt-0 b--black-20 flex">
                <div className="pa3 br b--black-20 w-50 flex items-center justify-center">
                    <p className="ma0">Response {post.responseRequired ? 'required' : 'not required'}</p>
                </div>
                <div className="pa3 w-50">
                    <textarea className="w-100 b--black-10" rows={3}/>

                    <div className="tr mt2">
                        <BasicButton type="neutral">Reset</BasicButton>
                        <BasicButton type="positive" className="ml2">Submit</BasicButton>
                    </div>
                </div>
            </div>
        );
    };

    const renderExcerpt = function () {
        let excerptContent;

        if (typeof post.excerpt !== 'undefined') {
            excerptContent = post.excerpt;
        } else {
            excerptContent = post.content;
        }

        return excerptContent;
    };

    return (
        <article className={wrapperClasses} onClick={() => (isOpen) ? null : toggleOpenState()}>
            {renderHeader()}
            <div className={classNames('bg-white ba b--black-20 ph3', { 'pv3': isInline, 'pv4': ! isInline })}>
                <div
                    className={classNames('app-serif measure', { 'f5': isInline, 'f4': ! isInline })}
                    dangerouslySetInnerHTML={{ __html: (isOpen) ? String(post.content) : String(renderExcerpt()) }}
                />
            </div>
            {(isOpen) ? renderInteractionInterface() : null}
            {(! isInline) ? (
                <div className="bg-white-10 ba bt-0 b--black-10 ph3 pv2 f6">
                    {/* @TODO: Pull actual opportunity name from opportunity identified in `Post.opportunityId` */}
                    {moment(post.date).format("MMMM Do, h:mm a")}{(showOpportunityName) ? <span> in <em>Opportunity Name</em></span> : null}
                </div>
            ) : null}
        </article>
    );
};

Post.defaultProps = {
    className: '',
    isOpen: true,
    isInline: false,
    showOpportunityName: false,
};

export default Post;
