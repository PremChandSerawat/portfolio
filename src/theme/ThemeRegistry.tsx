'use client';

import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline, PaletteMode } from '@mui/material';
import { useServerInsertedHTML } from 'next/navigation';
import createEmotionCache from './createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { ThemeContext } from './ThemeContext';
import { getDesignTokens } from './designTokens';

// Re-export for convenience
export { ThemeContext, useThemeMode } from './ThemeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Always start with 'dark' to match server render and prevent flash
  const [mode, setMode] = React.useState<PaletteMode>('dark');

  // Sync with localStorage after mount (client-side only)
  React.useEffect(() => {
    const saved = localStorage.getItem('theme-mode') as PaletteMode | null;
    if (saved && saved !== mode) {
      setMode(saved);
    }
  }, []);

  // Listen for system preference changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme-mode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  }, []);

  // Memoize theme to prevent unnecessary recalculations
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Emotion cache for SSR style injection
  const [{ cache, flush }] = React.useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;
    
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}
