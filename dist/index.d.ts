/// <reference types="react" />
export declare type Dimensions = {
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
export declare type DimensionsNode<TElement extends HTMLElement = HTMLElement> = TElement | null;
export declare type DimensionsRef<TElement extends HTMLElement = HTMLElement> = React.RefObject<TElement>;
export declare type UpdateDimensions = () => void;
export declare type UseDimensionsReturn<TElement extends HTMLElement = HTMLElement> = [DimensionsRef<TElement>, Dimensions, UpdateDimensions];
export declare type UseDimensionsOptions = {
    dependencies?: any[];
    defaults?: Partial<Dimensions>;
    layoutEffect?: boolean;
} | undefined;
export declare function useDimensions<TElement extends HTMLElement = HTMLElement>({ dependencies, defaults, layoutEffect, }?: UseDimensionsOptions): UseDimensionsReturn;
