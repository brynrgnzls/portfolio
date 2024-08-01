import { useEffect, useState } from "react";

export default function useMousePoint() {
  const [mousePoint, setMousePoint] = useState({ x: 0, y: 0 });

  const listenMouse = (e: MouseEvent) => {
    setMousePoint({ x: e.screenX, y: e.screenY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", listenMouse);
    return () => {
      window.removeEventListener("mousemove", listenMouse);
    };
  }, []);

  return mousePoint;
}
