'use client';

import { Box, Typography, Paper, Button, Chip, Stack, alpha, useTheme } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import ShopIcon from '@mui/icons-material/Shop';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TranslateIcon from '@mui/icons-material/Translate';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

interface ProjectCardProps {
  title: string;
  description: string[];
  link?: string;
  linkText?: string;
  linkIcon?: string;
  isWide?: boolean;
  tags?: string[];
  index?: number;
}

const getProjectIcon = (title: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'QuillBot Flow': <EditNoteIcon sx={{ fontSize: 28 }} />,
    'CMS': <WebIcon sx={{ fontSize: 28 }} />,
    'Paraphrasing Tool': <SpellcheckIcon sx={{ fontSize: 28 }} />,
    'Citation Generator': <FormatQuoteIcon sx={{ fontSize: 28 }} />,
    'Website Internationalization': <TranslateIcon sx={{ fontSize: 28 }} />,
    'Grammar Checker': <SpellcheckIcon sx={{ fontSize: 28 }} />,
    'Big Data Processing': <StorageIcon sx={{ fontSize: 28 }} />,
    'Ascend LOS/LMS': <PhoneAndroidIcon sx={{ fontSize: 28 }} />,
    'AI Chat': <SmartToyIcon sx={{ fontSize: 28 }} />,
  };

  for (const key in iconMap) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return iconMap[key];
    }
  }
  return <CodeIcon sx={{ fontSize: 28 }} />;
};

const getGradient = (index: number, isDark: boolean) => {
  const gradients = [
    { from: '#7c3aed', to: '#3b82f6' },
    { from: '#3b82f6', to: '#0d9488' },
    { from: '#f59e0b', to: '#ef4444' },
    { from: '#10b981', to: '#3b82f6' },
    { from: '#ec4899', to: '#8b5cf6' },
    { from: '#06b6d4', to: '#3b82f6' },
    { from: '#f97316', to: '#eab308' },
    { from: '#8b5cf6', to: '#ec4899' },
    { from: '#14b8a6', to: '#0ea5e9' },
  ];
  return gradients[index % gradients.length];
};

export default function ProjectCard({
  title,
  description,
  link,
  linkText = 'Visit Site',
  linkIcon,
  isWide = false,
  tags = [],
  index = 0,
}: ProjectCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const gradient = getGradient(index, isDark);

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        bgcolor: isDark ? alpha(theme.palette.background.paper, 0.6) : theme.palette.background.paper,
        border: `1px solid ${alpha(theme.palette.text.primary, isDark ? 0.08 : 0.06)}`,
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: 'auto', md: 340 },
        gridColumn: isWide ? { xs: 'span 1', lg: 'span 2' } : 'span 1',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 20px 40px ${alpha(gradient.from, 0.15)}, 0 8px 16px ${alpha(gradient.to, 0.1)}`,
          borderColor: alpha(gradient.from, 0.3),
          '& .project-icon-wrapper': {
            transform: 'scale(1.1) rotate(5deg)',
          },
          '& .gradient-bar': {
            opacity: 1,
            width: '100%',
          },
        },
      }}
    >
      {/* Top gradient bar */}
      <Box
        className="gradient-bar"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 4,
          width: '40%',
          background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
          opacity: 0.7,
          transition: 'all 0.4s ease',
          borderRadius: '4px 4px 0 0',
        }}
      />

      <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header with icon */}
        <Stack direction="row" alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
          <Box
            className="project-icon-wrapper"
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${alpha(gradient.from, isDark ? 0.2 : 0.15)}, ${alpha(gradient.to, isDark ? 0.1 : 0.08)})`,
              border: `1px solid ${alpha(gradient.from, 0.2)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: gradient.from,
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          >
            {getProjectIcon(title)}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.3,
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            {tags.length > 0 && (
              <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                {tags.slice(0, 3).map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.65rem',
                      bgcolor: alpha(gradient.from, 0.1),
                      color: gradient.from,
                      border: 'none',
                      '& .MuiChip-label': { px: 1 },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        </Stack>

        {/* Description */}
        <Box sx={{ flexGrow: 1, mb: 2 }}>
          {description.slice(0, 2).map((para, idx) => (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 1,
                lineHeight: 1.7,
                fontSize: '0.875rem',
                display: '-webkit-box',
                WebkitLineClamp: idx === 0 ? 3 : 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {para}
            </Typography>
          ))}
        </Box>

        {/* Footer with link */}
        {link && (
          <Button
            href={link}
            target="_blank"
            variant="text"
            size="small"
            endIcon={linkIcon?.includes('google-play') ? <ShopIcon /> : <LaunchIcon />}
            sx={{
              alignSelf: 'flex-start',
              color: gradient.from,
              fontWeight: 600,
              textTransform: 'none',
              px: 0,
              '&:hover': {
                bgcolor: 'transparent',
                transform: 'translateX(4px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {linkText}
          </Button>
        )}
      </Box>
    </Paper>
  );
}
