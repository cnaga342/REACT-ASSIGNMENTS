import { useState, useEffect } from "react";

export const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handler for scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY); // update state with scroll position
      console.log("Scroll position:", window.scrollY);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function → remove listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Scroll listener removed");
    };
  }, []); // Empty dependency → run only on mount

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h2>📜 Scroll Tracker</h2>
      <p>Scroll Y Position: {scrollY}px</p>
      <p>Scroll down to see the value change!</p>
    </div>
  );
};
