'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { Header, Hero } from '@/components/sections';
import { AnimatedElement } from '@/components/ui';

// Lazy load below-fold components to improve FCP/LCP
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <SectionSkeleton />,
});
const Education = dynamic(() => import('@/components/sections/Education'), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
});

// Minimal skeleton to prevent layout shift
function SectionSkeleton() {
  return (
    <Box
      sx={{
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <AnimatedElement variant="fadeInUp" delay={0.1}>
        <Box
          component="footer"
          sx={{
            py: 4,
            textAlign: 'center',
            borderTop: '1px solid rgba(100, 255, 218, 0.1)',
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            © {new Date().getFullYear()} Prem Chand Serawat. All rights reserved.
          </Box>
        </Box>
      </AnimatedElement>
    </Box>
  );
}
