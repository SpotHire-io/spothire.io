"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var paths = require('./paths');
var Icon = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'warning' : _b, _c = _a.size, size = _c === void 0 ? '1em' : _c, _d = _a.fill, fill = _d === void 0 ? 'currentColor' : _d, width = _a.width, height = _a.height, props = __rest(_a, ["name", "size", "fill", "width", "height"]);
    var path = paths[name];
    return (React.createElement("svg", __assign({}, props, { width: width || size, height: height || size, fill: fill, "data-id": "geomicon-" + name, viewBox: '0 0 32 32' }),
        React.createElement("path", { d: path })));
};
exports.default = Icon;
