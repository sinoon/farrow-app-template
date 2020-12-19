"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var farrow_http_1 = require("farrow-http");
var farrow_schema_1 = require("farrow-schema");
var data_1 = require("../../data");
var Layout_1 = require("../components/Layout");
var NoCache_1 = require("../../middleware/NoCache");
var Home_1 = require("./Home");
var Create_1 = require("./Create");
var Update_1 = require("./Update");
exports.router = farrow_http_1.Router();
exports.router
    .match({
    pathname: '/',
})
    .use(NoCache_1.NoCache())
    .use(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var LayoutView;
    return tslib_1.__generator(this, function (_a) {
        LayoutView = Layout_1.useLayoutView();
        return [2 /*return*/, LayoutView.render(react_1.default.createElement(Home_1.Home, { todos: data_1.fakeData }))];
    });
}); });
exports.router
    .match({
    pathname: '/create',
})
    .use(NoCache_1.NoCache())
    .use(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var LayoutView;
    return tslib_1.__generator(this, function (_a) {
        LayoutView = Layout_1.useLayoutView();
        return [2 /*return*/, LayoutView.render(react_1.default.createElement(Create_1.Create, null))];
    });
}); });
exports.router
    .match({
    pathname: '/update/:todoId',
    params: {
        todoId: farrow_schema_1.Int,
    },
})
    .use(NoCache_1.NoCache())
    .use(function (request) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var LayoutView, todo;
    return tslib_1.__generator(this, function (_a) {
        LayoutView = Layout_1.useLayoutView();
        todo = data_1.fakeData.find(function (todo) { return todo.id === request.params.todoId; });
        if (!todo) {
            return [2 /*return*/, farrow_http_1.Response.status(404).text("todo is not found, id: " + request.params.todoId)];
        }
        return [2 /*return*/, LayoutView.render(react_1.default.createElement(Update_1.Update, { todo: todo }))];
    });
}); });
//# sourceMappingURL=index.js.map