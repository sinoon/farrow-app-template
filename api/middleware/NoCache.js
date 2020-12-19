"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoCache = void 0;
var tslib_1 = require("tslib");
var NoCache = function () { return function (request, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, next(request)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.header('Cache-control', 'no-store')];
        }
    });
}); }; };
exports.NoCache = NoCache;
//# sourceMappingURL=NoCache.js.map