import { useState, useEffect } from "react";
import { TitleUpdater } from "./Updatetitle";


export const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handler for mouse movement
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log("Mouse moved:", event.clientX, event.clientY);
    };

    // Subscribe to the event
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: remove the event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("Mouse event listener removed");
    };
  }, []); // empty dependency → runs only once

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h2>🖱️ Mouse Tracker</h2>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
    </div>
    <TitleUpdater/>
 
    </>
  );
};
