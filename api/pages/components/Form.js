"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var hooks_1 = require("farrow-react/hooks");
var Form = function (props) {
    var basename = hooks_1.useRenderContext().basenames[0];
    return react_1.default.createElement("form", tslib_1.__assign({}, props, { action: basename + props.action }));
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map