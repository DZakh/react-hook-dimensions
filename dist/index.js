'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useDimensions = void 0;
var react_1 = require('react');
function useDimensions() {
  var ref = react_1.useRef(null);
  var _a = react_1.useState({
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
    }),
    dimensions = _a[0],
    setDimensions = _a[1];
  var updateDimensions = react_1.useCallback(
    function () {
      var _a, _b;
      var element = ref.current;
      if (!element) {
        return;
      }
      var rect = element.getBoundingClientRect();
      setDimensions({
        x: (_a = rect.x) !== null && _a !== void 0 ? _a : rect.left,
        y: (_b = rect.y) !== null && _b !== void 0 ? _b : rect.top,
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
      });
    },
    [ref.current]
  );
  return [ref, dimensions, updateDimensions];
}
exports.useDimensions = useDimensions;
//# sourceMappingURL=index.js.map
