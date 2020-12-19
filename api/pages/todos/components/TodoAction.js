"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAction = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Form_1 = require("../../components/Form");
var TodoAction = function (props) {
    var _a;
    var formId = react_1.useMemo(function () {
        return Math.random().toString(32).substr(7);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Form_1.Form, { action: "/action/todos" + props.action, method: (_a = props.method) !== null && _a !== void 0 ? _a : 'POST', style: { display: 'none' } },
            react_1.default.createElement("button", { id: formId, type: "submit" }, "submit form")),
        react_1.default.createElement("label", { style: { display: 'inline' }, htmlFor: formId }, props.children)));
};
exports.TodoAction = TodoAction;
//# sourceMappingURL=TodoAction.js.map