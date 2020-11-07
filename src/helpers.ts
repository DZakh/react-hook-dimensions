import { useLayoutEffect, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

export function getScrollX(): number {
  const body = document.documentElement || document.body.parentNode || document.body;
  return isUndefined(window.pageXOffset) ? body.scrollLeft : window.pageXOffset;
}
export function getScrollY(): number {
  const body = document.documentElement || document.body.parentNode || document.body;
  return isUndefined(window.pageYOffset) ? body.scrollTop : window.pageYOffset;
}

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
