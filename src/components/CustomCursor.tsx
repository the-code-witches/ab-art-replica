import { useEffect, useState } from "react";

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
      const isInteractive = element?.closest("a, button, [role='button'], input, textarea, select, label, .cursor-pointer");
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
      className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ${
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
        // Animated sandclock
        <div className="relative w-6 h-6">
          {/* Hourglass SVG with animation */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-sm"
          >
            {/* Top bulb */}
            <path
              d="M6 3H18V5C18 7 15 9 12 9C9 9 6 7 6 5V3Z"
              fill="white"
              stroke="#3F00FF"
              strokeWidth="1.5"
            />
            {/* Bottom bulb */}
            <path
              d="M6 21H18V19C18 17 15 15 12 15C9 15 6 17 6 19V21Z"
              fill="white"
              stroke="#3F00FF"
              strokeWidth="1.5"
            />
            {/* Connecting lines */}
            <line x1="12" y1="9" x2="12" y2="15" stroke="#3F00FF" strokeWidth="1.5" />
            {/* Animated sand */}
            <circle cx="12" cy="12" r="2" fill="#3F00FF" className="animate-sand-drop" />
          </svg>
        </div>
      )}
      
      <style>{`
        @keyframes sand-drop {
          0% {
            transform: translateY(-4px);
            opacity: 1;
          }
          50% {
            transform: translateY(4px);
            opacity: 1;
          }
          100% {
            transform: translateY(4px);
            opacity: 0;
          }
        }
        
        .animate-sand-drop {
          animation: sand-drop 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
