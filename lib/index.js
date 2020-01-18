'use strict';

var fs = require('fs');
var util = require('util');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var asyncMkdir = util.promisify(fs.mkdir);
var asyncStat = util.promisify(fs.stat);
var asyncWriteFile = util.promisify(fs.writeFile);
var index = (function (options) { return function (files) { return __awaiter(void 0, void 0, Promise, function () {
    var exception_1, writings, _i, files_1, file, endSlash, filePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(options instanceof Object)) {
                    throw new TypeError("\"options\" must be an object");
                }
                if (!("folder" in options)) {
                    throw new Error("\"folder\" must be present");
                }
                if (typeof options.folder !== "string") {
                    throw new TypeError("\"folder\" must be a string");
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 5]);
                return [4 /*yield*/, asyncStat(options.folder)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                exception_1 = _a.sent();
                return [4 /*yield*/, asyncMkdir(options.folder, { recursive: true })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5:
                writings = [];
                for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                    file = files_1[_i];
                    endSlash = options.folder.endsWith("/") ? "" : "/";
                    filePath = "" + options.folder + endSlash + file.path;
                    writings.push(asyncWriteFile(filePath, file.content));
                }
                return [4 /*yield*/, Promise.all(writings)];
            case 6:
                _a.sent();
                return [2 /*return*/, files];
        }
    });
}); }; });

module.exports = index;
