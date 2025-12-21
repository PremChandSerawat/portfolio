import '@mui/material/styles';

// Extend the MUI theme palette with custom properties
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    accent2: Palette['primary'];
    accent3: Palette['primary'];
    backgrounds: {
      gradientVioletAzure: string;
      gradientTealViolet: string;
      gradientAzureTeal: string;
      solid: string;
      violetAzure: string;
      violetAzureTeal: string;
      violetAzureDark: string;
      violetAzureAlpha: string;
      orbViolet: string;
      orbAzure: string;
      orbAmber: string;
      orbVioletLight: string;
      orbAzureLight: string;
      conicSpinner: string;
      headerGlow: string;
    };
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    accent2?: PaletteOptions['primary'];
    accent3?: PaletteOptions['primary'];
    backgrounds?: {
      gradientVioletAzure: string;
      gradientTealViolet: string;
      gradientAzureTeal: string;
      solid: string;
      violetAzure: string;
      violetAzureTeal: string;
      violetAzureDark: string;
      violetAzureAlpha: string;
      orbViolet: string;
      orbAzure: string;
      orbAmber: string;
      orbVioletLight: string;
      orbAzureLight: string;
      conicSpinner: string;
      headerGlow: string;
    };
  }
}

