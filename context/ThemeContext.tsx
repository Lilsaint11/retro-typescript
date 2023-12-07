"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the theme type
type Theme = 'light' | 'dark';

// Define the context type
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  storyModalOpen: boolean;
  toggleStoryModalOpen: () => void;
  fullStoryModalOpen: boolean;
  toggleFullStoryModalOpen: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Define the context provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the context provider
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [storyModalOpen, setStoryModalOpen] = useState<boolean>(false);
  const [fullStoryModalOpen, setFullStoryModalOpen] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleStoryModalOpen = () => {
    setStoryModalOpen((prev) => !prev);
  };

  const toggleFullStoryModalOpen = () => {
    setFullStoryModalOpen((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, storyModalOpen, toggleStoryModalOpen, fullStoryModalOpen, toggleFullStoryModalOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the theme context
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
