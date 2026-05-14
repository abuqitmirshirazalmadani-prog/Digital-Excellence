import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') return null;

    return (
        <nav className="absolute top-24 left-0 right-0 z-40 px-6 md:px-10 py-4 pointer-events-none" aria-label="Breadcrumb">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] pointer-events-auto">
                <Link to="/" className="text-zinc-600 hover:text-[#ff5b36] transition-colors flex items-center gap-1.5">
                    <Home size={12} strokeWidth={3} />
                    <span>HQ</span>
                </Link>
                
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const name = value.replace(/-/g, ' ');

                    return (
                        <div key={to} className="flex items-center gap-2">
                            <ChevronRight size={10} strokeWidth={3} className="text-zinc-800" />
                            {last ? (
                                <span className="text-[#ff5b36]">{name}</span>
                            ) : (
                                <Link to={to} className="text-zinc-600 hover:text-[#ff5b36] transition-colors">
                                    {name}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
