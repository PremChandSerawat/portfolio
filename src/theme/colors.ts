// Semantic color names for better readability
export const colors = {
  // Dark mode
  dark: {
    teal: { main: '#64ffda', light: '#9fffeb', dark: '#14cba8' },
    violet: { main: '#a78bfa', light: '#c4b5fd', dark: '#7c3aed' },
    amber: { main: '#fbbf24', light: '#fcd34d', dark: '#d97706' },
    azure: { main: '#3b82f6', light: '#60a5fa', dark: '#2563eb' },
    slate: '#112240',
    midnight: '#0f172a',
    text: { primary: '#ffffff', secondary: '#b8b8d1' },
  },
  // Light mode
  light: {
    teal: { main: '#0d9488', light: '#14b8a6', dark: '#0f766e' },
    violet: { main: '#7c3aed', light: '#8b5cf6', dark: '#6d28d9' },
    amber: { main: '#d97706', light: '#f59e0b', dark: '#b45309' },
    azure: { main: '#2563eb', light: '#3b82f6', dark: '#1d4ed8' },
    slate: '#ffffff',
    cream: '#f8fafc',
    text: { primary: '#0f172a', secondary: '#475569' },
  },
};

export type Colors = typeof colors;

