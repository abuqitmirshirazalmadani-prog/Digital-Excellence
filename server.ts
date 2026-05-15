import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import Firebase config - Handle case where file might not exist in dev
let firebaseConfig: any = {};
try {
  const configPath = path.join(__dirname, 'firebase-applet-config.json');
  if (fs.existsSync(configPath)) {
    firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
} catch (e) {
  console.warn('Firebase config not found, sitemap will be limited');
}

// Initialize Firebase once for server-side use
let firebaseApp: any = null;
let db: any = null;
if (firebaseConfig.apiKey) {
  try {
    firebaseApp = initializeApp(firebaseConfig);
    db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
    console.log('Firebase initialized in server for sitemap');
  } catch (e) {
    console.error('Firebase server-side init error:', e);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use compression middleware
  app.use(compression());

  // Use JSON and URL encoded bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check route
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      time: new Date().toISOString(),
      env: process.env.NODE_ENV,
      port: PORT,
      firebaseEnabled: !!db
    });
  });

  // Dynamic Sitemap Route
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const staticRoutes = [
        '',
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
        '/blog'
      ];

      let blogRoutes: string[] = [];

      if (db) {
        // Fetch blog posts from Firestore using already initialized db
        const postsQuery = query(collection(db, 'posts'), where('published', '==', true));
        const snapshot = await getDocs(postsQuery);
        blogRoutes = snapshot.docs.map(doc => `/blog/${doc.data().slug}`);
      }

      const allRoutes = [...staticRoutes, ...blogRoutes];
      const baseUrl = 'https://abuqitmirlabs.tech';
      
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

      res.header('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      // Fallback to static sitemap if dynamic fails
      const distPath = path.resolve(__dirname, 'dist');
      const staticSitemap = path.join(distPath, 'sitemap.xml');
      if (fs.existsSync(staticSitemap)) {
        res.sendFile(staticSitemap);
      } else {
        res.status(500).send('Error generating sitemap');
      }
    }
  });

  const distPath = path.resolve(__dirname, 'dist');
  let vite: any = null;

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built files from dist
    // Ensure we serve files followed by index.html as fallback
    app.use(express.static(distPath));
  }

  // GLOBAL SPA Fallback
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    // Skip API routes
    if (url.startsWith('/api/')) {
      return next();
    }

    try {
      if (process.env.NODE_ENV !== 'production' && vite) {
        // Dev fallback
        const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const html = await vite.transformIndexHtml(url, template);
        return res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } else {
        // Prod fallback - ALWAYS serve index.html for unknown routes to support SPA
        const indexPath = path.join(distPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          return res.status(200).sendFile(indexPath);
        } else {
          // Absolute fallback to root index if dist/index.html is missing for some reason
          const rootIndex = path.resolve(__dirname, 'index.html');
          if (fs.existsSync(rootIndex)) {
            return res.status(200).sendFile(rootIndex);
          }
          return res.status(404).send('Not Found');
        }
      }
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
