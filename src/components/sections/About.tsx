'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Paper, Stack, alpha, Theme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Section, SectionTitle, AnimatedElement } from '@/components/ui';

const highlightIcons = [CodeIcon, PsychologyIcon, CloudIcon, AutoAwesomeIcon, TrendingUpIcon];
const highlightKeys = ['fullStackExpert', 'agenticAi', 'cloudNative', 'aiMlDriven', 'dataEngineering'] as const;
const highlightColors = ['#3b82f6', '#ec4899', '#7c3aed', '#f59e0b', '#10b981'];

const valueKeys = ['cleanCode', 'teamwork', 'learning', 'innovation'] as const;
const valueIcons = ['🎯', '🤝', '📚', '💡'];

export default function About() {
  const t = useTranslations('about');

  return (
    <Section id="about" bg="gradientVioletAzure">
      {/* Background decorative elements */}
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 400,
          height: 400,
          background: theme.palette.backgrounds.orbViolet,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        })}
      />
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 300,
          height: 300,
          background: theme.palette.backgrounds.orbAzureLight,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        })}
      />

      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <SectionTitle>{t('title')}</SectionTitle>
      </AnimatedElement>

      {/* Intro Section */}
      <AnimatedElement variant="fadeInUp" delay={0.05} duration={0.4}>
        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600, 
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.85rem',
            }}
          >
            {t('subtitle')}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            {t('introParagraph')}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {t('secondParagraph')}
          </Typography>

          {/* Values pills */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {valueKeys.map((key, index) => (
              <Box
                key={index}
                sx={(theme: Theme) => {
                  const isDark = theme.palette.mode === 'dark';
                  return {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    background: alpha(theme.palette.primary.main, isDark ? 0.1 : 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    fontSize: '0.85rem',
                    color: 'text.primary',
                    fontWeight: 500,
                  };
                }}
              >
                <span>{valueIcons[index]}</span>
                {t(`values.${key}`)}
              </Box>
            ))}
          </Box>
        </Box>
      </AnimatedElement>

      {/* Highlight Cards - 2x3 Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: { xs: 2, md: 2.5 },
          mt: { xs: 4, md: 5 },
        }}
      >
        {highlightKeys.map((key, index) => {
          const IconComponent = highlightIcons[index];
          const color = highlightColors[index];
          return (
            <AnimatedElement
              key={index}
              variant="fadeInUp"
              staggerIndex={index}
              staggerDelay={0.04}
              delay={0.1}
            >
              <Paper
                elevation={0}
                sx={(theme: Theme) => {
                  const isDark = theme.palette.mode === 'dark';
                  return {
                    p: { xs: 2, md: 2.5 },
                    borderRadius: 3,
                    background: isDark
                      ? alpha(theme.palette.background.paper, 0.5)
                      : theme.palette.background.paper,
                    border: `1px solid ${alpha(color, isDark ? 0.2 : 0.15)}`,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    height: '100%',
                    boxShadow: isDark ? 'none' : `0 4px 20px ${alpha(color, 0.08)}`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: alpha(color, 0.4),
                      boxShadow: `0 8px 30px ${alpha(color, isDark ? 0.15 : 0.12)}`,
                      '& .highlight-icon': {
                        transform: 'scale(1.1)',
                      },
                    },
                  };
                }}
              >
                <Box
                  className="highlight-icon"
                  sx={(theme: Theme) => {
                    const isDark = theme.palette.mode === 'dark';
                    return {
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: alpha(color, isDark ? 0.15 : 0.1),
                      transition: 'transform 0.3s ease',
                      mb: 1.5,
                    };
                  }}
                >
                  <IconComponent sx={{ color: color, fontSize: 24 }} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    fontSize: '0.95rem',
                    lineHeight: 1.3,
                    mb: 0.75,
                  }}
                >
                  {t(`highlights.${key}.title`)}
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: '0.85rem',
                  }}
                >
                  {t(`highlights.${key}.description`)}
                </Typography>
              </Paper>
            </AnimatedElement>
          );
        })}
      </Box>

      {/* Bottom stats/CTA row */}
      <Box
        sx={{
          mt: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* CTA Banner */}
        <AnimatedElement variant="fadeInUp" delay={0.1}>
          <Box
            sx={(theme: Theme) => {
              const isDark = theme.palette.mode === 'dark';
              return {
                p: { xs: 2.5, md: 3 },
                mb: 3,
                borderRadius: 3,
                background: theme.palette.backgrounds.violetAzureAlpha,
                border: `1px solid ${alpha(theme.palette.secondary.main, isDark ? 0.2 : 0.15)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              };
            }}
          >
            <Box
              sx={(theme: Theme) => ({
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.palette.backgrounds.violetAzure,
                boxShadow: `0 4px 15px ${alpha(theme.palette.secondary.main, 0.3)}`,
              })}
            >
              <GroupsIcon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.15rem' },
                letterSpacing: '-0.01em',
              }}
            >
              {t('openToOpportunities')}
            </Typography>
            <Box
              sx={(theme: Theme) => {
                const isDark = theme.palette.mode === 'dark';
                return {
                  ml: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  background: alpha(theme.palette.primary.main, isDark ? 0.15 : 0.1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                };
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {t('hiring')}
              </Typography>
            </Box>
          </Box>
        </AnimatedElement>

        {/* Stats Grid */}
        <StatsGrid />
      </Box>
    </Section>
  );
}

function StatsGrid() {
  const t = useTranslations('about.stats');
  
  const stats = [
    { 
      icon: <RocketLaunchIcon />, 
      value: '10+', 
      labelKey: 'productsBuilt',
      colorKey: 'primary',
      gradient: 'linear-gradient(135deg, #64ffda, #00bcd4)',
    },
    { 
      icon: <CodeIcon />, 
      value: '50K+', 
      labelKey: 'linesOfCode',
      colorKey: 'warning',
      gradient: 'linear-gradient(135deg, #fbbf24, #ff5722)',
    },
    { 
      icon: <AutoAwesomeIcon />, 
      value: '5+', 
      labelKey: 'aiProjects',
      colorKey: 'secondary',
      gradient: 'linear-gradient(135deg, #a78bfa, #e91e63)',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 2,
      }}
    >
      {stats.map((stat, index) => (
        <AnimatedElement
          key={index}
          variant="scaleIn"
          staggerIndex={index}
          staggerDelay={0.06}
          delay={0.15}
        >
          <Paper
            elevation={0}
            sx={(theme: Theme) => {
              const isDark = theme.palette.mode === 'dark';
              const color = theme.palette[stat.colorKey as 'primary' | 'warning' | 'secondary'].main;
              return {
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                background: isDark
                  ? alpha(theme.palette.background.paper, 0.5)
                  : theme.palette.background.paper,
                border: `1px solid ${alpha(color, isDark ? 0.2 : 0.15)}`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
                boxShadow: isDark
                  ? 'none'
                  : `0 4px 20px ${alpha(color, 0.08)}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: alpha(color, 0.4),
                  boxShadow: `0 8px 30px ${alpha(color, isDark ? 0.2 : 0.15)}`,
                  '& .stat-icon': {
                    transform: 'scale(1.1) rotate(-10deg)',
                  },
                  '& .stat-value': {
                    transform: 'scale(1.05)',
                  },
                },
              };
            }}
          >
            {/* Decorative corner */}
            <Box
              sx={(theme: Theme) => {
                const color = theme.palette[stat.colorKey as 'primary' | 'warning' | 'secondary'].main;
                return {
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 50,
                  height: 50,
                  background: `linear-gradient(225deg, ${alpha(color, 0.15)} 0%, transparent 60%)`,
                  borderRadius: '0 0 0 100%',
                };
              }}
            />

            <Box
              className="stat-icon"
              sx={(theme: Theme) => {
                const color = theme.palette[stat.colorKey as 'primary' | 'warning' | 'secondary'].main;
                return {
                  width: 48,
                  height: 48,
                  mx: 'auto',
                  mb: 1.5,
                  borderRadius: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: stat.gradient,
                  boxShadow: `0 6px 20px ${alpha(color, 0.35)}`,
                  transition: 'transform 0.3s ease',
                  '& svg': {
                    color: 'white',
                    fontSize: 26,
                  },
                };
              }}
            >
              {stat.icon}
            </Box>

            <Typography
              className="stat-value"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                lineHeight: 1,
                background: stat.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'transform 0.3s ease',
              }}
            >
              {stat.value}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mt: 0.5,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
              }}
            >
              {t(stat.labelKey)}
            </Typography>
          </Paper>
        </AnimatedElement>
      ))}
    </Box>
  );
}
