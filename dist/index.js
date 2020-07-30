"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensions = void 0;
var react_1 = require("react");
var helpers_1 = require("./helpers");
function useDimensions(_a) {
    var _b = _a === void 0 ? {} : _a, dependencies = _b.dependencies, defaults = _b.defaults;
    var ref = react_1.useRef(null);
    var _c = react_1.useState(__assign({ x: 0, y: 0, left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, scrollX: 0, scrollY: 0, positionTop: 0, positionLeft: 0 }, defaults)), dimensions = _c[0], setDimensions = _c[1];
    var updateDimensions = react_1.useCallback(function () {
        var _a, _b;
        var element = ref.current;
        if (!element) {
            return;
        }
        var rect = element.getBoundingClientRect();
        var scrollX = helpers_1.getScrollX();
        var scrollY = helpers_1.getScrollY();
        setDimensions({
            x: (_a = rect.x) !== null && _a !== void 0 ? _a : rect.left,
            y: (_b = rect.y) !== null && _b !== void 0 ? _b : rect.top,
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
            scrollX: scrollX,
            scrollY: scrollY,
            positionTop: rect.top + scrollY,
            positionLeft: rect.left + scrollX,
        });
    }, [ref.current]);
    react_1.useEffect(function () {
        if (helpers_1.isUndefined(dependencies)) {
            return;
        }
        updateDimensions();
    }, __spreadArrays([updateDimensions], (dependencies || [])));
    return [ref, dimensions, updateDimensions];
}
exports.useDimensions = useDimensions;
//# sourceMappingURL=index.js.map