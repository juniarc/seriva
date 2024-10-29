import { useEffect, useState } from "react";

export const useObserveWidthElement = (elementRef: React.RefObject<HTMLElement>) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0].contentRect) {
                setWidth(entries[0].contentRect.width);
            }
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef]);

    return width;
};

export const useObserveHeightElement = (elementRef: React.RefObject<HTMLElement>) => {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0].contentRect) {
                setHeight(entries[0].contentRect.height);
            }
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef]);

    return height;
};
