'use client';

import { useTranslations } from 'next-intl';
import { Box, Stack } from '@mui/material';
import { Section, SectionTitle, SkillCard, CompetencyCard, AnimatedElement } from '@/components/ui';
import { skills, competencies } from '@/data/portfolio';

export default function Skills() {
  const t = useTranslations('skills');

  const skillCategories = [
    { titleKey: 'frontend', data: skills.frontend },
    { titleKey: 'backend', data: skills.backend },
    { titleKey: 'ai', data: skills.ai },
    { titleKey: 'databases', data: skills.databases },
    { titleKey: 'cloud', data: skills.cloud },
    { titleKey: 'data', data: skills.data },
  ] as const;

  // Map competencies with translated names
  const coreCompetencies = competencies.core.map(c => ({
    name: t(`competencyNames.${c.nameKey}`),
    icon: c.icon,
  }));

  const softCompetencies = competencies.soft.map(c => ({
    name: t(`competencyNames.${c.nameKey}`),
    icon: c.icon,
  }));

  return (
    <Section id="skills" bg="solid">
      <AnimatedElement variant="fadeInUp" duration={0.7}>
        <SectionTitle>{t('title')}</SectionTitle>
      </AnimatedElement>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {skillCategories.map((category, index) => (
          <AnimatedElement
            key={category.titleKey}
            variant="fadeInUp"
            staggerIndex={index}
            staggerDelay={0.1}
            delay={0.05}
          >
            <Box sx={{ height: '100%' }}>
              <SkillCard title={t(`categories.${category.titleKey}`)} skills={category.data} />
            </Box>
          </AnimatedElement>
        ))}
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ mt: 6, alignItems: 'stretch' }}
      >
        <AnimatedElement variant="fadeInLeft" delay={0.1} sx={{ flex: 1, display: 'flex' }}>
          <CompetencyCard title={t('competencies.core')} competencies={coreCompetencies} />
        </AnimatedElement>
        <AnimatedElement variant="fadeInRight" delay={0.15} sx={{ flex: 1, display: 'flex' }}>
          <CompetencyCard title={t('competencies.soft')} competencies={softCompetencies} />
        </AnimatedElement>
      </Stack>
    </Section>
  );
}
