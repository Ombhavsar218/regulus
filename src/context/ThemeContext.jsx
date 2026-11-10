import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext(undefined);

const STORAGE_KEY = 'regulus-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    // Fallback if storage is inaccessible
  }
  return 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#051747' : '#FEFEFE');
    }
  }, [theme]);

  const updateTheme = useCallback((nextThemeOrUpdater) => {
    setTheme((prev) => {
      const next =
        typeof nextThemeOrUpdater === 'function'
          ? nextThemeOrUpdater(prev)
          : nextThemeOrUpdater;
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage write failures
      }
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    updateTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [updateTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: updateTheme, toggleTheme, isDark: theme === 'dark' }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
