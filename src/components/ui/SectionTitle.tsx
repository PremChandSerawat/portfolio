'use client';

import { Typography, useTheme, SxProps, Theme } from '@mui/material';

interface SectionTitleProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function SectionTitle({ children, sx }: SectionTitleProps) {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        display: 'inline-block',
        position: 'relative',
        color: 'primary.main',
        fontWeight: 700,
        mb: 4,
        transition: 'color 0.4s cubic-bezier(0.4, 2, 0.6, 1)',
        '&:hover': {
          color: 'text.primary',
        },
        '&::after': {
          content: '""',
          display: 'block',
          width: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
          borderRadius: '2px',
          transition: 'width 0.4s cubic-bezier(0.4, 2, 0.6, 1)',
          mt: 1,
        },
        '&:hover::after': {
          width: '100%',
        },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
