'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Paper, Stack, IconButton, Link as MuiLink, alpha, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Section, SectionTitle, AnimatedElement } from '@/components/ui';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const t = useTranslations('contact');
  const tPersonal = useTranslations('personal');

  return (
    <Section id="contact" bg="solid">
      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <SectionTitle>{t('title')}</SectionTitle>
      </AnimatedElement>

      <AnimatedElement variant="fadeInUp" delay={0.15}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: alpha(theme.palette.info.main, 0.05),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            maxWidth: 600,
          }}
        >
          <Stack spacing={3}>
            <AnimatedElement variant="fadeInLeft" delay={0.2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {t('email')}
                  </Typography>
                  <MuiLink
                    href={`mailto:${personalInfo.email}`}
                    underline="hover"
                    sx={{ color: 'primary.main', fontWeight: 500 }}
                  >
                    {personalInfo.email}
                  </MuiLink>
                </Box>
              </Box>
            </AnimatedElement>

            <AnimatedElement variant="fadeInLeft" delay={0.3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {t('phone')}
                  </Typography>
                  <MuiLink
                    href={`tel:${personalInfo.phone}`}
                    underline="hover"
                    sx={{ color: 'primary.main', fontWeight: 500 }}
                  >
                    {personalInfo.phone}
                  </MuiLink>
                </Box>
              </Box>
            </AnimatedElement>

            <AnimatedElement variant="fadeInLeft" delay={0.4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {t('location')}
                  </Typography>
                  <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>
                    {tPersonal('location')}
                  </Typography>
                </Box>
              </Box>
            </AnimatedElement>

            <AnimatedElement variant="fadeInUp" delay={0.5}>
              <Box sx={{ pt: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                  {t('connectWithMe')}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {[
                    { icon: <GitHubIcon />, href: personalInfo.github, color: theme.palette.secondary.main },
                    { icon: <LinkedInIcon />, href: personalInfo.linkedin, color: theme.palette.info.main },
                    { icon: <XIcon />, href: personalInfo.twitter, color: theme.palette.text.primary },
                  ].map((social, index) => (
                    <AnimatedElement
                      key={index}
                      variant="bounceIn"
                      staggerIndex={index}
                      staggerDelay={0.1}
                      delay={0.6}
                    >
                      <IconButton
                        href={social.href}
                        target="_blank"
                        sx={{
                          color: social.color,
                          bgcolor: alpha(social.color, 0.1),
                          transition: 'all 0.3s',
                          '&:hover': {
                            color: 'text.primary',
                            bgcolor: social.color,
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </AnimatedElement>
                  ))}
                </Stack>
              </Box>
            </AnimatedElement>
          </Stack>
        </Paper>
      </AnimatedElement>
    </Section>
  );
}
