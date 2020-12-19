"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Link_1 = require("farrow-react/Link");
var Form_1 = require("../components/Form");
var Create = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", null,
            react_1.default.createElement("h1", null, "Farrow Todo List"),
            react_1.default.createElement("p", null,
                react_1.default.createElement(Link_1.Link, { href: "/" },
                    react_1.default.createElement("i", null, "Back")))),
        react_1.default.createElement("main", null,
            react_1.default.createElement("section", null,
                react_1.default.createElement(Form_1.Form, { action: "/action/todos/create", method: "POST" },
                    react_1.default.createElement("header", null,
                        react_1.default.createElement("h2", null, "Create Todo")),
                    react_1.default.createElement("label", { htmlFor: "content" }, "content:"),
                    react_1.default.createElement("input", { type: "text", name: "content", placeholder: "input your todo content" }),
                    react_1.default.createElement("button", { type: "submit" }, "Submit"))))));
};
exports.Create = Create;
//# sourceMappingURL=Create.js.map