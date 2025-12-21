'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Link as MuiLink,
  Stack,
  alpha,
  Theme,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { navLinkKeys } from '@/data/portfolio';
import { useThemeMode } from '@/theme/ThemeRegistry';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const t = useTranslations();
  const tNav = useTranslations('nav');
  const tTheme = useTranslations('theme');
  const tPersonal = useTranslations('personal');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={(theme: Theme) => ({
        height: '100%',
        bgcolor: alpha(theme.palette.background.default, 0.98),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          gap: 1,
        }}
      >
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: 'warning.main',
          }}
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'warning.main',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinkKeys.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={handleDrawerToggle}
              sx={(theme: Theme) => ({
                textAlign: 'center',
                py: 2,
                px: 4,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: alpha(theme.palette.info.main, 0.1),
                  border: '1px solid',
                  borderColor: 'warning.main',
                },
              })}
            >
              <ListItemText
                primary={tNav(link.labelKey)}
                primaryTypographyProps={{
                  sx: { color: 'secondary.main', fontSize: '1.2rem' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme: Theme) => ({
          background: theme.palette.backgrounds.headerGlow,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 2px 12px 0 ${alpha(theme.palette.info.main, 0.18)}`,
        })}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
            <MuiLink
              href="#"
              underline="none"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'warning.main',
              }}
            >
              {tPersonal('name')}
            </MuiLink>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {navLinkKeys.map((link) => (
                <MuiLink
                  key={link.href}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    position: 'relative',
                    transition: 'color 0.3s',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -4,
                      height: '2px',
                      bgcolor: 'warning.main',
                      borderRadius: '2px',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 2, 0.6, 1)',
                      transformOrigin: 'left',
                    },
                    '&:hover': {
                      color: 'warning.main',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {tNav(link.labelKey)}
                </MuiLink>
              ))}

              {/* Theme Toggle Button */}
              <Tooltip title={mode === 'dark' ? tTheme('switchToLight') : tTheme('switchToDark')}>
                <IconButton
                  onClick={toggleTheme}
                  sx={(theme: Theme) => ({
                    color: 'warning.main',
                    bgcolor: alpha(theme.palette.warning.main, 0.1),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.warning.main, 0.2),
                      transform: 'rotate(180deg)',
                    },
                  })}
                >
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Stack>

            {/* Mobile Menu Button */}
            <Stack direction="row" spacing={1} sx={{ display: { md: 'none' } }}>
              <IconButton
                onClick={toggleTheme}
                sx={{ color: 'warning.main' }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'warning.main' }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: '100%' },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
}
