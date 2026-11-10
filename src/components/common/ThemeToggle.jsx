import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-regulus-border-strong/40 bg-regulus-elevated text-regulus-muted hover:border-regulus-border-strong hover:text-regulus-text theme-transition ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
