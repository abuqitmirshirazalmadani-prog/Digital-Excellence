import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { db, collection, getDocs, query, orderBy, where, handleFirestoreError, OperationType } from '../lib/firebase';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  createdAt: any;
  slug: string;
  author: string;
  tags?: string[];
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const CATEGORIES = ["All", "AI", "Software", "Business", "App", "Development"];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsQuery = query(
                    collection(db, 'posts'),
                    where('published', '==', true),
                    orderBy('createdAt', 'desc')
                );
                const snapshot = await getDocs(postsQuery);
                const fetchedPosts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Post[];
                setPosts(fetchedPosts);
            } catch (error) {
                handleFirestoreError(error, OperationType.LIST, 'posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDateShort = (timestamp: any) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short'
        });
    };

    // Extract categories/tags for the cloud
    const allTags = Array.from(new Set(posts.flatMap(p => p.tags || [])));
    const filteredPosts = selectedCategory === 'All' 
        ? posts 
        : posts.filter(p => p.category === selectedCategory);

    const featuredPost = posts[0];

    return (
        <div className="min-h-screen bg-[#050505]">
            <Helmet>
                <title>Blog & Tech Journal | Insights ABUQITMIRLABS</title>
                <meta name="description" content="Explore technical insights, AI trends, and software engineering strategy at the ABUQITMIRLABS .TECH Journal. Stay ahead of the curve with our expert analysis." />
                <link rel="canonical" href="https://abuqitmirlabs.tech/blog" />
                
                {/* OG Tags */}
                <meta property="og:title" content="Blog & Tech Journal | ABUQITMIRLABS" />
                <meta property="og:description" content="Explore technical insights, AI trends, and software engineering strategy at the ABUQITMIRLABS .TECH Journal." />
                <meta property="og:url" content="https://abuqitmirlabs.tech/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

                {/* Twitter Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog & Tech Journal | ABUQITMIRLABS" />
                <meta name="twitter:description" content="Explore technical insights, AI trends, and software engineering strategy at the ABUQITMIRLABS .TECH Journal." />
                <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
            </Helmet>
            <Header />
            <Breadcrumbs />
            <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Latest
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">Discover our Insights</h1>
                    <p className="text-zinc-500 text-lg md:text-xl font-medium">Stay up-to-date with our latest blog posts.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : posts.length > 0 ? (
                    <div className="space-y-24">
                        {/* FEATURED POST - New Design */}
                        {featuredPost && (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 group shadow-2xl"
                            >
                                <div className="flex flex-col">
                                    {/* Image Section - ALWAYS TOP */}
                                    <div className="aspect-video w-full overflow-hidden p-6 md:p-10">
                                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl">
                                            <img 
                                                src={`${featuredPost.coverImage || 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?auto=format&fit=crop&q=80'}&w=1200&fm=webp`} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                alt={`futuristic ${featuredPost.title} featured article cover image`}
                                                decoding="async"
                                                fetchPriority="high"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest">Featured Story</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section - ALWAYS BELOW */}
                                    <div className="px-8 pb-12 md:px-16 md:pb-20 flex flex-col items-center text-center">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-widest">{featuredPost.category || 'All'}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-8 group-hover:text-blue-400 transition-colors max-w-4xl">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                                            {featuredPost.excerpt}
                                        </p>
                                        
                                        <div className="flex flex-wrap items-center justify-center gap-10 mb-10 w-full pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-white/5 p-0.5 border border-white/10 ring-4 ring-blue-500/10">
                                                    <img src="https://i.postimg.cc/FRZNKBLZ/abuqitmir222.png" alt="ABUQITMIRLABS.TECH Shiraz Almadani" className="w-full h-full rounded-full object-cover object-top" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-white text-xs font-black uppercase tracking-tight">ABUQITMIRLABS .TECH Shiraz Almadani</div>
                                                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{formatDateShort(featuredPost.createdAt)}</div>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                                                <Clock size={14} className="text-blue-500" />
                                                <span>5 min read</span>
                                            </div>
                                            <Link to={`/blog/${featuredPost.slug}`} className="px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-tight text-xs transition-all flex items-center gap-3 active:scale-95 hover:bg-blue-500 hover:text-white">
                                                Read Story <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ALL BLOG POSTS SECTION */}
                        <div className="space-y-12">
                            <div className="flex items-end justify-between border-b border-white/5 pb-8">
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">The journal</h3>
                                <div className="text-zinc-600 text-xs font-black uppercase tracking-widest">{filteredPosts.length} Articles Found</div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Left Category Sidebar */}
                                <aside className="lg:w-64 shrink-0 space-y-8">
                                    <div>
                                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 pl-2">Filter by Category</h4>
                                        <div className="flex lg:flex-col flex-wrap gap-2">
                                            {CATEGORIES.map(cat => (
                                                <button 
                                                    key={cat}
                                                    onClick={() => setSelectedCategory(cat)}
                                                    className={`text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                                        selectedCategory === cat 
                                                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105 ml-2' 
                                                        : 'text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent'
                                                    }`}
                                                >
                                                    {cat === 'All' ? 'All Insights' : cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="hidden lg:block p-8 rounded-[2.5rem] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/5">
                                        <h5 className="text-white text-xs font-black uppercase tracking-tight mb-4">Stay Informed</h5>
                                        <p className="text-zinc-500 text-[10px] leading-relaxed mb-6 font-medium">Join our community of engineers and innovators. No spam, just pure technical insights.</p>
                                        <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Subscribe</button>
                                    </div>
                                </aside>

                                {/* Right Posts Grid */}
                                <div className="flex-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                        {filteredPosts.map((post, idx) => (
                                            <motion.article 
                                                key={post.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="group"
                                            >
                                                <Link to={`/blog/${post.slug}`}>
                                                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 bg-zinc-900 group-hover:border-white/10 transition-colors shadow-lg">
                                                        <img 
                                                            src={`${post.coverImage || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'}&w=800&fm=webp`} 
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                                            alt={`futuristic ${post.title} blog post thumbnail`}
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 px-2">
                                                        <span className="text-blue-500">{post.category || 'All'}</span>
                                                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                                        <span>{formatDateShort(post.createdAt)}</span>
                                                    </div>
                                                    <h4 className="text-3xl font-black text-white uppercase leading-[0.9] tracking-tighter group-hover:text-blue-400 transition-colors px-2">
                                                        {post.title}
                                                    </h4>
                                                </Link>
                                            </motion.article>
                                        ))}
                                    </div>

                                    {filteredPosts.length === 0 && (
                                        <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-white/5">
                                            <p className="text-zinc-500 text-xl font-black uppercase tracking-widest">No articles in this category</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white/5 rounded-[4rem] border border-white/10">
                        <p className="text-zinc-500 text-2xl font-black uppercase tracking-[0.2em]">The journal is currently empty</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
