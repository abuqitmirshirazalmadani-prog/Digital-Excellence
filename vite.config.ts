import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      sitemap({
        hostname: 'https://abuqitmirlabs.tech',
        dynamicRoutes: [
          '/',
          '/about',
          '/custom-software',
          '/mobile-app-development',
          '/web-development',
          '/ai-agent-development',
          '/seo-mastery',
          '/graphics-design',
          '/content-writing',
          '/contact',
          '/us-market',
          '/uk-market',
          '/pakistan-market',
          '/canada-market',
          '/poland-market',
          '/australia-market',
          '/terms',
          '/privacy',
          '/blog',
          '/admin',
        ],
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
