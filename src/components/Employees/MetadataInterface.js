"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_geomicons_1 = require("../../../libraries/react-geomicons");
var React = require("react");
var classNames = require("classnames");
var BasicButton_1 = require("../../components/Buttons/BasicButton");
var Select = require("react-select");
var metaTypes = [
    {
        type: 'string',
        label: 'String',
        input: 'text',
    },
    {
        type: 'number',
        label: 'Number',
        input: 'number',
    },
    {
        type: 'boolean',
        label: 'Yes/No',
        input: 'checkbox',
    },
];
var MetadataInterface = (function (_super) {
    __extends(MetadataInterface, _super);
    function MetadataInterface(props) {
        var _this = _super.call(this) || this;
        _this.toggleEditingMetaPair = _this.toggleEditingMetaPair.bind(_this);
        _this.deleteMetaPair = _this.deleteMetaPair.bind(_this);
        _this.createMetaPair = _this.createMetaPair.bind(_this);
        _this.updateMetaPairFieldByIndex = _this.updateMetaPairFieldByIndex.bind(_this);
        _this.renderMetaPairValueEditor = _this.renderMetaPairValueEditor.bind(_this);
        _this.state = {
            currentlyEditingMetaPairId: null,
            metaPairs: props.employee.metadata
        };
        return _this;
    }
    MetadataInterface.prototype.toggleEditingMetaPair = function (metaPairId) {
        var currentlyEditingMetaPairId = this.state.currentlyEditingMetaPairId;
        // Unset the currently editing metaPair if we’re toggling that metaPair. Else, set to the new metaPair ID.
        if (metaPairId === currentlyEditingMetaPairId) {
            currentlyEditingMetaPairId = null;
        }
        else {
            currentlyEditingMetaPairId = metaPairId;
        }
        return this.setState({ currentlyEditingMetaPairId: currentlyEditingMetaPairId });
    };
    MetadataInterface.prototype.deleteMetaPair = function (metaPairKey) {
        var metaPairs = this.state.metaPairs.slice();
        // Drop the metaPair by finding its index
        metaPairs.splice(metaPairs.findIndex(function (metaPair) { return metaPair.key === metaPairKey; }), 1);
        return this.setState({ metaPairs: metaPairs });
    };
    MetadataInterface.prototype.createMetaPair = function () {
        var metaPairs = this.state.metaPairs.slice();
        // extract the highest ID currently existing so we have something to mock
        var highestId = metaPairs.reduce(function (currentHighestId, metaPair) {
            return Math.max(currentHighestId, metaPair.id);
        }, -1);
        metaPairs.push({
            id: highestId + 1,
            key: '',
            type: 'string',
            value: ''
        });
        return this.setState({ metaPairs: metaPairs, currentlyEditingMetaPairId: highestId + 1 });
    };
    MetadataInterface.prototype.updateMetaPairFieldByIndex = function (metaPairIndex, field, value) {
        var metaPairs = this.state.metaPairs.slice();
        metaPairs[metaPairIndex][field] = value;
        return this.setState({ metaPairs: metaPairs });
    };
    MetadataInterface.prototype.renderControls = function (metaPair) {
        var _this = this;
        return (React.createElement("div", { className: "tr self-center ml2" },
            React.createElement(react_geomicons_1.default, { color: "#555555", name: (metaPair.id !== this.state.currentlyEditingMetaPairId) ? 'compose' : 'check', className: "pointer mt1", onClick: function () { return _this.toggleEditingMetaPair(metaPair.id); } }),
            React.createElement(react_geomicons_1.default, { color: "#555555", name: "close", className: "pointer mt1 ml2", onClick: function () { return _this.deleteMetaPair(metaPair.key); } })));
    };
    MetadataInterface.prototype.renderMetaPairValueEditor = function (metadata, metadataIndex) {
        var _this = this;
        var metaPairValueEditor;
        var metaTypeConfig = metaTypes.find(function (metaType) { return metaType.type === metadata.type; });
        switch (metadata.type) {
            case 'string':
            case 'number':
                metaPairValueEditor = React.createElement("input", { className: "pa1 ma0 nl1 w-100", type: metaTypeConfig.type, value: metadata.value, onChange: function (e) { return _this.updateMetaPairFieldByIndex(metadataIndex, 'value', e.target.value); }, placeholder: "value" });
                break;
            case 'boolean':
                metaPairValueEditor = React.createElement("input", { className: "pa1 ma0 nl1 w-100", type: "checkbox", checked: !!metadata.value, onChange: function (e) { return _this.updateMetaPairFieldByIndex(metadataIndex, 'value', String(e.target.checked)); } });
                break;
            default: break;
        }
        return metaPairValueEditor;
    };
    MetadataInterface.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return (React.createElement("div", { className: classNames(this.props.className) },
            React.createElement("ul", { className: "list ma0 pa0 bg-near-white bb b--black-20" }, this.state.metaPairs.map(function (metaPair, index) {
                if (metaPair.id !== _this.state.currentlyEditingMetaPairId) {
                    return (React.createElement("li", { className: "flex ph3 pv2 ma0 bt bl br b--black-20", key: metaPair.id },
                        React.createElement("dl", { className: "ma0 pa0 list flex-auto flex" },
                            React.createElement("dt", { className: "w-third" }, metaPair.key),
                            React.createElement("dd", { className: "w-two-thirds pa0" }, metaPair.value)),
                        _this.renderControls(metaPair)));
                }
                else {
                    return (React.createElement("li", { className: "flex ph3 pv1 ma0 bt bl br b--black-20", key: metaPair.id },
                        React.createElement("dl", { className: "ma0 pa0 list flex-auto flex" },
                            React.createElement("dt", { className: "w-third mr2", style: { marginLeft: '-1px', marginTop: '-1px', paddingBottom: '2px' } },
                                React.createElement("input", { className: "pa1 ma0 nl1 w-100", type: "text", value: metaPair.key, onChange: function (e) { return _this.updateMetaPairFieldByIndex(index, 'key', e.target.value); }, placeholder: "key" })),
                            React.createElement("dt", { className: "w-third mr2", style: { marginLeft: '-1px', marginTop: '-1px', paddingBottom: '2px' } },
                                React.createElement(Select, { value: metaPair.type, clearable: false, onChange: function (newType) { return _this.updateMetaPairFieldByIndex(index, 'type', newType.value); }, options: metaTypes.map(function (type) {
                                        return {
                                            value: type.type,
                                            label: type.label,
                                        };
                                    }) })),
                            React.createElement("dd", { className: "w-third pa0 ml0", style: { marginTop: '-1px', paddingBottom: '2px' } }, _this.renderMetaPairValueEditor(metaPair, index))),
                        _this.renderControls(metaPair)));
                }
            })),
            React.createElement("div", { className: "tr mt3" },
                React.createElement(BasicButton_1.default, { className: "button--positive", onClick: this.createMetaPair }, "Add Metadata"))));
    };
    return MetadataInterface;
}(React.Component));
MetadataInterface.defaultProps = {
    className: ''
};
exports.default = MetadataInterface;
