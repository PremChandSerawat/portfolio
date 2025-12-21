import { PaletteMode, ThemeOptions } from '@mui/material';
import { colors } from './colors';

// Import types to ensure module augmentation is applied
import './types';

// Design tokens function that returns theme configuration based on mode
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          // Dark mode colors
          primary: {
            main: colors.dark.teal.main,
            light: colors.dark.teal.light,
            dark: colors.dark.teal.dark,
          },
          secondary: {
            main: colors.dark.violet.main,
            light: colors.dark.violet.light,
            dark: colors.dark.violet.dark,
          },
          warning: {
            main: colors.dark.amber.main,
            light: colors.dark.amber.light,
            dark: colors.dark.amber.dark,
          },
          info: {
            main: colors.dark.azure.main,
            light: colors.dark.azure.light,
            dark: colors.dark.azure.dark,
          },
          background: {
            default: colors.dark.midnight,
            paper: colors.dark.slate,
          },
          text: {
            primary: colors.dark.text.primary,
            secondary: colors.dark.text.secondary,
          },
          accent: {
            main: colors.dark.azure.main,
            light: colors.dark.azure.light,
            dark: colors.dark.azure.dark,
            contrastText: '#ffffff',
          },
          accent2: {
            main: colors.dark.violet.main,
            light: colors.dark.violet.light,
            dark: colors.dark.violet.dark,
            contrastText: '#ffffff',
          },
          accent3: {
            main: colors.dark.amber.main,
            light: colors.dark.amber.light,
            dark: colors.dark.amber.dark,
            contrastText: '#000000',
          },
          backgrounds: {
            gradientVioletAzure: `linear-gradient(180deg, ${colors.dark.violet.main}08 0%, ${colors.dark.azure.main}05 100%)`,
            gradientTealViolet: `linear-gradient(180deg, ${colors.dark.teal.main}08 0%, ${colors.dark.violet.main}05 100%)`,
            gradientAzureTeal: `linear-gradient(180deg, ${colors.dark.azure.main}08 0%, ${colors.dark.teal.main}05 100%)`,
            solid: `${colors.dark.slate}4d`,
            violetAzure: `linear-gradient(135deg, ${colors.dark.violet.main} 0%, ${colors.dark.azure.main} 100%)`,
            violetAzureTeal: `linear-gradient(135deg, ${colors.dark.violet.main} 0%, ${colors.dark.azure.main} 50%, ${colors.dark.teal.main} 100%)`,
            violetAzureDark: `linear-gradient(135deg, ${colors.dark.violet.dark} 0%, ${colors.dark.azure.dark} 100%)`,
            violetAzureAlpha: `linear-gradient(135deg, ${colors.dark.violet.main}1a 0%, ${colors.dark.azure.main}1a 100%)`,
            orbViolet: `radial-gradient(circle, ${colors.dark.violet.main}26 0%, transparent 70%)`,
            orbAzure: `radial-gradient(circle, ${colors.dark.azure.main}1f 0%, transparent 70%)`,
            orbAmber: `radial-gradient(circle, ${colors.dark.amber.main}1a 0%, transparent 70%)`,
            orbVioletLight: `radial-gradient(circle, ${colors.dark.violet.main}14 0%, transparent 70%)`,
            orbAzureLight: `radial-gradient(circle, ${colors.dark.azure.main}0f 0%, transparent 70%)`,
            conicSpinner: `conic-gradient(from 0deg, ${colors.dark.violet.main}33, ${colors.dark.azure.main}33, ${colors.dark.teal.main}33, ${colors.dark.amber.main}33, ${colors.dark.violet.main}33)`,
            headerGlow: `radial-gradient(circle at 60% 40%, ${colors.dark.azure.main}2e 0%, ${colors.dark.midnight}f2 70%)`,
          },
        }
      : {
          // Light mode colors
          primary: {
            main: colors.light.teal.main,
            light: colors.light.teal.light,
            dark: colors.light.teal.dark,
          },
          secondary: {
            main: colors.light.violet.main,
            light: colors.light.violet.light,
            dark: colors.light.violet.dark,
          },
          warning: {
            main: colors.light.amber.main,
            light: colors.light.amber.light,
            dark: colors.light.amber.dark,
          },
          info: {
            main: colors.light.azure.main,
            light: colors.light.azure.light,
            dark: colors.light.azure.dark,
          },
          background: {
            default: colors.light.cream,
            paper: colors.light.slate,
          },
          text: {
            primary: colors.light.text.primary,
            secondary: colors.light.text.secondary,
          },
          accent: {
            main: colors.light.azure.main,
            light: colors.light.azure.light,
            dark: colors.light.azure.dark,
            contrastText: '#ffffff',
          },
          accent2: {
            main: colors.light.violet.main,
            light: colors.light.violet.light,
            dark: colors.light.violet.dark,
            contrastText: '#ffffff',
          },
          accent3: {
            main: colors.light.amber.main,
            light: colors.light.amber.light,
            dark: colors.light.amber.dark,
            contrastText: '#ffffff',
          },
          backgrounds: {
            gradientVioletAzure: `linear-gradient(180deg, ${colors.light.violet.main}0a 0%, ${colors.light.azure.main}05 100%)`,
            gradientTealViolet: `linear-gradient(180deg, ${colors.light.teal.main}0a 0%, ${colors.light.violet.main}05 100%)`,
            gradientAzureTeal: `linear-gradient(180deg, ${colors.light.azure.main}0a 0%, ${colors.light.teal.main}05 100%)`,
            solid: colors.light.slate,
            violetAzure: `linear-gradient(135deg, ${colors.light.violet.main} 0%, ${colors.light.azure.main} 100%)`,
            violetAzureTeal: `linear-gradient(135deg, ${colors.light.violet.main} 0%, ${colors.light.azure.main} 50%, ${colors.light.teal.main} 100%)`,
            violetAzureDark: `linear-gradient(135deg, ${colors.light.violet.dark} 0%, ${colors.light.azure.dark} 100%)`,
            violetAzureAlpha: `linear-gradient(135deg, ${colors.light.violet.main}0d 0%, ${colors.light.azure.main}0d 100%)`,
            orbViolet: `radial-gradient(circle, ${colors.light.violet.main}1a 0%, transparent 70%)`,
            orbAzure: `radial-gradient(circle, ${colors.light.azure.main}14 0%, transparent 70%)`,
            orbAmber: `radial-gradient(circle, ${colors.light.amber.main}0f 0%, transparent 70%)`,
            orbVioletLight: `radial-gradient(circle, ${colors.light.violet.main}0d 0%, transparent 70%)`,
            orbAzureLight: `radial-gradient(circle, ${colors.light.azure.main}0a 0%, transparent 70%)`,
            conicSpinner: `conic-gradient(from 0deg, ${colors.light.violet.main}33, ${colors.light.azure.main}33, ${colors.light.teal.main}33, ${colors.light.amber.main}33, ${colors.light.violet.main}33)`,
            headerGlow: `radial-gradient(circle at 60% 40%, ${colors.light.azure.main}2e 0%, ${colors.light.cream}f2 70%)`,
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 600,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '90px',
        },
        body: {
          overflowX: 'hidden',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },
});

