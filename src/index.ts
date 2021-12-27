import { useState, useCallback, useRef, useEffect } from 'react';
import { isUndefined, getScrollX, getScrollY, useIsomorphicLayoutEffect } from './helpers';

export type Dimensions = {
  x: number;
  y: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  scrollX: number;
  scrollY: number;
  positionTop: number;
  positionLeft: number;
};

export type DimensionsNode<TElement extends HTMLElement = HTMLElement> = TElement | null;
export type DimensionsRef<TElement extends HTMLElement = HTMLElement> = React.MutableRefObject<
  DimensionsNode<TElement>
>;
export type UpdateDimensions = () => void;

export type UseDimensionsReturn<TElement extends HTMLElement = HTMLElement> = [
  DimensionsRef<TElement>,
  Dimensions,
  UpdateDimensions
];
export type UseDimensionsOptions =
  | {
      dependencies?: any[];
      defaults?: Partial<Dimensions>;
      layoutEffect?: boolean;
    }
  | undefined;

export function useDimensions<TElement extends HTMLElement = HTMLElement>({
  dependencies,
  defaults = {},
  layoutEffect = false,
}: UseDimensionsOptions = {}): UseDimensionsReturn<TElement> {
  const ref = useRef<DimensionsNode<TElement>>(null);

  const [dimensions, setDimensions] = useState<Dimensions>({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    scrollX: 0,
    scrollY: 0,
    positionTop: 0,
    positionLeft: 0,
    ...defaults,
  });

  const updateDimensions = useCallback(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const scrollX = getScrollX();
    const scrollY = getScrollY();

    setDimensions({
      x: rect.x ?? rect.left,
      y: rect.y ?? rect.top,
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
      scrollX,
      scrollY,
      positionTop: rect.top + scrollY,
      positionLeft: rect.left + scrollX,
    });
  }, []);

  const useCustomEffect = layoutEffect ? useIsomorphicLayoutEffect : useEffect;
  useCustomEffect(() => {
    if (isUndefined(dependencies)) {
      return;
    }

    updateDimensions();
  }, dependencies || []);

  return [ref, dimensions, updateDimensions];
}
