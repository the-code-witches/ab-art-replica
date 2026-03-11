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
      const isInteractive = element?.closest("a, button, [role='button'], input, textarea, select, label, .cursor-pointer, img, p, h1, h2, h3, h4, h5, h6, span, div");
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hide default cursor on desktop
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, [position.x, position.y]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  // When hovering over text/images, let browser show native pointer (cursor: auto from body)
  // When in free space, show animated hourglass
  if (isPointer) {
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
      {/* Animated pixel art hourglass - white on transparent */}
      <div className="relative w-8 h-8 animate-hourglass-flip">
        <img
          src={hourglassCursor}
          alt=""
          className="w-8 h-8 object-contain"
          style={{ 
            imageRendering: "pixelated",
            filter: "invert(1)"
          }}
        />
      </div>
      
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