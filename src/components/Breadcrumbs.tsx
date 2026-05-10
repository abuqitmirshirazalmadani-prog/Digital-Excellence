import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-2">
      <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-500">
        <li className="flex items-center">
          <Link to="/" className="hover:text-[#B9FF66] transition-colors flex items-center">
            <Home size={14} className="mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center">
              <ChevronRight size={14} className="mx-1 text-[#444]" />
              {last ? (
                <span className="text-white font-bold">{label}</span>
              ) : (
                <Link to={to} className="hover:text-[#B9FF66] transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Schema.org BreadcrumbList markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://abuqitmirlabs.tech"
            },
            ...pathnames.map((value, index) => ({
              "@type": "ListItem",
              "position": index + 2,
              "name": value.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
              "item": `https://abuqitmirlabs.tech/${pathnames.slice(0, index + 1).join('/')}`
            }))
          ]
        })}
      </script>
    </nav>
  );
};

export default Breadcrumbs;
