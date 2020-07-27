// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

const body = document.documentElement || document.body.parentNode || document.body;

export const getScrollX = isUndefined(window.pageXOffset) ? () => body.scrollLeft : () => window.pageXOffset;
export const getScrollY = isUndefined(window.pageYOffset) ? () => body.scrollTop : () => window.pageYOffset;
