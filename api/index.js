"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var farrow_http_1 = require("farrow-http");
var api_1 = require("./api");
var pages_1 = require("./pages");
var Action2Page_1 = require("./middleware/Action2Page");
var http = farrow_http_1.Http({
    basenames: ['/base'],
});
http.use(pages_1.router);
// rewrite /action/... to /api/...
// and redirect to home page
http.use(Action2Page_1.Action2Api('/'));
http.serve('/static', path_1.default.join(__dirname, '../static'));
http.route('/api').use(api_1.router);
http.listen(3002, function () {
    console.log("server started at http://localhost:3002");
});
exports.default = http;
//# sourceMappingURL=index.js.map