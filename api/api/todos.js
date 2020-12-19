"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.err = exports.ok = exports.router = void 0;
var tslib_1 = require("tslib");
var farrow_http_1 = require("farrow-http");
var farrow_schema_1 = require("farrow-schema");
var data_1 = require("../data");
exports.router = farrow_http_1.Router();
var uid = 0;
var ok = function (data) {
    return farrow_http_1.Response.json({
        success: true,
        message: '',
        data: data,
    });
};
exports.ok = ok;
var err = function (message) {
    return farrow_http_1.Response.json({
        success: false,
        message: message,
        data: null,
    });
};
exports.err = err;
exports.router
    .match({
    pathname: '/',
})
    .use(function () {
    return exports.ok(data_1.fakeData);
});
exports.router
    .match({
    pathname: '/item/:todoId',
    params: {
        todoId: farrow_schema_1.Int,
    },
})
    .use(function (request) {
    var todo = data_1.fakeData.find(function (todo) { return todo.id === request.params.todoId; });
    if (!todo) {
        return exports.err("Todo id is not found: " + request.params.todoId);
    }
    return exports.ok(todo);
});
exports.router
    .match({
    pathname: '/create',
    method: 'POST',
    body: {
        content: String,
    },
})
    .use(function (request) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var todo;
    return tslib_1.__generator(this, function (_a) {
        todo = {
            id: uid++,
            content: request.body.content,
            completed: false,
        };
        data_1.fakeData.push(todo);
        return [2 /*return*/, exports.ok(todo)];
    });
}); });
exports.router
    .match({
    pathname: '/toggle/:todoId',
    method: 'POST',
    params: {
        todoId: farrow_schema_1.Int,
    },
})
    .use(function (request) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var todo;
    return tslib_1.__generator(this, function (_a) {
        todo = data_1.fakeData.find(function (todo) { return todo.id === request.params.todoId; });
        if (!todo) {
            return [2 /*return*/, exports.err("Todo id is not found: " + request.params.todoId)];
        }
        todo.completed = !todo.completed;
        return [2 /*return*/, exports.ok(todo)];
    });
}); });
exports.router
    .match({
    pathname: '/update/:todoId',
    method: 'POST',
    params: {
        todoId: farrow_schema_1.Int,
    },
    body: {
        content: String,
    },
})
    .use(function (request) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var todo;
    return tslib_1.__generator(this, function (_a) {
        todo = data_1.fakeData.find(function (todo) { return todo.id === request.params.todoId; });
        if (!todo) {
            return [2 /*return*/, exports.err("Todo id is not found: " + request.params.todoId)];
        }
        todo.content = request.body.content;
        return [2 /*return*/, exports.ok(todo)];
    });
}); });
exports.router
    .match({
    pathname: '/delete/:todoId',
    method: 'POST',
    params: {
        todoId: farrow_schema_1.Int,
    },
})
    .use(function (request) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var index, todo;
    return tslib_1.__generator(this, function (_a) {
        index = data_1.fakeData.findIndex(function (todo) { return todo.id === request.params.todoId; });
        if (index === -1) {
            return [2 /*return*/, exports.err("Todo id is not found: " + request.params.todoId)];
        }
        todo = data_1.fakeData[index];
        data_1.fakeData.splice(index, 1);
        return [2 /*return*/, exports.ok(todo)];
    });
}); });
//# sourceMappingURL=todos.js.map