"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var farrow_http_1 = require("farrow-http");
var todos_1 = require("./todos");
exports.router = farrow_http_1.Router();
exports.router.use(todos_1.router);
//# sourceMappingURL=index.js.map