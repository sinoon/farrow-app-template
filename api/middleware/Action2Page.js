"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action2Api = void 0;
var tslib_1 = require("tslib");
var Action2Api = function (redirectUrl, options) {
    if (redirectUrl === void 0) { redirectUrl = '/'; }
    return function (request, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!request.pathname.startsWith('/action')) {
                        return [2 /*return*/, next(request)];
                    }
                    return [4 /*yield*/, next(tslib_1.__assign(tslib_1.__assign({}, request), { pathname: request.pathname.replace('/action', '/api') }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.redirect(redirectUrl, options)];
            }
        });
    }); };
};
exports.Action2Api = Action2Api;
//# sourceMappingURL=Action2Page.js.map