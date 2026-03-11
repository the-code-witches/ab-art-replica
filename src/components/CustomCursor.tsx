import { useEffect, useState } from "react";
import hourglassCursor from "@/assets/hourglass-cursor.png";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device - don't show custom cursor
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateCursorType = () => {
      const element = document.elementFromPoint(position.x, position.y);
      const isInteractive = element?.closest("a, button, [role='button'], input, textarea, select, label, .cursor-pointer, img");
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [position.x, position.y]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-75 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isPointer ? (
        // Pointer cursor (arrow)
        <svg
          width="20"
          height="28"
          viewBox="0 0 20 28"
          fill="none"
          className="drop-shadow-sm"
          style={{ marginLeft: "-4px", marginTop: "-4px" }}
        >
          <path
            d="M3.5 2L3.5 20L7.5 16L11.5 24L14 23L10 15L16 15L3.5 2Z"
            fill="white"
            stroke="#3F00FF"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        // Animated pixel art hourglass
        <div className="relative w-8 h-8 animate-hourglass-flip">
          <img
            src={hourglassCursor}
            alt=""
            className="w-8 h-8 object-contain"
            style={{ 
              imageRendering: "pixelated",
              filter: "invert(1) drop-shadow(0 0 1px rgba(255,255,255,0.4))"
            }}
          />
        </div>
      )}
      
      <style>{`
        @keyframes hourglass-flip {
          0% {
            transform: rotate(0deg);
          }
          45% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          95% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-hourglass-flip {
          animation: hourglass-flip 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
