import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      // Custom sitemap, robots.txt AND static route generation for SEO
      {
        name: 'custom-seo-generator',
        closeBundle: async () => {
          const hostname = 'https://abuqitmirlabs.tech';
          const routes = [
            { url: '/',                        changefreq: 'weekly',  priority: 1.0, title: 'AI Mobile App Development Company | AbuQitmirLabs', description: "Pakistan's leading AI mobile app development company. We build SaaS, Flutter, and custom apps for businesses worldwide." },
            { url: '/about',                   changefreq: 'monthly', priority: 0.8, title: 'About Us | AbuQitmirLabs', description: 'Learn about our mission to build cutting-edge AI and mobile solutions.' },
            { url: '/contact',                 changefreq: 'monthly', priority: 0.9, title: 'Contact Us | Start Your Project', description: 'Contact AbuQitmirLabs for your next mobile app or AI software project.' },
            { url: '/custom-software',         changefreq: 'weekly',  priority: 0.9, title: 'Custom Software Development', description: 'Tailor-made software solutions for your unique business needs.' },
            { url: '/mobile-app-development',  changefreq: 'weekly',  priority: 0.9, title: 'Flutter & Native Mobile Apps', description: 'Expert mobile app development for iOS and Android using Flutter and Native technologies.' },
            { url: '/web-development',         changefreq: 'weekly',  priority: 0.9, title: 'Modern Web Development', description: 'High-performance web applications built with the latest technologies.' },
            { url: '/ai-agent-development',    changefreq: 'weekly',  priority: 0.9, title: 'AI Agent & AI App Development', description: 'Leading AI development solutions including agents, chatbots, and generative AI.' },
            { url: '/seo-mastery',             changefreq: 'weekly',  priority: 0.8, title: 'SEO Mastery Services', description: 'Boost your digital presence with our expert SEO and ranking services.' },
            { url: '/graphics-design',         changefreq: 'weekly',  priority: 0.8, title: 'Creative Graphics & UI/UX', description: 'Stunning visual designs and user experiences that capture attention.' },
            { url: '/content-writing',         changefreq: 'weekly',  priority: 0.8, title: 'Professional Content Writing', description: 'Engaging content that drives conversions and builds brand authority.' },
            { url: '/us-market',               changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions for US Businesses', description: 'Custom AI and mobile app development services tailored for the United States market.' },
            { url: '/uk-market',               changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions for UK Businesses', description: 'Custom AI and mobile app development services tailored for the United Kingdom market.' },
            { url: '/pakistan-market',         changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions in Pakistan', description: 'Leading AI and mobile app development services for businesses in Pakistan.' },
            { url: '/canada-market',           changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions for Canada', description: 'Custom AI and mobile app development services tailored for the Canadian market.' },
            { url: '/poland-market',           changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions for Poland', description: 'Custom AI and mobile app development services tailored for the Polish market.' },
            { url: '/australia-market',        changefreq: 'monthly', priority: 0.7, title: 'AI Software Solutions for Australia', description: 'Custom AI and mobile app development services tailored for the Australian market.' },
            { url: '/blog',                    changefreq: 'daily',   priority: 0.8, title: 'Tech Blog & AI Insights', description: 'Stay updated with the latest in AI, Mobile Apps, and Tech trends.' },
            { url: '/terms',                   changefreq: 'yearly',  priority: 0.3, title: 'Terms of Service', description: 'Legal terms and conditions for using AbuQitmirLabs services.' },
            { url: '/privacy',                 changefreq: 'yearly',  priority: 0.3, title: 'Privacy Policy', description: 'Our commitment to protecting your data and privacy.' },
          ];
          
          const fs = await import('fs');
          const path = await import('path');
          const outDir = path.resolve(process.cwd(), 'dist');
          const indexHtmlPath = path.resolve(outDir, 'index.html');
          
          if (!fs.existsSync(indexHtmlPath)) return;
          
          const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

          // 1. Generate Sitemap
          const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route.url === '/' ? '' : route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;
          fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemapContent);

          // 2. Generate Robots.txt
          const robotsContent = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /google87984536fe5662da

Sitemap: ${hostname}/sitemap.xml`;
          fs.writeFileSync(path.resolve(outDir, 'robots.txt'), robotsContent);

          // 3. Generate Static HTML for each route (Soft SSG)
          for (const route of routes) {
            if (route.url === '/') continue; // root already handled by index.html
            
            const routeDir = path.join(outDir, route.url);
            if (!fs.existsSync(routeDir)) {
              fs.mkdirSync(routeDir, { recursive: true });
            }
            
            // Inject route specific meta tags into index.html copy
            let routeHtml = baseHtml;
            
            // Replace Title
            routeHtml = routeHtml.replace(/<title>(.*?)<\/title>/g, `<title>${route.title}</title>`);
            
            // Replace OG/Twitter titles
            routeHtml = routeHtml.replace(/<meta property="og:title" content="(.*?)"/g, `<meta property="og:title" content="${route.title}"`);
            routeHtml = routeHtml.replace(/<meta name="twitter:title" content="(.*?)"/g, `<meta name="twitter:title" content="${route.title}"`);

            // Replace Descriptions
            const descTag = `<meta name="description" content="${route.description}">`;
            const ogDescTag = `<meta property="og:description" content="${route.description}">`;
            const twDescTag = `<meta name="twitter:description" content="${route.description}">`;

            routeHtml = routeHtml.replace(/<meta name="description" content="(.*?)"/g, descTag);
            routeHtml = routeHtml.replace(/<meta property="og:description" content="(.*?)"/g, ogDescTag);
            routeHtml = routeHtml.replace(/<meta name="twitter:description" content="(.*?)"/g, twDescTag);

            // Update URL
            routeHtml = routeHtml.replace(/<meta property="og:url" content="(.*?)"/g, `<meta property="og:url" content="${hostname}${route.url}"`);
            routeHtml = routeHtml.replace(/<meta name="twitter:url" content="(.*?)"/g, `<meta name="twitter:url" content="${hostname}${route.url}"`);
            
            fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
          }
          
          console.log('✅ SEO Assets and Static Routes generated successfully!');
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
