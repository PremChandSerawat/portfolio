'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Chip, Stack, alpha, Theme } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Section, SectionTitle, AnimatedElement } from '@/components/ui';
import { companyData } from '@/data/portfolio';

const jobKeys = ['quillbot', 'ascend'] as const;

const getCompanyData = (companyKey: string) => {
  const key = companyKey === 'quillbot' ? 'QuillBot' : 'Ascend';
  return companyData[key] || { color: '#3b82f6', skills: [] };
};

export default function Experience() {
  const t = useTranslations('experience');

  const stats = [
    { value: '6+', labelKey: 'yearsExperience', icon: '⏱️' },
    { value: '2', labelKey: 'companies', icon: '🏢' },
    { value: '10+', labelKey: 'productsBuilt', icon: '🚀' },
    { value: '5+', labelKey: 'aiProducts', icon: '🤖' },
    { value: '3+', labelKey: 'certifications', icon: '🎓' },
  ];

  return (
    <Section id="experience" bg="solid">
      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <SectionTitle>{t('title')}</SectionTitle>
      </AnimatedElement>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {jobKeys.map((jobKey, index) => {
          const data = getCompanyData(jobKey);
          const responsibilities = t.raw(`jobs.${jobKey}.responsibilities`) as string[];
          
          return (
            <AnimatedElement
              key={index}
              variant={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
              staggerIndex={index}
              staggerDelay={0.15}
              delay={0.1}
            >
              <Box
                sx={(theme: Theme) => {
                  const isDark = theme.palette.mode === 'dark';
                  return {
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: { xs: 3, md: 4 },
                    bgcolor: isDark 
                      ? alpha(theme.palette.background.paper, 0.5) 
                      : theme.palette.background.paper,
                    border: `1px solid ${alpha(data.color, 0.2)}`,
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 16px 40px ${alpha(data.color, 0.15)}`,
                      borderColor: alpha(data.color, 0.4),
                    },
                  };
                }}
              >
                {/* Top accent */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${data.color}, ${alpha(data.color, 0.5)})`,
                  }}
                />

                {/* Header */}
                <Stack direction="column" spacing={1} sx={{ mb: 2 }}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        mb: 0.5,
                      }}
                    >
                      {t(`jobs.${jobKey}.title`)}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <BusinessIcon sx={{ fontSize: { xs: 14, md: 16 }, color: data.color }} />
                        <Typography sx={{ color: data.color, fontWeight: 600, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                          {t(`jobs.${jobKey}.company`)}
                        </Typography>
                      </Stack>
                      <Chip
                        icon={<CalendarTodayIcon sx={{ fontSize: '12px !important' }} />}
                        label={t(`jobs.${jobKey}.period`)}
                        size="small"
                        sx={{
                          bgcolor: alpha(data.color, 0.1),
                          color: data.color,
                          fontWeight: 500,
                          fontSize: { xs: '0.65rem', md: '0.75rem' },
                          height: { xs: 22, md: 24 },
                          '& .MuiChip-icon': { color: data.color },
                        }}
                      />
                    </Stack>
                  </Box>
                </Stack>

                {/* Skills */}
                <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5} sx={{ mb: { xs: 2, md: 3 }, display: { xs: 'none', sm: 'flex' } }}>
                  {data.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={(theme: Theme) => ({
                        height: { xs: 20, md: 24 },
                        fontSize: { xs: '0.65rem', md: '0.7rem' },
                        fontWeight: 600,
                        bgcolor: 'transparent',
                        color: 'text.secondary',
                        border: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,
                      })}
                    />
                  ))}
                </Stack>

                {/* Key Points */}
                <Box sx={{ mb: { xs: 2, md: 3 } }}>
                  {responsibilities.slice(0, 3).map((resp, idx) => (
                    <Stack key={idx} direction="row" spacing={1} alignItems="flex-start" sx={{ mb: { xs: 1, md: 1.5 } }}>
                      <ArrowOutwardIcon 
                        sx={{ 
                          fontSize: { xs: 12, md: 14 }, 
                          color: data.color, 
                          mt: 0.5,
                          flexShrink: 0,
                        }} 
                      />
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: 'text.secondary', 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                        }}
                      >
                        {resp}
                      </Typography>
                    </Stack>
                  ))}
                </Box>

                {/* Achievement highlight */}
                <Box
                  sx={(theme: Theme) => {
                    const isDark = theme.palette.mode === 'dark';
                    return {
                      p: { xs: 1.5, md: 2 },
                      borderRadius: 2,
                      bgcolor: alpha(data.color, isDark ? 0.1 : 0.05),
                      borderLeft: `3px solid ${data.color}`,
                    };
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: 'text.secondary', 
                      fontStyle: 'italic',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    &quot;{t(`jobs.${jobKey}.achievements`)}&quot;
                  </Typography>
                </Box>
              </Box>
            </AnimatedElement>
          );
        })}
      </Box>

      {/* Career Highlights */}
      <AnimatedElement variant="fadeInUp" delay={0.4}>
        <Box
          sx={(theme: Theme) => ({
            mt: { xs: 4, md: 6 },
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 3, md: 4 },
            background: theme.palette.backgrounds.violetAzureAlpha,
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
            position: 'relative',
            overflow: 'hidden',
          })}
        >
          {/* Decorative element */}
          <Box
            sx={(theme: Theme) => ({
              position: 'absolute',
              top: -50,
              right: -50,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: theme.palette.backgrounds.orbViolet,
              filter: 'blur(40px)',
              display: { xs: 'none', md: 'block' },
            })}
          />
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
              gap: { xs: 1.5, md: 2 },
              position: 'relative',
              zIndex: 1,
            }}
          >
            {stats.map((stat, index) => (
              <AnimatedElement
                key={index}
                variant="bounceIn"
                staggerIndex={index}
                staggerDelay={0.1}
                delay={0.5}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0.5, sm: 1 }}
                  alignItems="center"
                  justifyContent="center"
                  sx={(theme: Theme) => {
                    const isDark = theme.palette.mode === 'dark';
                    return {
                      px: { xs: 1, sm: 2 },
                      py: { xs: 1.5, sm: 1.5 },
                      borderRadius: 2,
                      bgcolor: isDark ? alpha('#fff', 0.05) : alpha('#fff', 0.8),
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      },
                    };
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{stat.icon}</Typography>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography
                      sx={(theme: Theme) => ({
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                        fontWeight: 800,
                        lineHeight: 1,
                        background: theme.palette.backgrounds.violetAzure,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      })}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ 
                        color: 'text.secondary', 
                        fontWeight: 500,
                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.75rem' },
                        display: 'block',
                      }}
                    >
                      {t(`stats.${stat.labelKey}`)}
                    </Typography>
                  </Box>
                </Stack>
              </AnimatedElement>
            ))}
          </Box>
        </Box>
      </AnimatedElement>
    </Section>
  );
}
