"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Link_1 = require("farrow-react/Link");
var TodoAction_1 = require("./components/TodoAction");
var Home = function (_a) {
    var todos = _a.todos;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", null,
            react_1.default.createElement("h1", null, "Farrow Todo List"),
            react_1.default.createElement("p", null,
                react_1.default.createElement(Link_1.Link, { href: "/create" },
                    react_1.default.createElement("b", null, "Add Todo \u2192")))),
        react_1.default.createElement("main", null,
            react_1.default.createElement("section", null, todos.map(function (todo) {
                return (react_1.default.createElement("aside", { key: todo.id },
                    react_1.default.createElement("h3", { style: { width: '100%', height: 40, overflow: 'auto' } }, todo.content),
                    react_1.default.createElement(TodoAction_1.TodoAction, { action: "/toggle/" + todo.id },
                        react_1.default.createElement("sup", null, todo.completed ? 'completed' : 'active')),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Link_1.Link, { href: "/update/" + todo.id }, "edit"),
                        ' ',
                        react_1.default.createElement(TodoAction_1.TodoAction, { action: "/delete/" + todo.id },
                            react_1.default.createElement("small", null, "delete")))));
            })))));
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map