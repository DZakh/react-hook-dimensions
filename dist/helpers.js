"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollY = exports.getScrollX = exports.isUndefined = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
var body = document.documentElement || document.body.parentNode || document.body;
exports.getScrollX = isUndefined(window.pageXOffset) ? function () { return body.scrollLeft; } : function () { return window.pageXOffset; };
exports.getScrollY = isUndefined(window.pageYOffset) ? function () { return body.scrollTop; } : function () { return window.pageYOffset; };
//# sourceMappingURL=helpers.js.map