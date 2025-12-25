'use client';

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, alpha, useTheme } from '@mui/material';

interface Competency {
  name: string;
  icon: string;
}

interface CompetencyCardProps {
  title: string;
  competencies: Competency[];
}

export default function CompetencyCard({ title, competencies }: CompetencyCardProps) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        height: '100%',
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        bgcolor: alpha(theme.palette.info.main, 0.05),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <List dense disablePadding>
        {competencies.map((comp, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              mb: 1,
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
              '&:hover .comp-icon': {
                transform: 'scale(1.25) rotate(-8deg)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Box
                component="i"
                className={`${comp.icon} comp-icon`}
                sx={{
                  fontSize: '1.2rem',
                  color: 'primary.main',
                  transition: 'transform 0.3s cubic-bezier(0.4, 2, 0.6, 1)',
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={comp.name}
              primaryTypographyProps={{
                sx: { color: 'text.secondary', fontSize: '0.95rem' },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
