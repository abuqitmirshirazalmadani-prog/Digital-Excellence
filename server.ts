import express from 'express';
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
  firebaseConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'firebase-applet-config.json'), 'utf-8'));
} catch (e) {
  console.warn('Firebase config not found, sitemap will be limited');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON and URL encoded bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

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

      if (firebaseConfig.apiKey) {
        // Initialize Firebase on server side for dynamic sitemap
        const firebaseApp = initializeApp(firebaseConfig);
        const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

        // Fetch blog posts from Firestore
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
    <priority>${route === '' ? '1.0' : route.startsWith('/blog/') ? '0.6' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

      res.header('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      // Fallback to static sitemap if dynamic fails
      const distPath = path.join(process.cwd(), 'dist');
      if (fs.existsSync(path.join(distPath, 'sitemap.xml'))) {
        res.sendFile(path.join(distPath, 'sitemap.xml'));
      } else {
        res.status(500).send('Error generating sitemap');
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built files from dist
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
