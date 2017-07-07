"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("moment/locale/en-ca");
var React = require("react");
var moment = require("moment");
var classNames = require("classnames");
var TimePicker = require('rc-time-picker');
var SingleDatePickerFocusContainer_1 = require("../../Miscellaneous/SingleDatePickerFocusContainer");
var rebass_1 = require("rebass");
var OpportunityModalBasicInfo = function (_a) {
    var updateOpportunity = _a.updateOpportunity, opportunity = _a.opportunity;
    var toggleAllDay = function () {
        var updatedOpportunity = __assign({}, opportunity);
        updatedOpportunity.isAllDay = !opportunity.isAllDay;
        updateOpportunity(updatedOpportunity);
    };
    var updateOpportunityField = function (field, value) {
        var updatedOpportunity = __assign({}, opportunity);
        updatedOpportunity[field] = value;
        updateOpportunity(updatedOpportunity);
    };
    var renderDateTimePicker = function (end) { return (React.createElement("div", { className: "flex", key: end },
        renderDatePicker(end),
        opportunity.isAllDay ? null : renderTimePicker(end))); };
    var renderDatePicker = function (end) { return (React.createElement("dl", { className: classNames('mb0 mt3', { 'mr4 w-50': !opportunity.isAllDay, 'w-100': opportunity.isAllDay }) },
        React.createElement("dt", { className: "f6 ml0 mb2" },
            end,
            " date"),
        React.createElement("dd", { className: "ml0" },
            React.createElement(SingleDatePickerFocusContainer_1.default, { date: moment(opportunity.dates[end.toLowerCase()]), onDateChange: function (newDate) {
                    var updatedOpportunity = __assign({}, opportunity);
                    var oldTime = moment(updatedOpportunity.dates[end.toLowerCase()]); // copy current time
                    updatedOpportunity.dates[end.toLowerCase()] = moment({
                        year: newDate.year(),
                        month: newDate.month(),
                        date: newDate.date(),
                        hour: oldTime.hour(),
                        minute: oldTime.minute(),
                        second: oldTime.second()
                    });
                    updateOpportunity(updatedOpportunity);
                }, withPortal: true, displayFormat: "MMMM Do, YYYY", id: "opp" + end + "Date" })))); };
    var renderTimePicker = function (end) { return (React.createElement("dl", { className: classNames('mb0 mt3 w-50') },
        React.createElement("dt", { className: "f6 ml0 mb2" },
            end,
            " time"),
        React.createElement("dd", { className: "ml0" },
            React.createElement(TimePicker, { value: moment(opportunity.dates[end.toLowerCase()]), showSecond: false, allowEmpty: false, use12Hours: true, onChange: function (newTime) {
                    var updatedOpportunity = __assign({}, opportunity);
                    updatedOpportunity.dates[end.toLowerCase()] = newTime;
                    updateOpportunity(updatedOpportunity);
                } })))); };
    return (React.createElement("div", null,
        React.createElement("p", null,
            React.createElement("label", { className: "f6 db", htmlFor: "opp_title" }, "Name"),
            React.createElement("input", { className: "mt2 w-100", type: "text", id: "opp_title", name: "opp_title", value: opportunity.title, onChange: function (e) { return updateOpportunityField('title', e.target.value); } })),
        React.createElement("p", { className: "mt3" },
            React.createElement("label", { className: "f6 db", htmlFor: "opp_location" }, "Location"),
            React.createElement("input", { className: "mt2 w-100", type: "text", id: "opp_location", name: "opp_location" })),
        [
            'Start',
            'End'
        ].map(renderDateTimePicker),
        React.createElement("div", { className: "mt3" },
            React.createElement(rebass_1.Switch, { "aria-labelledby": "opp_allDay", onClick: toggleAllDay, checked: opportunity.isAllDay, tabIndex: "0" }),
            React.createElement("span", { onClick: toggleAllDay, id: "opp_allDay", className: "pointer dib v-top mt2 ml2 f6" }, "All day")),
        React.createElement("p", { className: "mt3" },
            React.createElement("label", { className: "f6 db", htmlFor: "opp_notes" }, "Notes"),
            React.createElement("textarea", { className: "mt2 w-100", name: "opp_notes", id: "opp_notes" }))));
};
exports.default = OpportunityModalBasicInfo;
