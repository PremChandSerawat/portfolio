'use client';

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, alpha, useTheme } from '@mui/material';

interface Skill {
  name: string;
  icon: string;
  color?: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        bgcolor: alpha(theme.palette.info.main, 0.05),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        transition: 'all 0.3s ease',
        height: '100%',
        minHeight: { xs: 180, md: 220 },
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-5px)',
          bgcolor: alpha(theme.palette.info.main, 0.1),
          borderColor: 'primary.main',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          fontSize: { xs: '1rem', md: '1.25rem' },
          mb: { xs: 1.5, md: 2 },
          pb: 1,
          borderBottom: '2px solid',
          borderColor: 'primary.main',
        }}
      >
        {title}
      </Typography>
      <List dense disablePadding>
        {skills.map((skill, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              mb: { xs: 0.5, md: 1 },
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
              '&:hover .skill-icon': {
                transform: 'scale(1.25) rotate(-8deg)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: { xs: 28, md: 36 } }}>
              <Box
                component="i"
                className={`${skill.icon} skill-icon`}
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: skill.color || theme.palette.warning.main,
                  transition: 'transform 0.3s cubic-bezier(0.4, 2, 0.6, 1)',
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={skill.name}
              primaryTypographyProps={{
                sx: { color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.95rem' } },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
