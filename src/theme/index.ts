// Theme module exports
export { colors } from './colors';
export type { Colors } from './colors';

export { ThemeContext, useThemeMode, getInitialMode } from './ThemeContext';
export type { ThemeContextType } from './ThemeContext';

export { getDesignTokens } from './designTokens';

export { default as ThemeRegistry } from './ThemeRegistry';
export { default as createEmotionCache } from './createEmotionCache';

// Import types for MUI palette augmentation (side-effect import)
import './types';
