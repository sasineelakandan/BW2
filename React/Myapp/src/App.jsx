import React, { useState, useCallback } from "react";

const ThemeButton = React.memo(({ onToggleTheme }) => {
  console.log("ThemeButton Rendered");
  return <button onClick={onToggleTheme}>Toggle Theme</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = useCallback(() => {
    console.log("Increment function called");
    setCount((prev) => prev + 1);
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  console.log("ParentComponent Rendered");

  return (
    <div style={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000", padding: "20px", minHeight: "100vh" }}>
      <h2>With useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
      <br /><br />
      <ThemeButton onToggleTheme={toggleTheme} />
    </div>
  );
};

export default ParentComponent;
