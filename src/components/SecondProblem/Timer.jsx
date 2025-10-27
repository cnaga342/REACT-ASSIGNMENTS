import { useState, useEffect } from "react";

export const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱️ Timer started");

    // Start a timer that updates 'seconds' every second
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function — runs when component unmounts
    return () => {
      clearInterval(interval);
      console.log("🧹 Timer stopped (component unmounted)");
    };
  }, []); // Empty dependency array → run only once when mounted

  return (
    <div style={{ padding: "20px" }}>
      <h2>⏰ useEffect Timer Example</h2>
      <h3>Timer: {seconds} seconds</h3>
    </div>
  );
};
