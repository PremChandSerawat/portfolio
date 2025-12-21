'use client';

import createCache from '@emotion/cache';

// Create a reusable emotion cache instance
// This ensures consistency between client and server
export default function createEmotionCache() {
  return createCache({ key: 'sleek-portfolio', prepend: true });
}

