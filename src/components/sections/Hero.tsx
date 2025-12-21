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
      py={0}
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
          <AnimatedElement variant="fadeInDown" delay={0.2} duration={0.8} triggerOnce>
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
          <AnimatedElement variant="fadeInUp" delay={0.3} duration={0.9} triggerOnce>
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
          <AnimatedElement variant="fadeInUp" delay={0.45} duration={0.8} triggerOnce>
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
          <AnimatedElement variant="fadeInUp" delay={0.55} duration={0.8} triggerOnce>
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
          <AnimatedElement variant="fadeInUp" delay={0.65} duration={0.8} triggerOnce>
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
          <AnimatedElement variant="fadeInUp" delay={0.75} duration={0.8} triggerOnce>
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

        {/* Right visual element */}
        <AnimatedElement
          variant="fadeInRight"
          delay={0.5}
          duration={1}
          triggerOnce
          sx={{
            flex: 1,
            display: { xs: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Tech stack floating cards */}
          <Box
            sx={{
              position: 'relative',
              width: 400,
              height: 400,
            }}
          >
            {/* Central gradient circle */}
            <Box
              sx={(theme: Theme) => ({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: theme.palette.backgrounds.conicSpinner,
                animation: 'spin 20s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                  '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
              })}
            />

            {/* Tech badges floating around */}
            <TechBadges />

            {/* Center experience badge */}
            <Box
              sx={(theme: Theme) => ({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 140,
                height: 140,
                borderRadius: '50%',
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.95) : 'background.paper',
                boxShadow: `0 8px 32px ${alpha(theme.palette.secondary.main, 0.2)}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                animation: 'centerBadgePulse 4s ease-in-out infinite',
                '@keyframes centerBadgePulse': {
                  '0%, 100%': { 
                    transform: 'translate(-50%, -50%) scale(1)',
                    boxShadow: `0 8px 32px ${alpha(theme.palette.secondary.main, 0.2)}`,
                  },
                  '50%': { 
                    transform: 'translate(-50%, -50%) scale(1.05)',
                    boxShadow: `0 12px 40px ${alpha(theme.palette.secondary.main, 0.35)}`,
                  },
                },
              })}
            >
              <Typography
                sx={(theme: Theme) => ({
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.info.main}, ${theme.palette.secondary.main})`,
                  backgroundSize: '200% 100%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  animation: 'textShimmer 3s ease-in-out infinite',
                  '@keyframes textShimmer': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                })}
              >
                6+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {t('yearsExp')}
              </Typography>
            </Box>
          </Box>
        </AnimatedElement>
      </Box>
    </Section>
  );
}

function TechBadges() {
  const t = useTranslations('hero.techBadges');
  
  // 10 items with unique floating patterns
  const techStack = [
    { labelKey: 'react', top: '5%', left: '50%', floatType: 1, duration: 5, delay: 0, color: '#61DAFB' },
    { labelKey: 'nextjs', top: '15%', left: '78%', floatType: 2, duration: 6, delay: 0.3, colorKey: 'dynamic' },
    { labelKey: 'nodejs', top: '38%', left: '92%', floatType: 3, duration: 5.5, delay: 0.6, color: '#339933' },
    { labelKey: 'python', top: '65%', left: '88%', floatType: 4, duration: 6.5, delay: 0.9, color: '#3776AB' },
    { labelKey: 'aws', top: '85%', left: '72%', floatType: 5, duration: 5, delay: 1.2, color: '#FF9900' },
    { labelKey: 'docker', top: '95%', left: '50%', floatType: 1, duration: 6, delay: 1.5, color: '#2496ED' },
    { labelKey: 'gcp', top: '85%', left: '28%', floatType: 2, duration: 5.5, delay: 1.8, color: '#4285F4' },
    { labelKey: 'postgresql', top: '65%', left: '12%', floatType: 3, duration: 6, delay: 2.1, color: '#336791' },
    { labelKey: 'typescript', top: '38%', left: '8%', floatType: 4, duration: 5.5, delay: 2.4, color: '#3178C6' },
    { labelKey: 'mongodb', top: '15%', left: '22%', floatType: 5, duration: 6.5, delay: 2.7, color: '#47A248' },
  ];

  return (
    <>
      {techStack.map((tech, index) => (
        <Box
          key={index}
          sx={(theme: Theme) => {
            const isDark = theme.palette.mode === 'dark';
            const techColor = tech.colorKey === 'dynamic' ? (isDark ? '#fff' : '#000') : tech.color;
            const floatAnim = `float${tech.floatType}`;
            
            return {
              position: 'absolute',
              top: tech.top,
              left: tech.left,
              transform: 'translate(-50%, -50%)',
              px: 2,
              py: 1,
              bgcolor: isDark ? alpha(theme.palette.background.paper, 0.95) : 'background.paper',
              borderRadius: 2,
              boxShadow: `0 4px 20px ${alpha(theme.palette.text.primary, 0.1)}`,
              border: `1px solid ${alpha(techColor!, 0.3)}`,
              animation: `fadeInBadge 0.8s ease-out forwards, ${floatAnim} ${tech.duration}s ease-in-out infinite, glowPulse 4s ease-in-out infinite`,
              animationDelay: `${tech.delay}s, ${tech.delay}s, ${tech.delay * 0.5}s`,
              opacity: 0,
              cursor: 'pointer',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
              
              // Fade in with pop
              '@keyframes fadeInBadge': {
                '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
                '70%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1.05)' },
                '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
              },
              
              // Float pattern 1 - gentle vertical
              '@keyframes float1': {
                '0%, 100%': { transform: 'translate(-50%, -50%)' },
                '50%': { transform: 'translate(-50%, calc(-50% - 10px))' },
              },
              
              // Float pattern 2 - diagonal drift
              '@keyframes float2': {
                '0%, 100%': { transform: 'translate(-50%, -50%)' },
                '33%': { transform: 'translate(calc(-50% + 6px), calc(-50% - 8px))' },
                '66%': { transform: 'translate(calc(-50% - 4px), calc(-50% - 4px))' },
              },
              
              // Float pattern 3 - circular micro-orbit
              '@keyframes float3': {
                '0%': { transform: 'translate(-50%, -50%)' },
                '25%': { transform: 'translate(calc(-50% + 5px), calc(-50% - 5px))' },
                '50%': { transform: 'translate(-50%, calc(-50% - 8px))' },
                '75%': { transform: 'translate(calc(-50% - 5px), calc(-50% - 5px))' },
                '100%': { transform: 'translate(-50%, -50%)' },
              },
              
              // Float pattern 4 - breathing scale
              '@keyframes float4': {
                '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
                '50%': { transform: 'translate(-50%, calc(-50% - 6px)) scale(1.03)' },
              },
              
              // Float pattern 5 - gentle sway
              '@keyframes float5': {
                '0%, 100%': { transform: 'translate(-50%, -50%)' },
                '25%': { transform: 'translate(calc(-50% - 6px), calc(-50% - 3px))' },
                '50%': { transform: 'translate(-50%, calc(-50% - 7px))' },
                '75%': { transform: 'translate(calc(-50% + 6px), calc(-50% - 3px))' },
              },
              
              // Glow pulse
              '@keyframes glowPulse': {
                '0%, 100%': { 
                  boxShadow: `0 4px 20px ${alpha(theme.palette.text.primary, 0.1)}`,
                  borderColor: alpha(techColor!, 0.3),
                },
                '50%': { 
                  boxShadow: `0 6px 25px ${alpha(techColor!, 0.2)}, 0 0 15px ${alpha(techColor!, 0.1)}`,
                  borderColor: alpha(techColor!, 0.5),
                },
              },
              
              '&:hover': {
                transform: 'translate(-50%, -50%) scale(1.1)',
                boxShadow: `0 8px 30px ${alpha(techColor!, 0.35)}, 0 0 20px ${alpha(techColor!, 0.2)}`,
                borderColor: techColor,
                zIndex: 10,
              },
            };
          }}
        >
          <Typography
            sx={(theme: Theme) => {
              const isDark = theme.palette.mode === 'dark';
              const techColor = tech.colorKey === 'dynamic' ? (isDark ? '#fff' : '#000') : tech.color;
              return {
                fontSize: '0.85rem',
                fontWeight: 600,
                color: techColor,
                whiteSpace: 'nowrap',
              };
            }}
          >
            {t(tech.labelKey)}
          </Typography>
        </Box>
      ))}
    </>
  );
}
