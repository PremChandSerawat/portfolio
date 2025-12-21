'use client';

import { Box, Container, SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export type BackgroundVariant = 
  | 'gradientVioletAzure' 
  | 'gradientTealViolet' 
  | 'gradientAzureTeal' 
  | 'solid'
  | 'violetAzure'
  | 'violetAzureTeal'
  | 'violetAzureDark'
  | 'violetAzureAlpha'
  | 'orbViolet'
  | 'orbAzure'
  | 'orbAmber'
  | 'orbVioletLight'
  | 'orbAzureLight'
  | 'conicSpinner'
  | 'headerGlow';

export interface SectionProps {
  id?: string;
  children: ReactNode;
  bg?: BackgroundVariant;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disableContainer?: boolean;
  py?: { xs: number; md: number } | number | string;
  scrollMarginTop?: string;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
}

export default function Section({
  id,
  children,
  bg = 'solid',
  maxWidth = 'lg',
  disableContainer = false,
  py = { xs: 8, md: 15 },
  scrollMarginTop = '90px',
  sx,
  containerSx,
}: SectionProps) {
  const theme = useTheme();
  const background = theme.palette.backgrounds[bg];

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py,
        scrollMarginTop,
        position: 'relative',
        overflow: 'hidden',
        background,
        ...sx,
      }}
    >
      {disableContainer ? (
        children
      ) : (
        <Container
          maxWidth={maxWidth}
          sx={{
            position: 'relative',
            zIndex: 1,
            ...containerSx,
          }}
        >
          {children}
        </Container>
      )}
    </Box>
  );
}
