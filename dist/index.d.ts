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
export declare type DimensionsNode = HTMLElement | null;
export declare type DimensionsRef = React.RefObject<HTMLElement>;
export declare type UpdateDimensions = () => void;
export declare type UseDimensionsReturn = [DimensionsRef, Dimensions, UpdateDimensions];
export declare type UseDimensionsOptions = {
    dependencies?: any[];
    defaults?: Partial<Dimensions>;
    layoutEffect?: boolean;
} | undefined;
export declare function useDimensions({ dependencies, defaults, layoutEffect, }?: UseDimensionsOptions): UseDimensionsReturn;
