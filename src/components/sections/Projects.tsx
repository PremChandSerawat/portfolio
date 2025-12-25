'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Typography, Chip, Stack, alpha, Theme } from '@mui/material';
import { Section, SectionTitle, ProjectCard, AnimatedElement } from '@/components/ui';
import { projectKeys, projectMeta, projectTags, projectCategories, type ProjectKey } from '@/data/portfolio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const t = useTranslations('projects');

  const categoryKeys = ['all', 'web', 'ai', 'data', 'mobile'] as const;

  // Get filtered projects based on active category
  const filteredProjectKeys = activeCategory === 'all'
    ? projectKeys
    : projectKeys.filter(key => projectCategories[key].includes(activeCategory));

  return (
    <Section id="projects" bg="gradientTealViolet">
      {/* Background decoration */}
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: theme.palette.backgrounds.orbVioletLight,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        })}
      />
      <Box
        sx={(theme: Theme) => ({
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: theme.palette.backgrounds.orbAzureLight,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        })}
      />

      {/* Section header */}
      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle sx={{ textAlign: 'center', mb: 2 }}>
            {t('title')}
          </SectionTitle>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>
      </AnimatedElement>

      {/* Category filters */}
      <AnimatedElement variant="fadeIn" delay={0.2}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mb: 5,
          }}
        >
          {categoryKeys.map((categoryKey) => (
            <Chip
              key={categoryKey}
              label={t(`categories.${categoryKey}`)}
              onClick={() => setActiveCategory(categoryKey)}
              sx={(theme: Theme) => {
                const isDark = theme.palette.mode === 'dark';
                return {
                  px: 1,
                  py: 2.5,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  border: '1.5px solid',
                  borderColor: activeCategory === categoryKey
                    ? 'secondary.main'
                    : alpha(theme.palette.text.primary, 0.1),
                  bgcolor: activeCategory === categoryKey
                    ? alpha(theme.palette.secondary.main, isDark ? 0.15 : 0.1)
                    : 'transparent',
                  color: activeCategory === categoryKey
                    ? 'secondary.main'
                    : 'text.secondary',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                    transform: 'translateY(-2px)',
                  },
                };
              }}
            />
          ))}
        </Stack>
      </AnimatedElement>

      {/* Projects count */}
      <AnimatedElement variant="fadeIn" delay={0.3}>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 4,
          }}
        >
          {t('showing', { count: filteredProjectKeys.length, total: projectKeys.length })}
        </Typography>
      </AnimatedElement>

      {/* Projects list - full width cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {filteredProjectKeys.map((projectKey, index) => {
          const meta = projectMeta[projectKey];
          const projectData = t.raw(`items.${projectKey}`) as {
            title: string;
            subtitle?: string;
            description: string[];
            highlights?: string[];
            agents?: string[];
            patterns?: string[];
            impact?: string[];
            sites?: { name: string; url: string }[];
          };
          
          // Check if this is a featured project (has detailed content)
          const isFeatured = !!(projectData.highlights?.length || projectData.impact?.length || projectData.agents?.length || projectData.sites?.length);
          
          return (
            <AnimatedElement
              key={projectKey}
              variant="fadeInUp"
              staggerIndex={index}
              staggerDelay={0.1}
              delay={0.2}
            >
              <ProjectCard
                title={projectData.title}
                subtitle={projectData.subtitle}
                description={projectData.description}
                highlights={projectData.highlights}
                agents={projectData.agents}
                patterns={projectData.patterns}
                impact={projectData.impact}
                sites={projectData.sites}
                link={meta.link}
                linkText={projectKey === 'ascendLos' ? t('items.ascendLos.linkText') : undefined}
                linkIcon={meta.linkIcon}
                isWide={true}
                isFeatured={isFeatured}
                tags={projectTags[projectKey]}
                index={index}
              />
            </AnimatedElement>
          );
        })}
      </Box>
    </Section>
  );
}
