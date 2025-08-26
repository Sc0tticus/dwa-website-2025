"use client";
import { createContext, useState, useContext } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// ThemeProvider component to wrap the app and provide theme state
export function ThemeProvider({ children }) {
  const [logoDisplayMode, setLogoDisplayMode] = useState("grid");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLogoDisplay = () => {
    setLogoDisplayMode((prevn) => (prevn === "grid" ? "carousel" : "grid"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    logoDisplayMode,
    isDarkMode,
    toggleLogoDisplay,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
