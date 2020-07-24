import { useState, useCallback, useRef } from 'react';

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
export type UseDimensionsReturn = {
  ref: DimensionsRef;
  dimensions: Dimensions;
  updateDimensions: UpdateDimensions;
};

export function useDimensions(): UseDimensionsReturn {
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
  });

  const updateDimensions = useCallback(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
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
  }, [ref.current]);

  return {
    ref,
    dimensions,
    updateDimensions,
  };
}
