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
      // Custom sitemap generation to support individual priorities and change frequencies
      {
        name: 'custom-sitemap',
        closeBundle: async () => {
          const hostname = 'https://abuqitmirlabs.tech';
          const routes = [
            { url: '/',                        changefreq: 'weekly',  priority: 1.0 },
            { url: '/about',                   changefreq: 'monthly', priority: 0.8 },
            { url: '/contact',                 changefreq: 'monthly', priority: 0.9 },
            { url: '/custom-software',         changefreq: 'weekly',  priority: 0.9 },
            { url: '/mobile-app-development',  changefreq: 'weekly',  priority: 0.9 },
            { url: '/web-development',         changefreq: 'weekly',  priority: 0.9 },
            { url: '/ai-agent-development',    changefreq: 'weekly',  priority: 0.9 },
            { url: '/seo-mastery',             changefreq: 'weekly',  priority: 0.8 },
            { url: '/graphics-design',         changefreq: 'weekly',  priority: 0.8 },
            { url: '/content-writing',         changefreq: 'weekly',  priority: 0.8 },
            { url: '/us-market',               changefreq: 'monthly', priority: 0.7 },
            { url: '/uk-market',               changefreq: 'monthly', priority: 0.7 },
            { url: '/pakistan-market',         changefreq: 'monthly', priority: 0.7 },
            { url: '/canada-market',           changefreq: 'monthly', priority: 0.7 },
            { url: '/poland-market',           changefreq: 'monthly', priority: 0.7 },
            { url: '/australia-market',        changefreq: 'monthly', priority: 0.7 },
            { url: '/blog',                    changefreq: 'daily',   priority: 0.8 },
            { url: '/terms',                   changefreq: 'yearly',  priority: 0.3 },
            { url: '/privacy',                 changefreq: 'yearly',  priority: 0.3 },
          ];
          
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route.url === '/' ? '' : route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

          const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /google87984536fe5662da

Sitemap: ${hostname}/sitemap.xml`;

          const fs = await import('fs');
          const path = await import('path');
          const outDir = path.resolve(process.cwd(), 'dist');
          
          if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
          }
          
          fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap);
          fs.writeFileSync(path.resolve(outDir, 'robots.txt'), robots);
          console.log('✅ Sitemap and robots.txt generated successfully!');
        }
      }
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
