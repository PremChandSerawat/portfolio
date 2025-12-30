'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Button, Stack, IconButton, Chip, alpha, Theme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { personalInfo } from '@/data/portfolio';
import Section from '@/components/ui/Section';
import AnimatedElement from '@/components/ui/AnimatedElement';

export default function Hero() {
  const t = useTranslations('hero');
  const tPersonal = useTranslations('personal');

  return (
    <Section
      id="hero"
      bg="gradientVioletAzure"
      py={{ xs: 8, md: 0 }}
      scrollMarginTop="0px"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Floating orbs background */}
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: theme.palette.backgrounds.orbViolet,
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(-30px) scale(1.05)' },
          },
        })}
      />
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: '50%',
          background: theme.palette.backgrounds.orbAzure,
          filter: 'blur(50px)',
          animation: 'float2 10s ease-in-out infinite',
          '@keyframes float2': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(20px) scale(0.95)' },
          },
        })}
      />
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: { xs: 100, md: 200 },
          height: { xs: 100, md: 200 },
          borderRadius: '50%',
          background: theme.palette.backgrounds.orbAmber,
          filter: 'blur(40px)',
          animation: 'float3 12s ease-in-out infinite',
          '@keyframes float3': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '33%': { transform: 'translate(-20px, 20px)' },
            '66%': { transform: 'translate(20px, -10px)' },
          },
        })}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 4, lg: 8 },
        }}
      >
        {/* Left content */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' } }}>
          {/* Status chip */}
          <AnimatedElement variant="fadeInDown" delay={0.1} duration={0.4} triggerOnce>
            <Chip
              label={t('availableStatus')}
              sx={(theme: Theme) => ({
                mb: 3,
                bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.15 : 0.1),
                color: 'primary.main',
                fontWeight: 500,
                fontSize: '0.85rem',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                '& .MuiChip-label': { px: 2 },
                animation: 'chipPulse 2s ease-in-out infinite',
                '@keyframes chipPulse': {
                  '0%, 100%': { 
                    boxShadow: `0 0 0 0 ${alpha(theme.palette.primary.main, 0.4)}`,
                    transform: 'scale(1)',
                  },
                  '50%': { 
                    boxShadow: `0 0 0 8px ${alpha(theme.palette.primary.main, 0)}`,
                    transform: 'scale(1.02)',
                  },
                },
              })}
            />
          </AnimatedElement>

          {/* Main heading */}
          <AnimatedElement variant="fadeInUp" delay={0.15} duration={0.4} triggerOnce>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                color: 'text.primary',
              }}
            >
              {t('greeting')}{' '}
              <Box
                component="span"
                sx={(theme: Theme) => ({
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.info.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundSize: '300% 100%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline',
                  animation: 'shimmerName 4s ease-in-out infinite',
                  '@keyframes shimmerName': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                })}
              >
                {tPersonal('firstName')}
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  animation: 'wave 2s ease-in-out infinite',
                  transformOrigin: '70% 70%',
                  ml: 2,
                  '@keyframes wave': {
                    '0%, 60%, 100%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                  },
                }}
              >
                👋
              </Box>
            </Typography>
          </AnimatedElement>

          {/* Role */}
          <AnimatedElement variant="fadeInUp" delay={0.2} duration={0.4} triggerOnce>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
                color: 'text.secondary',
                mb: 3,
              }}
            >
              {tPersonal('title')} •{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                {tPersonal('experience')}
              </Box>
              {' '}{t('experienceLabel')}
            </Typography>
          </AnimatedElement>

          {/* Tagline */}
          <AnimatedElement variant="fadeInUp" delay={0.25} duration={0.4} triggerOnce>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                color: 'text.secondary',
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 600,
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              {t('tagline.prefix')}{' '}
              <Box
                component="span"
                sx={(theme: Theme) => ({
                  color: 'secondary.main',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${alpha(theme.palette.secondary.main, 0.3)}, ${theme.palette.secondary.main})`,
                    backgroundSize: '200% 100%',
                    borderRadius: 2,
                    animation: 'underlineShimmer1 2.5s ease-in-out infinite',
                  },
                  '@keyframes underlineShimmer1': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                })}
              >
                {t('tagline.scalableWebApps')}
              </Box>
              ,{' '}
              <Box
                component="span"
                sx={(theme: Theme) => ({
                  color: 'info.main',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.info.main}, ${alpha(theme.palette.info.main, 0.3)}, ${theme.palette.info.main})`,
                    backgroundSize: '200% 100%',
                    borderRadius: 2,
                    animation: 'underlineShimmer2 2.5s ease-in-out infinite',
                    animationDelay: '0.8s',
                  },
                  '@keyframes underlineShimmer2': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                })}
              >
                {t('tagline.saasProducts')}
              </Box>
              , {t('tagline.and')}{' '}
              <Box
                component="span"
                sx={(theme: Theme) => ({
                  color: 'warning.main',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.warning.main}, ${alpha(theme.palette.warning.main, 0.3)}, ${theme.palette.warning.main})`,
                    backgroundSize: '200% 100%',
                    borderRadius: 2,
                    animation: 'underlineShimmer3 2.5s ease-in-out infinite',
                    animationDelay: '1.6s',
                  },
                  '@keyframes underlineShimmer3': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                })}
              >
                {t('tagline.delightfulExperiences')}
              </Box>
              .
            </Typography>
          </AnimatedElement>

          {/* CTA Buttons */}
          <AnimatedElement variant="fadeInUp" delay={0.3} duration={0.4} triggerOnce>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4, justifyContent: { xs: 'center', lg: 'flex-start' } }}
            >
              <Button
                href="#contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon sx={{ animation: 'arrowBounce 1.5s ease-in-out infinite' }} />}
                sx={(theme: Theme) => ({
                  background: theme.palette.backgrounds.violetAzure,
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: 3,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.4)}`,
                  transition: 'all 0.3s ease',
                  animation: 'buttonGlow 3s ease-in-out infinite',
                  '@keyframes buttonGlow': {
                    '0%, 100%': { 
                      boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.4)}`,
                    },
                    '50%': { 
                      boxShadow: `0 8px 32px ${alpha(theme.palette.secondary.main, 0.6)}, 0 0 20px ${alpha(theme.palette.secondary.main, 0.3)}`,
                    },
                  },
                  '@keyframes arrowBounce': {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(4px)' },
                  },
                  '&:hover': {
                    background: theme.palette.backgrounds.violetAzureDark,
                    boxShadow: `0 12px 32px ${alpha(theme.palette.secondary.main, 0.5)}`,
                    transform: 'translateY(-2px)',
                    animation: 'none',
                  },
                })}
              >
                {t('cta.getInTouch')}
              </Button>
              <Button
                href="#projects"
                variant="outlined"
                size="large"
                sx={(theme: Theme) => {
                  const isDark = theme.palette.mode === 'dark';
                  return {
                    color: isDark ? 'text.primary' : 'secondary.main',
                    borderColor: isDark ? alpha(theme.palette.text.primary, 0.3) : theme.palette.secondary.main,
                    borderWidth: 2,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      bgcolor: alpha(theme.palette.secondary.main, 0.1),
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                    },
                  };
                }}
              >
                {t('cta.viewProjects')}
              </Button>
            </Stack>
          </AnimatedElement>

          {/* Social links */}
          <AnimatedElement variant="fadeInUp" delay={0.35} duration={0.4} triggerOnce>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
            >
              {[
                { icon: <GitHubIcon />, href: personalInfo.github, colorKey: 'text.primary' },
                { icon: <LinkedInIcon />, href: personalInfo.linkedin, color: '#0A66C2' },
                { icon: <XIcon />, href: personalInfo.twitter, colorKey: 'text.primary' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  sx={(theme: Theme) => ({
                    color: 'text.secondary',
                    bgcolor: alpha(theme.palette.text.primary, 0.05),
                    border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
                    transition: 'all 0.3s ease',
                    animation: 'socialBounce 3s ease-in-out infinite',
                    animationDelay: `${index * 0.3}s`,
                    '@keyframes socialBounce': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-4px)' },
                    },
                    '&:hover': {
                      color: social.color || theme.palette.text.primary,
                      bgcolor: alpha(social.color || theme.palette.text.primary, 0.1),
                      borderColor: alpha(social.color || theme.palette.text.primary, 0.3),
                      transform: 'translateY(-3px)',
                      animation: 'none',
                    },
                  })}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </AnimatedElement>

        </Box>

        {/* Visual element - Skills Marquee */}
        <AnimatedElement
          variant="fadeInUp"
          delay={0.2}
          duration={0.5}
          triggerOnce
          sx={{
            flex: { xs: 'none', lg: 1 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            mt: { xs: 4, lg: 0 },
            width: { xs: '100%', lg: 'auto' },
            maxWidth: { xs: 340, sm: 400, lg: 480 },
            gap: 2,
          }}
        >
          {/* Skills Marquee Display */}
          <TechMarquee />

          {/* Center experience badge */}
          <Box
            sx={(theme: Theme) => ({
              mt: 3,
              px: 4,
              py: 2,
              borderRadius: 3,
              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.9) : 'background.paper',
              boxShadow: `0 8px 32px ${alpha(theme.palette.secondary.main, 0.15)}`,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
            })}
          >
            <Typography
              sx={(theme: Theme) => ({
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 800,
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
              })}
            >
              6+
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  fontWeight: 600,
                  color: 'text.primary',
                  lineHeight: 1.2,
                }}
              >
                {t('yearsExp')}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem' },
                  color: 'text.secondary',
                }}
              >
                Full Stack & AI
              </Typography>
            </Box>
          </Box>
        </AnimatedElement>
      </Box>
    </Section>
  );
}

function TechMarquee() {
  const t = useTranslations('hero.techBadges');

  // All 16 skills split into 3 rows
  const row1 = [
    { labelKey: 'react', color: '#61DAFB' },
    { labelKey: 'nextjs', colorKey: 'dynamic' },
    { labelKey: 'typescript', color: '#3178C6' },
    { labelKey: 'nodejs', color: '#339933' },
    { labelKey: 'python', color: '#3776AB' },
    { labelKey: 'fastapi', color: '#009688' },
  ];

  const row2 = [
    { labelKey: 'openai', color: '#10a37f' },
    { labelKey: 'langchain', color: '#2dd4bf' },
    { labelKey: 'rag', color: '#8b5cf6' },
    { labelKey: 'aws', color: '#FF9900' },
    { labelKey: 'docker', color: '#2496ED' },
  ];

  const row3 = [
    { labelKey: 'gcp', color: '#4285F4' },
    { labelKey: 'postgresql', color: '#336791' },
    { labelKey: 'mongodb', color: '#47A248' },
    { labelKey: 'redis', color: '#d82c20' },
    { labelKey: 'kubernetes', color: '#326ce5' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      {/* Row 1 - scrolls left */}
      <MarqueeRow skills={row1} direction="left" duration={20} t={t} />
      
      {/* Row 2 - scrolls right */}
      <MarqueeRow skills={row2} direction="right" duration={25} t={t} />
      
      {/* Row 3 - scrolls left (slower) */}
      <MarqueeRow skills={row3} direction="left" duration={22} t={t} />
    </Box>
  );
}

interface MarqueeRowProps {
  skills: Array<{ labelKey: string; color?: string; colorKey?: string }>;
  direction: 'left' | 'right';
  duration: number;
  t: (key: string) => string;
}

function MarqueeRow({ skills, direction, duration, t }: MarqueeRowProps) {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        py: 1,
        animation: `marquee${direction === 'left' ? 'Left' : 'Right'} ${duration}s linear infinite`,
        '&:hover': {
          animationPlayState: 'paused',
        },
        '@keyframes marqueeLeft': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        '@keyframes marqueeRight': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }}
    >
      {duplicatedSkills.map((skill, index) => (
        <SkillChip key={`${skill.labelKey}-${index}`} skill={skill} t={t} />
      ))}
    </Box>
  );
}

interface SkillChipProps {
  skill: { labelKey: string; color?: string; colorKey?: string };
  t: (key: string) => string;
}

function SkillChip({ skill, t }: SkillChipProps) {
  return (
    <Box
      sx={(theme: Theme) => {
        const isDark = theme.palette.mode === 'dark';
        const skillColor = skill.colorKey === 'dynamic' ? (isDark ? '#fff' : '#000') : skill.color;

        return {
          flexShrink: 0,
          px: { xs: 1.5, sm: 2 },
          py: { xs: 0.75, sm: 1 },
          bgcolor: isDark ? alpha(theme.palette.background.paper, 0.9) : 'background.paper',
          borderRadius: 2,
          boxShadow: `0 2px 12px ${alpha(theme.palette.text.primary, 0.08)}`,
          border: `1px solid ${alpha(skillColor!, 0.25)}`,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px) scale(1.05)',
            boxShadow: `0 8px 24px ${alpha(skillColor!, 0.25)}, 0 0 12px ${alpha(skillColor!, 0.15)}`,
            borderColor: alpha(skillColor!, 0.6),
          },
        };
      }}
    >
      <Typography
        sx={(theme: Theme) => {
          const isDark = theme.palette.mode === 'dark';
          const skillColor = skill.colorKey === 'dynamic' ? (isDark ? '#fff' : '#000') : skill.color;
          return {
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 600,
            color: skillColor,
            whiteSpace: 'nowrap',
          };
        }}
      >
        {t(skill.labelKey)}
      </Typography>
    </Box>
  );
}
