import { useState, useEffect } from "react";

export const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  // useEffect → runs after every render when 'count' changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Document title updated:", document.title);
  }, [count]); // dependency array → triggers effect when count changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 useEffect - Dynamic Document Title</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
