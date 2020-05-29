(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\n\n  <!-- Intro -->\n  <section class=\"intro\">\n    <header>\n      <h1>Harmony Possibilities</h1>\n      <p>A free tool for musicians</p>\n      <app-circle-fifhts></app-circle-fifhts>\n      <ul class=\"actions\">\n        <li><a href=\"#first\" class=\"arrow scrolly\"><span class=\"label\">Next</span></a></li>\n      </ul>\n    </header>\n    <div class=\"content\">\n      <app-major-mode></app-major-mode>\n    </div>\n  </section>\n\n  <!-- Section -->\n  <section id=\"first\">\n    <header>\n      <h2>Optional Chords V7, Altered Dominant and Symmetric Dominant</h2>\n    </header>\n    <div class=\"content\">\n      <app-optional-chords></app-optional-chords>\n    </div>\n  </section>\n\n  <!-- Section -->\n  <section id=\"second\">\n    <header>\n      <h2>Secondary Dominants, Extended Dominants and the \"II V\" Progression</h2>\n    </header>\n    <div class=\"content\">\n      <app-secondary-dominants></app-secondary-dominants>\n    </div>\n  </section>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/circle-fifhts/circle-fifhts.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/circle-fifhts/circle-fifhts.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<select class=\"form-control\" id=\"SelectCircleFifhts\" (change)=\"onSelect($event.target.value)\">\n  <option *ngFor=\"let item of notes\">{{item}}</option>\n</select>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/major-mode/major-mode.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/major-mode/major-mode.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of header\" scope=\"col\">{{column}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of majorMode\">\n      <td *ngFor=\"let column of header\">\n        <div [innerHTML]=\"item[column]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/optional-chords/optional-chords.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/optional-chords/optional-chords.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Optional</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of header\" scope=\"col\">{{column}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of majorMode\">\n      <td *ngFor=\"let column of header\">\n        <div [innerHTML]=\"item[column]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<h2>Altered Dominant</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of header\" scope=\"col\">{{column}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of alteredDominant\">\n      <td *ngFor=\"let column of header\">\n        <div [innerHTML]=\"item[column]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<h2>Symmetric Dominant</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of header\" scope=\"col\">{{column}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of symetricDominant\">\n      <td *ngFor=\"let column of header\">\n        <div [innerHTML]=\"item[column]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/secondary-dominants/secondary-dominants.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/secondary-dominants/secondary-dominants.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Secondary Dominants</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of header\" scope=\"col\">{{column}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of secondaryDominants\">\n      <td *ngFor=\"let column of header\">\n        <div [innerHTML]=\"item[column]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'harmony-possibilities';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sections_circle_fifhts_circle_fifhts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/circle-fifhts/circle-fifhts.component */ "./src/app/sections/circle-fifhts/circle-fifhts.component.ts");
/* harmony import */ var _sections_major_mode_major_mode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/major-mode/major-mode.component */ "./src/app/sections/major-mode/major-mode.component.ts");
/* harmony import */ var _sections_optional_chords_optional_chords_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/optional-chords/optional-chords.component */ "./src/app/sections/optional-chords/optional-chords.component.ts");
/* harmony import */ var _sections_secondary_dominants_secondary_dominants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/secondary-dominants/secondary-dominants.component */ "./src/app/sections/secondary-dominants/secondary-dominants.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _sections_circle_fifhts_circle_fifhts_component__WEBPACK_IMPORTED_MODULE_5__["CircleFifhtsComponent"],
            _sections_major_mode_major_mode_component__WEBPACK_IMPORTED_MODULE_6__["MajorModeComponent"],
            _sections_optional_chords_optional_chords_component__WEBPACK_IMPORTED_MODULE_7__["OptionalChordsComponent"],
            _sections_secondary_dominants_secondary_dominants_component__WEBPACK_IMPORTED_MODULE_8__["SecondaryDominantsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/sections/circle-fifhts/circle-fifhts.component.css":
/*!********************************************************************!*\
  !*** ./src/app/sections/circle-fifhts/circle-fifhts.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2NpcmNsZS1maWZodHMvY2lyY2xlLWZpZmh0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/circle-fifhts/circle-fifhts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sections/circle-fifhts/circle-fifhts.component.ts ***!
  \*******************************************************************/
/*! exports provided: CircleFifhtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleFifhtsComponent", function() { return CircleFifhtsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tonal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tonal.service */ "./src/app/services/tonal.service.ts");
/* harmony import */ var _services_db_circle_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db/circle.db */ "./src/app/services/db/circle.db.ts");




let CircleFifhtsComponent = class CircleFifhtsComponent {
    constructor(tonalService) {
        this.tonalService = tonalService;
        this.notes = [];
    }
    ngOnInit() {
        this.tonalService.pushTonalityInit(["C"]);
        this.notes = _services_db_circle_db__WEBPACK_IMPORTED_MODULE_3__["Circle"];
    }
    onSelect(item) {
        this.tonalService.pushTonality(item);
    }
};
CircleFifhtsComponent.ctorParameters = () => [
    { type: _services_tonal_service__WEBPACK_IMPORTED_MODULE_2__["TonalService"] }
];
CircleFifhtsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-circle-fifhts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./circle-fifhts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/circle-fifhts/circle-fifhts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./circle-fifhts.component.css */ "./src/app/sections/circle-fifhts/circle-fifhts.component.css")).default]
    })
], CircleFifhtsComponent);



/***/ }),

/***/ "./src/app/sections/major-mode/major-mode.component.css":
/*!**************************************************************!*\
  !*** ./src/app/sections/major-mode/major-mode.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL21ham9yLW1vZGUvbWFqb3ItbW9kZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/major-mode/major-mode.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sections/major-mode/major-mode.component.ts ***!
  \*************************************************************/
/*! exports provided: MajorModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MajorModeComponent", function() { return MajorModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/tonal */ "./node_modules/@tonaljs/tonal/dist/index.esnext.js");
/* harmony import */ var _services_tonal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tonal.service */ "./src/app/services/tonal.service.ts");




let MajorModeComponent = class MajorModeComponent {
    constructor(tonalService) {
        this.tonalService = tonalService;
        this.header = ["Chord", "Notes", "Scales", "Extended"];
        this.majorMode = [];
    }
    ngOnInit() {
        this.tonalService.currentTonality.subscribe(value => {
            const _note = value[value.length - 1];
            this.majorMode = this.GetMajorMode(_note);
        });
    }
    GetMajorMode(_note) {
        let _majorMode = [];
        let _chordNote = "";
        // Imaj7
        _majorMode.push({
            Chord: _note + "maj7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_note + "maj7").notes.toString(),
            Scales: this.tonalService.GetScales(_note, ["major", "lydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "6M") + ")"
        });
        // IIm7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "2M");
        _majorMode.push({
            Chord: _chordNote + "m7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "m7").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "4M") + ")"
        });
        // IIIm7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "3M");
        _majorMode.push({
            Chord: _chordNote + "m7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "m7").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "4M") + ")"
        });
        // IVmaj7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "4M");
        _majorMode.push({
            Chord: _chordNote + "maj7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "maj7").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "4A") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "6M") + ")"
        });
        // V7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "5M");
        _majorMode.push({
            Chord: _chordNote + "7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "7").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["mixolydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "6M") + ")"
        });
        // VIm7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "6M");
        _majorMode.push({
            Chord: _chordNote + "m7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "m7").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "4M") + ")"
        });
        // VIm7
        _chordNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "7M");
        _majorMode.push({
            Chord: _chordNote + "m7b5",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_chordNote + "m7b5").notes.toString(),
            Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "4M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_chordNote, "6m") + ")"
        });
        return _majorMode;
    }
};
MajorModeComponent.ctorParameters = () => [
    { type: _services_tonal_service__WEBPACK_IMPORTED_MODULE_3__["TonalService"] }
];
MajorModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-major-mode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./major-mode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/major-mode/major-mode.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./major-mode.component.css */ "./src/app/sections/major-mode/major-mode.component.css")).default]
    })
], MajorModeComponent);



/***/ }),

/***/ "./src/app/sections/optional-chords/optional-chords.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/optional-chords/optional-chords.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL29wdGlvbmFsLWNob3Jkcy9vcHRpb25hbC1jaG9yZHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/sections/optional-chords/optional-chords.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/optional-chords/optional-chords.component.ts ***!
  \***********************************************************************/
/*! exports provided: OptionalChordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalChordsComponent", function() { return OptionalChordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/tonal */ "./node_modules/@tonaljs/tonal/dist/index.esnext.js");
/* harmony import */ var _services_tonal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tonal.service */ "./src/app/services/tonal.service.ts");




let OptionalChordsComponent = class OptionalChordsComponent {
    constructor(tonalService) {
        this.tonalService = tonalService;
        this.header = ["Chord", "Notes", "Scales", "Extended"];
        this.majorMode = [];
        this.alteredDominant = [];
        this.symetricDominant = [];
    }
    ngOnInit() {
        this.tonalService.currentTonality.subscribe(value => {
            const _note = value[value.length - 1];
            this.majorMode = this.GetOptionalChords(_note);
            this.alteredDominant = this.GetAlteredDominant(_note);
            this.symetricDominant = this.GetSymetricDominant(_note);
        });
    }
    GetOptionalChords(_note) {
        let _result = [];
        // Fifth
        const _fifithNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "5P");
        _result.push({
            Chord: _fifithNote + "7b9, <br>" + _fifithNote + "7#9, <br>" + _fifithNote + "13b9",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7b9").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7#9").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "13b9").notes.toString(),
            Scales: this.tonalService.GetScales(_fifithNote, ["half-whole diminished"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "6M") + ")"
        });
        _result.push({
            Chord: _fifithNote + "7b9b13",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7b9b13").notes.toString(),
            Scales: this.tonalService.GetScales(_fifithNote, ["phrygian dominant"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "6m") + ")"
        });
        return _result;
    }
    GetAlteredDominant(_note) {
        let _result = [];
        // Fifth
        const _fifithNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "5P");
        _result.push({
            Chord: _fifithNote + "7b5b9, <br>" + _fifithNote + "9b5b13, <br>" + _fifithNote + "7b5b9b13",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7b5b9").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "9b5b13").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7b5b9b13").notes.toString(),
            Scales: "",
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "3m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "6m") + ")"
        });
        return _result;
    }
    GetSymetricDominant(_note) {
        let _result = [];
        // Fifth
        const _fifithNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_note, "5P");
        _result.push({
            Chord: _fifithNote + "7#9#11, <br>" + _fifithNote + "13#9#11, <br>" + _fifithNote + "13b9#11",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "7#9#11").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "13#9#11").notes.toString() + ", <br>" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Chord"].get(_fifithNote + "13b9#11").notes.toString(),
            Scales: "",
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "3m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "4A") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Note"].transpose(_fifithNote, "6M") + ")"
        });
        return _result;
    }
    GetLocalScale(_note, _chord) {
        let _result = "";
        for (const _scales of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Scale"].extended(_chord)) {
            for (const _notes of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_2__["Scale"].get(_note + " " + _scales).notes) {
                _result += _notes + ", ";
            }
            _result += _result.substr(0, _result.length - 2) + "<br>";
        }
        return "";
    }
};
OptionalChordsComponent.ctorParameters = () => [
    { type: _services_tonal_service__WEBPACK_IMPORTED_MODULE_3__["TonalService"] }
];
OptionalChordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-optional-chords',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./optional-chords.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/optional-chords/optional-chords.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./optional-chords.component.css */ "./src/app/sections/optional-chords/optional-chords.component.css")).default]
    })
], OptionalChordsComponent);



/***/ }),

/***/ "./src/app/sections/secondary-dominants/secondary-dominants.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/sections/secondary-dominants/secondary-dominants.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY29uZGFyeS1kb21pbmFudHMvc2Vjb25kYXJ5LWRvbWluYW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sections/secondary-dominants/secondary-dominants.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/secondary-dominants/secondary-dominants.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SecondaryDominantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryDominantsComponent", function() { return SecondaryDominantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tonal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tonal.service */ "./src/app/services/tonal.service.ts");
/* harmony import */ var _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/tonal */ "./node_modules/@tonaljs/tonal/dist/index.esnext.js");




let SecondaryDominantsComponent = class SecondaryDominantsComponent {
    constructor(tonalService) {
        this.tonalService = tonalService;
        this.header = ["Chord", "Notes", "Scales", "Extended"];
        this.secondaryDominants = [];
    }
    ngOnInit() {
        this.tonalService.currentTonality.subscribe(value => {
            const _note = value[value.length - 1];
            this.secondaryDominants = this.GetSecondaryDominants(_note);
        });
    }
    GetSecondaryDominants(_note) {
        let _result = [];
        let _changeNote = "";
        // V7/IV
        _result.push({
            Chord: _note + "7 -> " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "4P") + "maj7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_note + "7").notes.toString(),
            Scales: this.tonalService.GetScales(_note, ["mixolydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "6M") + ")"
        });
        // V7/V
        _changeNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "2M");
        _result.push({
            Chord: _changeNote + "7 -> " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "5P") + "7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_changeNote + "7").notes.toString(),
            Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "2M") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "6M") + ")"
        });
        // V7/VI
        _changeNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "3M");
        _result.push({
            Chord: _changeNote + "7 -> " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "6M") + "m7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_changeNote + "7").notes.toString(),
            Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "3m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "6m") + ")"
        });
        // V7/III
        _changeNote = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "7M");
        _result.push({
            Chord: _changeNote + "7 -> " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_note, "3M") + "m7",
            Notes: _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_changeNote + "7").notes.toString(),
            Scales: this.tonalService.GetScales(_changeNote, ["altered"]),
            Extended: "(" + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "2m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "3m") + ", " + _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Note"].transpose(_changeNote, "6m") + ")"
        });
        return _result;
    }
};
SecondaryDominantsComponent.ctorParameters = () => [
    { type: src_app_services_tonal_service__WEBPACK_IMPORTED_MODULE_2__["TonalService"] }
];
SecondaryDominantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-secondary-dominants',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondary-dominants.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/secondary-dominants/secondary-dominants.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secondary-dominants.component.css */ "./src/app/sections/secondary-dominants/secondary-dominants.component.css")).default]
    })
], SecondaryDominantsComponent);



/***/ }),

/***/ "./src/app/services/db/circle.db.ts":
/*!******************************************!*\
  !*** ./src/app/services/db/circle.db.ts ***!
  \******************************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Circle = [
    "C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb", "F"
];


/***/ }),

/***/ "./src/app/services/tonal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tonal.service.ts ***!
  \*******************************************/
/*! exports provided: TonalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TonalService", function() { return TonalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/tonal */ "./node_modules/@tonaljs/tonal/dist/index.esnext.js");




let TonalService = class TonalService {
    constructor() {
        //guarda o tom escolhido no combo
        this.tonality = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentTonality = this.tonality.asObservable();
    }
    pushTonalityInit(tonality) {
        this.tonality.next(tonality);
    }
    pushTonality(tonality) {
        //gravando nova tonalidade
        const newTonality = this.tonality.value;
        newTonality.push(tonality);
        this.tonality.next(newTonality);
    }
    returnNotes(arrayNotes) {
        let _notes = "";
        for (const iterator of arrayNotes) {
            _notes += iterator + ", ";
        }
        return _notes.substr(0, _notes.length - 2);
    }
    returnExtended(_note) {
        let result = "";
        for (const _chord of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].extended(_note)) {
            result += _chord + " <br>";
        }
        return result;
    }
    GetSeventhChord(_notes) {
        let result = "";
        for (let index = 0; index < 4; index++) {
            result += _notes[index] + ", ";
        }
        return result.substr(0, result.length - 2);
    }
    GetScales(_chord, scales) {
        let _reuslt = "";
        for (const _scale of scales) {
            _reuslt += _scale + " (";
            for (const _notes of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Scale"].get(_chord + " " + _scale).notes) {
                _reuslt += _notes + ", ";
            }
            _reuslt = _reuslt.substr(0, _reuslt.length - 2) + ")";
            _reuslt += "<br>";
        }
        return _reuslt;
    }
    GetScalesTotal(_chord) {
        let result = "";
        for (const scale of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].chordScales(_chord)) {
            result += scale + " (";
            const _notes = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Scale"].get(_tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_chord).tonic + " " + scale).notes;
            for (const _note of _notes) {
                result += _note + ", ";
            }
            result = result.substr(0, result.length - 2);
            result += ") <br>";
        }
        return result.substr(0, result.length - 2);
    }
    GetExtended(_note) {
        let result = "";
        for (const _chord of _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].extended(_note)) {
            result += _chord + " (";
            const _notes = _tonaljs_tonal__WEBPACK_IMPORTED_MODULE_3__["Chord"].get(_chord).notes;
            for (let index = 0; index < _notes.length; index++) {
                result += _notes[index] + ", ";
            }
            result = result.substr(0, result.length - 2);
            result += ") <br>";
        }
        return result.substr(0, result.length - 2);
    }
};
TonalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TonalService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gustavo.esteves\GitHub\harmony-possibilities\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map