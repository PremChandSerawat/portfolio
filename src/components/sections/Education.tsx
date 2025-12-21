'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Paper, Chip, Stack, alpha, Theme, Link as MuiLink } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Section, SectionTitle, AnimatedElement } from '@/components/ui';
import { certificationLinks } from '@/data/portfolio';

const colorKeys = ['primary', 'secondary', 'info'] as const;
const degreeKeys = ['aiDiploma', 'dsMlCert', 'btech'] as const;
const certificationKeys = ['deepLearning', 'aiAgents', 'neuralNetworks', 'improvingDnn', 'structuringMl', 'cnn', 'sequenceModels'] as const;

export default function Education() {
  const t = useTranslations('education');

  return (
    <Section id="education" bg="gradientAzureTeal">
      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <SectionTitle>{t('title')}</SectionTitle>
      </AnimatedElement>

      {/* Education Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 4,
        }}
      >
        {degreeKeys.map((degreeKey, index) => {
          const colorKey = colorKeys[index % colorKeys.length];
          return (
            <AnimatedElement
              key={index}
              variant="flipInY"
              staggerIndex={index}
              staggerDelay={0.15}
              delay={0.1}
            >
              <Paper
                elevation={0}
                sx={(theme: Theme) => {
                  const isDark = theme.palette.mode === 'dark';
                  const color = theme.palette[colorKey].main;
                  // Different animation delays for each card
                  const floatDelay = `${index * 0.5}s`;
                  return {
                    p: { xs: 3, md: 3 },
                    borderRadius: 3,
                    bgcolor: isDark
                      ? alpha(color, 0.05)
                      : alpha(color, 0.03),
                    border: `1px solid ${alpha(color, 0.15)}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    animation: `floatCard${index} 4s ease-in-out infinite`,
                    animationDelay: floatDelay,
                    '&:hover': {
                      borderColor: color,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 24px ${alpha(color, 0.15)}`,
                      animationPlayState: 'paused',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.5)})`,
                    },
                    // Gentle float animation for cards
                    '@keyframes floatCard0': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-6px)' },
                    },
                    '@keyframes floatCard1': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '25%': { transform: 'translateY(-5px)' },
                      '75%': { transform: 'translateY(3px)' },
                    },
                    '@keyframes floatCard2': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '33%': { transform: 'translateY(-4px)' },
                      '66%': { transform: 'translateY(2px)' },
                    },
                  };
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={(theme: Theme) => {
                      const color = theme.palette[colorKey].main;
                      const pulseDelay = `${index * 0.3}s`;
                      return {
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${color}, ${alpha(color, 0.7)})`,
                        boxShadow: `0 4px 12px ${alpha(color, 0.3)}`,
                        flexShrink: 0,
                        animation: 'iconPulse 3s ease-in-out infinite',
                        animationDelay: pulseDelay,
                        '@keyframes iconPulse': {
                          '0%, 100%': { transform: 'scale(1)', boxShadow: `0 4px 12px ${alpha(color, 0.3)}` },
                          '50%': { transform: 'scale(1.08)', boxShadow: `0 6px 20px ${alpha(color, 0.5)}` },
                        },
                      };
                    }}
                  >
                    {index === 0 ? (
                      <WorkspacePremiumIcon sx={{ color: '#fff', fontSize: 24 }} />
                    ) : (
                      <SchoolIcon sx={{ color: '#fff', fontSize: 24 }} />
                    )}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.3,
                        mb: 0.5,
                      }}
                    >
                      {t(`degrees.${degreeKey}.degree`)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 1.5 }}
                    >
                      {t(`degrees.${degreeKey}.institution`)}
                    </Typography>
                    <Chip
                      label={t(`degrees.${degreeKey}.period`)}
                      size="small"
                      sx={(theme: Theme) => {
                        const color = theme.palette[colorKey].main;
                        return {
                          bgcolor: alpha(color, 0.1),
                          color: color,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        };
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </AnimatedElement>
          );
        })}
      </Box>

      {/* Certifications */}
      <AnimatedElement variant="fadeInUp" delay={0.4}>
        <Paper
          elevation={0}
          sx={(theme: Theme) => {
            const isDark = theme.palette.mode === 'dark';
            return {
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: isDark
                ? alpha(theme.palette.warning.main, 0.05)
                : alpha(theme.palette.warning.main, 0.03),
              border: `1px solid ${alpha(theme.palette.warning.main, 0.15)}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'warning.main',
              },
            };
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Box
              sx={(theme: Theme) => ({
                width: 40,
                height: 40,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${alpha(theme.palette.warning.main, 0.7)})`,
                animation: 'headerIconPulse 2.5s ease-in-out infinite',
                '@keyframes headerIconPulse': {
                  '0%, 100%': { transform: 'scale(1)', boxShadow: `0 4px 12px ${alpha(theme.palette.warning.main, 0.3)}` },
                  '50%': { transform: 'scale(1.1)', boxShadow: `0 6px 20px ${alpha(theme.palette.warning.main, 0.5)}` },
                },
              })}
            >
              <VerifiedIcon sx={{ color: '#fff', fontSize: 22 }} />
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
              {t('professionalCertifications')}
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {certificationKeys.map((certKey, index) => (
              <AnimatedElement
                key={index}
                variant="scaleIn"
                staggerIndex={index}
                staggerDelay={0.1}
                delay={0.5}
              >
                <MuiLink
                  href={certificationLinks[certKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={(theme: Theme) => {
                    const isDark = theme.palette.mode === 'dark';
                    // Staggered animation delays
                    const shimmerDelay = `${index * 0.4}s`;
                    return {
                      p: 2,
                      borderRadius: 2,
                      bgcolor: isDark
                        ? alpha(theme.palette.background.paper, 0.5)
                        : alpha(theme.palette.background.paper, 1),
                      border: `1px solid ${alpha(theme.palette.warning.main, 0.1)}`,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      animation: 'certFloat 3.5s ease-in-out infinite',
                      animationDelay: shimmerDelay,
                      '&:hover': {
                        borderColor: theme.palette.warning.main,
                        bgcolor: isDark
                          ? alpha(theme.palette.warning.main, 0.08)
                          : alpha(theme.palette.warning.main, 0.05),
                        transform: 'translateY(-2px)',
                        animationPlayState: 'paused',
                      },
                      '@keyframes certFloat': {
                        '0%, 100%': { transform: 'translateY(0) scale(1)' },
                        '50%': { transform: 'translateY(-4px) scale(1.01)' },
                      },
                    };
                  }}
                >
                  <VerifiedIcon
                    sx={{
                      color: 'warning.main',
                      fontSize: 20,
                      mt: 0.25,
                      flexShrink: 0,
                      animation: 'badgeBounce 2s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`,
                      '@keyframes badgeBounce': {
                        '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
                        '25%': { transform: 'scale(1.15) rotate(-5deg)' },
                        '50%': { transform: 'scale(1) rotate(0deg)' },
                        '75%': { transform: 'scale(1.1) rotate(5deg)' },
                      },
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.4, mb: 0.5 }}
                    >
                      {t(`certifications.${certKey}.name`)}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', display: 'block' }}
                    >
                      {t(`certifications.${certKey}.provider`)}
                    </Typography>
                  </Box>
                  <OpenInNewIcon
                    sx={{
                      color: 'warning.main',
                      fontSize: 16,
                      opacity: 0.7,
                      flexShrink: 0,
                    }}
                  />
                </MuiLink>
              </AnimatedElement>
            ))}
          </Box>
        </Paper>
      </AnimatedElement>
    </Section>
  );
}
