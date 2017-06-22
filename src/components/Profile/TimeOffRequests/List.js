"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("moment/locale/en-ca");
const moment = require("moment");
const React = require("react");
const classNames = require("classnames");
const BasicTag_1 = require("../../../components/Tags/BasicTag");
const TimeOffRequestList = (props) => {
    if (props.timeOffRequests.length <= 0) {
        return React.createElement("p", { className: "i" }, "No requests found.");
    }
    const renderControls = (request) => {
        const renderLink = (action) => (React.createElement("a", { className: "child db f6 red hover-no-underline relative", onClick: (e) => e.preventDefault() || props[`${action}Request`](request.id), style: { top: '0.25rem' }, href: `#${action}` }, action));
        if (props.interfaceType === 'requester') {
            return renderLink('delete');
        }
        else if (props.interfaceType === 'reviewer') {
            return (React.createElement("div", null,
                (request.approvalState !== 'approved') ? renderLink('approve') : null,
                (request.approvalState !== 'rejected') ? renderLink('reject') : null));
        }
    };
    return (React.createElement("ol", { className: classNames('list ma0 pa0 nt3', props.className) }, props.timeOffRequests.map((request, index) => {
        let tagType = 'neutral';
        if (request.approvalState === 'approved') {
            tagType = 'positive';
        }
        else if (request.approvalState === 'rejected') {
            tagType = 'negative';
        }
        const renderDate = (end) => moment(request.dates[end]).format('MMMM Do, YYYY');
        const renderTime = (end) => (!request.isAllDay) ? React.createElement("small", { className: "mh1" },
            "(",
            moment(request.dates[end]).format('h:mm a'),
            ")") : null;
        const renderDateTime = (end) => React.createElement("span", null,
            renderDate(end),
            " ",
            renderTime(end));
        return (React.createElement("li", { key: request.id, className: "ma0 pa0 mt3 hide-child" },
            React.createElement("div", { className: "flex justify-between items-baseline mb1" },
                React.createElement("div", null,
                    React.createElement("p", { className: "mt0" },
                        renderDateTime('start'),
                        " to ",
                        renderDateTime('end')),
                    React.createElement("p", { className: "mt2 f6" }, request.reason)),
                React.createElement("div", { className: "tr" },
                    React.createElement(BasicTag_1.default, { className: "ml2", type: tagType, isNarrow: true }, request.approvalState),
                    renderControls(request)))));
    })));
};
TimeOffRequestList.defaultProps = {
    className: '',
    interfaceType: 'requester',
};
exports.default = TimeOffRequestList;
