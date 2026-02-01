import { useStore } from "@/zustand/store";
import { useEffect, useRef } from "react";

export const CanvasCursor = () => {
  const is_nav = useStore((e) => e.is_nav);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mousePos = useRef({ x: 0, y: 0 });

  // We track the current visual state of the cursor in a Ref
  // This allows us to animate everything (x, y, width, height) smoothly
  const cursor = useRef({ x: 0, y: 0, w: 55, h: 55, r: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const lerpFactor = is_nav ? 0.3 : 0.1; // Adjust for "weight" (0.1 is snappy, 0.05 is floaty)

      // 1. DETERMINE TARGETS
      let targetX, targetY, targetW, targetH, targetR;

      const nav_bar = document.getElementById("nav_bar");
      const width = nav_bar?.clientWidth;
      const height = nav_bar?.clientHeight;
      if (is_nav) {
        targetW = width ? width + 4 : 320;
        targetH = height ? height + 4 : 40;
        // Corrected Nav Logic: Centered at bottom
        targetX = window.innerWidth / 2 - targetW / 2;
        targetY = window.innerHeight - 65;
        targetR = 12; // Square-ish with slight round
      } else {
        targetW = 55;
        targetH = 55;
        targetX = mousePos.current.x - targetW / 2;
        targetY = mousePos.current.y - targetH / 2;
        targetR = 50; // Circle
      }

      // 2. LERP EVERYTHING
      cursor.current.x += (targetX - cursor.current.x) * lerpFactor;
      cursor.current.y += (targetY - cursor.current.y) * lerpFactor;

      // 3. LERP EVERYTHING
      cursor.current.w += (targetW - cursor.current.w) * lerpFactor;
      cursor.current.h += (targetH - cursor.current.h) * lerpFactor;
      cursor.current.r += (targetR - cursor.current.r) * lerpFactor;

      // 3. DRAW
      ctx.beginPath();
      ctx.roundRect(
        cursor.current.x + 0.5,
        cursor.current.y,
        cursor.current.w,
        cursor.current.h,
        [50],
      );

      ctx.strokeStyle = "white";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [is_nav]); // Re-runs targets when nav state changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        // zIndex: 99,
      }}
    />
  );
};
