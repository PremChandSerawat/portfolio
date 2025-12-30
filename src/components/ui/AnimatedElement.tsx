'use client';

import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation, UseScrollAnimationOptions } from '@/hooks/useScrollAnimation';

export type AnimationVariant =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'rotateIn'
  | 'bounceIn'
  | 'flipInX'
  | 'flipInY'
  | 'zoomIn'
  | 'blurIn';

export interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  sx?: SxProps<Theme>;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  component?: React.ElementType;
  easing?: string;
  staggerIndex?: number;
  staggerDelay?: number;
}

const getAnimationStyles = (
  variant: AnimationVariant,
  isVisible: boolean,
  duration: number,
  delay: number,
  easing: string
): { initial: CSSProperties; visible: CSSProperties } => {
  const variants: Record<AnimationVariant, { initial: CSSProperties; visible: CSSProperties }> = {
    fadeIn: {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      initial: { opacity: 0, transform: 'translateY(20px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInDown: {
      initial: { opacity: 0, transform: 'translateY(-20px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInLeft: {
      initial: { opacity: 0, transform: 'translateX(-20px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    fadeInRight: {
      initial: { opacity: 0, transform: 'translateX(20px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    slideInUp: {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    slideInDown: {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    slideInLeft: {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    slideInRight: {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    rotateIn: {
      initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.95)' },
      visible: { opacity: 1, transform: 'rotate(0) scale(1)' },
    },
    bounceIn: {
      initial: { opacity: 0, transform: 'scale(0.5)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    flipInX: {
      initial: { opacity: 0, transform: 'perspective(400px) rotateX(45deg)' },
      visible: { opacity: 1, transform: 'perspective(400px) rotateX(0)' },
    },
    flipInY: {
      initial: { opacity: 0, transform: 'perspective(400px) rotateY(45deg)' },
      visible: { opacity: 1, transform: 'perspective(400px) rotateY(0)' },
    },
    zoomIn: {
      initial: { opacity: 0, transform: 'scale(0.7)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    blurIn: {
      initial: { opacity: 0, filter: 'blur(6px)', transform: 'translateY(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
    },
  };

  return variants[variant];
};

export default function AnimatedElement({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.35,
  sx,
  threshold = 0.05,
  rootMargin = '0px 0px -20px 0px',
  triggerOnce = true,
  component = 'div',
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  staggerIndex = 0,
  staggerDelay = 0.05,
}: AnimatedElementProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const totalDelay = delay + staggerIndex * staggerDelay;
  const styles = getAnimationStyles(variant, isVisible, duration, totalDelay, easing);
  const currentStyles = isVisible ? styles.visible : styles.initial;

  return (
    <Box
      ref={ref}
      component={component}
      sx={{
        ...currentStyles,
        transition: `all ${duration}s ${easing} ${totalDelay}s`,
        willChange: 'opacity, transform, filter',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

