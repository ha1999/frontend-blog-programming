import React from 'react'
export interface Size {
    width: number;
    height: number;
}

export function useWindowSize(): Size {
    const [windowSize, setWindowSize] = React.useState<Size>({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    React.useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}