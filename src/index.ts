import { useState, useCallback, useRef, useEffect } from 'react';

export type Dimensions = {
  x: number;
  y: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};
export type DimensionsNode = HTMLElement | null;
export type DimensionsRef = React.RefObject<HTMLElement>;
export type UpdateDimensions = () => void;

export type UseDimensionsReturn = [DimensionsRef, Dimensions, UpdateDimensions];
export type UseDimensionsOptions =
  | {
      dependencies?: any[];
      defaults?: Partial<Dimensions>;
    }
  | undefined;

export function useDimensions({ dependencies, defaults }: UseDimensionsOptions = {}): UseDimensionsReturn {
  const ref = useRef<HTMLElement>(null);

  const [dimensions, setDimensions] = useState<Dimensions>({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    ...defaults,
  });

  const updateDimensions = useCallback(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    setDimensions({
      x: rect.x ?? rect.left,
      y: rect.y ?? rect.top,
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    });
  }, [ref.current]);

  useEffect(() => {
    if (typeof dependencies === 'undefined') {
      return;
    }

    updateDimensions();
  }, [updateDimensions, ...(dependencies || [])]);

  return [ref, dimensions, updateDimensions];
}
