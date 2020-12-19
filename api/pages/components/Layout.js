"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutView = exports.Layout = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var farrow_react_1 = require("farrow-react");
var Layout = function (props) {
    var _a, _b, _c, _d;
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("title", null, (_a = props.title) !== null && _a !== void 0 ? _a : ''),
            react_1.default.createElement("meta", { name: "description", content: (_b = props.description) !== null && _b !== void 0 ? _b : '' }),
            react_1.default.createElement("meta", { name: "keywords", content: (_d = (_c = props.keywords) === null || _c === void 0 ? void 0 : _c.join()) !== null && _d !== void 0 ? _d : '' }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "/static/css/mvp.css" })),
        react_1.default.createElement("body", null, props.children)));
};
exports.Layout = Layout;
var useLayoutView = function () {
    var ReactView = farrow_react_1.useReactView();
    var render = function (element, props) {
        return ReactView.render(react_1.default.createElement(exports.Layout, tslib_1.__assign({}, props), element));
    };
    return {
        render: render,
    };
};
exports.useLayoutView = useLayoutView;
//# sourceMappingURL=Layout.js.map