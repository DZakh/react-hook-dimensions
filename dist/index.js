'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useDimensions = void 0;
var react_1 = require('react');
// Export hook
function useDimensions() {
  var ref = react_1.useRef(null);
  // Keep track of measurements
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
  // Define measure function
  var updateDimensions = react_1.useCallback(
    function () {
      var element = ref.current;
      if (!element) {
        return;
      }
      var rect = element.getBoundingClientRect();
      setDimensions({
        x: rect.left,
        y: rect.top,
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
  return {
    ref: ref,
    dimensions: dimensions,
    updateDimensions: updateDimensions,
  };
}
exports.useDimensions = useDimensions;
//# sourceMappingURL=index.js.map
