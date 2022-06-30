import React, { useEffect, useState, useRef, useCallback } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [intervalPosition, setIntervalPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);
  useInterval(() => {
    // Your custom logic here
    setIntervalPosition(position);
  }, 40);

  return intervalPosition;
};

// Hook
const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (undefined !== savedCallback?.current) {
        savedCallback.current();
      }
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const segNum = 500;
const INIT_ARR = [...Array(segNum)].map((_, i) => ({ x: 0, y: 0 }));

const CursorLine = () => {
  const canvasRef = useRef(null);
  const size = useWindowSize();
  const [arr, setArr] = useState(INIT_ARR);
  const mousePos = useMousePosition();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas && size.width) {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.lineWidth = 5;
      context.moveTo(arr[0].x, arr[0].y);
      arr.map(c => context.lineTo(c.x, c.y));
      context.strokeStyle = "#E2FF5D";
      context.stroke();
      context.closePath();
    }
  }, [arr, size.width]);

  useEffect(() => {
    setArr(arr => {
      arr.shift();
      arr.push(mousePos);
      return arr;
    });
    draw();
  }, [mousePos, draw]);

  return size.width && size.height ? (
    <canvas
      className="cursorcanvas"
      width={size.width}
      height={size.height}
      ref={canvasRef}
    />
  ) : null;
};

export default CursorLine;
