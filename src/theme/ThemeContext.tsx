'use client';

import * as React from 'react';
import { PaletteMode } from '@mui/material';

// Theme context for managing dark/light mode
export interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeMode = () => React.useContext(ThemeContext);

// Helper to get initial theme (SSR-safe, defaults to light)
export const getInitialMode = (): PaletteMode => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme-mode') as PaletteMode | null;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

