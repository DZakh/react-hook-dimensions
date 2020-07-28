"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollY = exports.getScrollX = exports.isUndefined = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function getScrollX() {
    var body = document.documentElement || document.body.parentNode || document.body;
    return isUndefined(window.pageXOffset) ? body.scrollLeft : window.pageXOffset;
}
exports.getScrollX = getScrollX;
function getScrollY() {
    var body = document.documentElement || document.body.parentNode || document.body;
    return isUndefined(window.pageYOffset) ? body.scrollTop : window.pageYOffset;
}
exports.getScrollY = getScrollY;
//# sourceMappingURL=helpers.js.map