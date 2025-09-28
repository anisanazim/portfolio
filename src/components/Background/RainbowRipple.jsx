import React, { useState, useEffect } from 'react';
import './RainbowRipple.css';

const RIPPLE_LIFETIME = 1200; // 1.2s to match CSS

const RainbowRipple = ({ trigger = "mousemove" }) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const addRipple = (x, y) => {
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, RIPPLE_LIFETIME);
    };

    const handleEvent = (e) => {
      let x, y;
      
      // Handle touch events
      if (e.touches) {
        const touch = e.touches[0];
        x = touch.clientX;
        y = touch.clientY;
      } else {
        // Handle mouse events
        x = e.clientX;
        y = e.clientY;
      }

      if (x && y) {
        if (trigger === "mousemove" && (e.type === "mousemove" || e.type === "touchmove")) {
          addRipple(x, y);
        } else if (trigger === "click" && (e.type === "click" || e.type === "touchstart")) {
          addRipple(x, y);
        }
      }
    };

    // Add both mouse and touch event listeners
    if (trigger === "mousemove") {
      window.addEventListener("mousemove", handleEvent);
      window.addEventListener("touchmove", handleEvent, { passive: true });
    } else if (trigger === "click") {
      window.addEventListener("click", handleEvent);
      window.addEventListener("touchstart", handleEvent, { passive: true });
    }

    return () => {
      if (trigger === "mousemove") {
        window.removeEventListener("mousemove", handleEvent);
        window.removeEventListener("touchmove", handleEvent);
      } else if (trigger === "click") {
        window.removeEventListener("click", handleEvent);
        window.removeEventListener("touchstart", handleEvent);
      }
    };
  }, [trigger]);

  return (
    <div className="rainbow-ripple-overlay">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="rainbow-ripple"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
          }}
        />
      ))}
    </div>
  );
};

export default RainbowRipple;