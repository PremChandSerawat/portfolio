'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Button, Chip, Stack, alpha, useTheme, Collapse } from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

interface SiteLink {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string[];
  highlights?: string[];
  agents?: string[];
  patterns?: string[];
  impact?: string[];
  sites?: SiteLink[];
  link?: string;
  linkText?: string;
  linkIcon?: string;
  isWide?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  index?: number;
}

const getProjectIcon = (title: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'QuillBot Flow': <EditNoteIcon sx={{ fontSize: 28 }} />,
    'Tina CMS': <WebIcon sx={{ fontSize: 28 }} />,
    'Paraphrasing Tool': <SpellcheckIcon sx={{ fontSize: 28 }} />,
    'Citation Generator': <FormatQuoteIcon sx={{ fontSize: 28 }} />,
    'Website Internationalization': <TranslateIcon sx={{ fontSize: 28 }} />,
    'Grammar Checker': <SpellcheckIcon sx={{ fontSize: 28 }} />,
    'Big Data Processing': <StorageIcon sx={{ fontSize: 28 }} />,
    'Ascend LOS/LMS': <PhoneAndroidIcon sx={{ fontSize: 28 }} />,
    'AI Chat': <SmartToyIcon sx={{ fontSize: 32 }} />,
    'Multi-Site CMS': <WebIcon sx={{ fontSize: 28 }} />,
    'Chat PDF': <StorageIcon sx={{ fontSize: 28 }} />,
    'Speech to Text': <SmartToyIcon sx={{ fontSize: 28 }} />,
    'Text to Speech': <SmartToyIcon sx={{ fontSize: 28 }} />,
    'Image to Text': <WebIcon sx={{ fontSize: 28 }} />,
    'QR Code': <CodeIcon sx={{ fontSize: 28 }} />,
    'Word Cloud': <WebIcon sx={{ fontSize: 28 }} />,
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
  subtitle,
  description,
  highlights = [],
  agents = [],
  patterns = [],
  impact = [],
  sites = [],
  link,
  linkText = 'Visit Site',
  linkIcon,
  isWide = false,
  isFeatured = false,
  tags = [],
  index = 0,
}: ProjectCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const gradient = getGradient(index, isDark);
  const [expanded, setExpanded] = useState(false);
  
  // Check if this is a featured/detailed project (has highlights or impact)
  const hasDetails = highlights.length > 0 || impact.length > 0 || agents.length > 0 || sites.length > 0;
  // Check if there's more content to show
  const hasMoreDescription = description.length > 1;
  const showExpandButton = hasDetails || hasMoreDescription;

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        bgcolor: isDark ? alpha(theme.palette.background.paper, 0.7) : theme.palette.background.paper,
        border: `1px solid ${alpha(hasDetails ? gradient.from : theme.palette.text.primary, hasDetails ? 0.2 : (isDark ? 0.08 : 0.06))}`,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 20px 40px ${alpha(gradient.from, 0.15)}, 0 8px 16px ${alpha(gradient.to, 0.1)}`,
          borderColor: alpha(gradient.from, 0.3),
          '& .project-icon-wrapper': {
            transform: 'scale(1.05)',
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
          height: hasDetails ? 5 : 4,
          width: hasDetails ? '100%' : '40%',
          background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
          opacity: hasDetails ? 1 : 0.7,
          transition: 'all 0.4s ease',
          borderRadius: '4px 4px 0 0',
        }}
      />

      {/* Decorative orbs for featured cards */}
      {hasDetails && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(gradient.from, 0.12)} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -60,
              left: -60,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(gradient.to, 0.08)} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3.5 }, display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        {/* Header section */}
        <Stack direction="row" spacing={{ xs: 1.5, sm: 2.5 }} alignItems="flex-start" sx={{ mb: { xs: 2, md: 2.5 } }}>
          <Box
            className="project-icon-wrapper"
            sx={{
              width: { xs: hasDetails ? 48 : 44, sm: hasDetails ? 64 : 52 },
              height: { xs: hasDetails ? 48 : 44, sm: hasDetails ? 64 : 52 },
              borderRadius: 3,
              background: hasDetails 
                ? `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
                : `linear-gradient(135deg, ${alpha(gradient.from, isDark ? 0.2 : 0.15)}, ${alpha(gradient.to, isDark ? 0.1 : 0.08)})`,
              border: hasDetails ? 'none' : `1px solid ${alpha(gradient.from, 0.2)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: hasDetails ? '#fff' : gradient.from,
              transition: 'all 0.3s ease',
              flexShrink: 0,
              boxShadow: hasDetails ? `0 8px 24px ${alpha(gradient.from, 0.35)}` : 'none',
            }}
          >
            {getProjectIcon(title)}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" sx={{ mb: 0.5 }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  fontSize: hasDetails ? { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } : { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.3,
                }}
              >
                {title}
              </Typography>
              {hasDetails && (
                <Chip
                  label="Featured"
                  size="small"
                  sx={{
                    height: 22,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                    color: '#fff',
                    border: 'none',
                  }}
                />
              )}
            </Stack>
            {subtitle && (
              <Typography
                variant="subtitle1"
                sx={{
                  background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  mb: 1,
                }}
              >
                {subtitle}
              </Typography>
            )}
            {/* Tags */}
            <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {tags.slice(0, hasDetails ? 6 : 4).map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    height: 22,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    bgcolor: alpha(gradient.from, isDark ? 0.15 : 0.1),
                    color: gradient.from,
                    border: `1px solid ${alpha(gradient.from, 0.15)}`,
                    '& .MuiChip-label': { px: 1 },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>

        {/* Main description - first paragraph always visible */}
        <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: { xs: '0.85rem', sm: '0.925rem' },
            }}
          >
            {description[0]}
          </Typography>
        </Box>

        {/* Expandable content */}
        <Collapse in={expanded}>
          <Box sx={{ mb: 2 }}>
            {/* Additional description paragraphs */}
            {description.slice(1).map((para, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 1.5,
                  lineHeight: 1.75,
                  fontSize: '0.925rem',
                }}
              >
                {para}
              </Typography>
            ))}

            {/* Live Sites */}
            {sites.length > 0 && (
              <Box sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  <LaunchIcon sx={{ color: gradient.from, fontSize: { xs: 18, md: 20 } }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                    Live Sites
                  </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {sites.map((site, idx) => (
                    <Button
                      key={idx}
                      href={site.url}
                      target="_blank"
                      variant="outlined"
                      size="small"
                      endIcon={<LaunchIcon sx={{ fontSize: { xs: 12, md: 14 } }} />}
                      sx={{
                        borderColor: alpha(gradient.from, 0.3),
                        color: gradient.from,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: { xs: '0.7rem', md: '0.8rem' },
                        px: { xs: 1.5, md: 2 },
                        py: { xs: 0.5, md: 0.75 },
                        borderRadius: 2,
                        '&:hover': {
                          borderColor: gradient.from,
                          bgcolor: alpha(gradient.from, 0.08),
                        },
                      }}
                    >
                      {site.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Impact metrics */}
            {impact.length > 0 && (
              <Box sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  <TrendingUpIcon sx={{ color: gradient.from, fontSize: { xs: 18, md: 20 } }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                    Business Impact
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1.5}>
                  {impact.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        bgcolor: alpha(gradient.from, isDark ? 0.08 : 0.05),
                        border: `1px solid ${alpha(gradient.from, 0.1)}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1,
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: gradient.from, fontSize: { xs: 16, md: 18 }, mt: 0.25, flexShrink: 0 }} />
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Key Highlights */}
            {highlights.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem' }}>
                  Key Contributions
                </Typography>
                <Stack spacing={1.5}>
                  {highlights.map((highlight, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        pl: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                          mt: 0.8,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '0.875rem',
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Agent Architecture */}
            {agents.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <AccountTreeIcon sx={{ color: gradient.from, fontSize: 20 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem' }}>
                    Agent Architecture
                  </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {agents.map((agent, idx) => (
                    <Chip
                      key={idx}
                      label={agent}
                      size="small"
                      sx={{
                        height: 28,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        bgcolor: alpha(gradient.to, isDark ? 0.12 : 0.08),
                        color: isDark ? alpha(theme.palette.text.primary, 0.9) : gradient.to,
                        border: `1px solid ${alpha(gradient.to, 0.15)}`,
                        '& .MuiChip-label': { px: 1.5 },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}

            {/* Patterns */}
            {patterns.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem' }}>
                  Design Patterns
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {patterns.map((pattern, idx) => (
                    <Chip
                      key={idx}
                      label={pattern}
                      size="small"
                      variant="outlined"
                      sx={{
                        height: 26,
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        borderColor: alpha(theme.palette.text.primary, 0.2),
                        color: 'text.secondary',
                        '& .MuiChip-label': { px: 1.25 },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </Collapse>

        {/* Footer with expand button and link */}
        <Box sx={{ mt: 'auto', pt: { xs: 1.5, md: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: { xs: 1, md: 2 } }}>
          {/* Show More / Show Less button */}
          {showExpandButton && (
            <Button
              onClick={() => setExpanded(!expanded)}
              endIcon={
                <ExpandMoreIcon
                  sx={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontSize: { xs: 18, md: 20 },
                  }}
                />
              }
              sx={{
                color: gradient.from,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: { xs: '0.8rem', md: '0.875rem' },
                px: { xs: 1.5, md: 2 },
                py: { xs: 0.5, md: 0.75 },
                borderRadius: 2,
                border: `1px solid ${alpha(gradient.from, 0.2)}`,
                '&:hover': {
                  bgcolor: alpha(gradient.from, 0.08),
                  borderColor: alpha(gradient.from, 0.4),
                },
              }}
            >
              {expanded ? 'Show Less' : 'Show More'}
            </Button>
          )}

          {/* Visit Site button */}
          {link && (
            <Button
              href={link}
              target="_blank"
              variant="contained"
              size="medium"
              endIcon={linkIcon?.includes('google-play') ? <ShopIcon /> : <LaunchIcon sx={{ fontSize: { xs: 16, md: 18 } }} />}
              sx={{
                background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: { xs: '0.8rem', md: '0.875rem' },
                px: { xs: 2, md: 3 },
                py: { xs: 0.75, md: 1 },
                borderRadius: 2,
                boxShadow: `0 4px 14px ${alpha(gradient.from, 0.35)}`,
                '&:hover': {
                  background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 20px ${alpha(gradient.from, 0.45)}`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              {linkText}
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
