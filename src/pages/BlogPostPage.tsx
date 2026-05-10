import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { db, collection, getDocs, query, where, handleFirestoreError, OperationType } from '../lib/firebase';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Post {
  title: string;
  content: string;
  coverImage?: string;
  createdAt: any;
  author: string;
  tags?: string[];
}

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            try {
                const q = query(collection(db, 'posts'), where('slug', '==', slug), where('published', '==', true));
                const snapshot = await getDocs(q);
                if (!snapshot.empty) {
                    setPost(snapshot.docs[0].data() as Post);
                }
            } catch (error) {
                handleFirestoreError(error, OperationType.GET, `posts/${slug}`);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen bg-[#f8f9fa] text-black flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-black uppercase mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-blue-500 font-bold uppercase tracking-widest flex items-center gap-2">
                <ArrowLeft size={18} /> Back to Blog
            </Link>
        </div>
    );

    const formatDate = (timestamp: any) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = post?.title || 'Check out this post from ABUQITMIRLABS.TECH Collective';
        
        const shareLinks: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
            return;
        }

        if (shareLinks[platform]) {
            window.open(shareLinks[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f4f7]">
            <Header />
            
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors uppercase tracking-widest text-xs font-black mb-12 group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to The Journal
                        </Link>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-12">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-[10px] text-zinc-500 uppercase tracking-widest font-black border-y border-black/5 py-8">
                            <span className="flex items-center gap-2"><Calendar size={14} className="text-blue-500" /> {formatDate(post.createdAt)}</span>
                            <span className="flex items-center gap-2 text-black">{post.author}</span>
                            <div className="flex items-center gap-4 ml-auto">
                                <span className="hidden md:inline-block">Share:</span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => handleShare('twitter')}
                                        className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
                                        title="Share on Twitter"
                                    >
                                        <Twitter size={14} />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('linkedin')}
                                        className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
                                        title="Share on LinkedIn"
                                    >
                                        <Linkedin size={14} />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('facebook')}
                                        className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
                                        title="Share on Facebook"
                                    >
                                        <Facebook size={14} />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('copy')}
                                        className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all shadow-sm"
                                        title="Copy Link"
                                    >
                                        <LinkIcon size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {post.coverImage && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-video w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-blue-500/5 group"
                        >
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        </motion.div>
                    )}

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[3rem] p-8 md:p-20 shadow-xl shadow-black/5 border border-black/5 prose prose-blue max-w-none prose-headings:text-black prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-zinc-600 prose-p:leading-relaxed prose-lg prose-img:rounded-3xl prose-img:shadow-lg prose-pre:bg-zinc-950 prose-pre:rounded-2xl prose-strong:text-black prose-strong:font-black prose-a:text-blue-600 prose-a:font-bold hover:prose-a:text-blue-700"
                    >
                        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
                    </motion.div>

                    {/* Hashtags at the Bottom */}
                    {post.tags && (
                        <div className="mt-20">
                            <div className="bg-[#eff6ff]/60 border border-blue-400/10 rounded-[2.5rem] p-8 md:p-10 flex flex-wrap gap-x-6 gap-y-4 overflow-hidden">
                                {(() => {
                                    const allTags = Array.isArray(post.tags) 
                                        ? post.tags.flatMap(t => String(t).split(/[\s,#]+/).filter(Boolean))
                                        : String(post.tags).split(/[\s,#]+/).filter(Boolean);
                                    
                                    return allTags.map((tag, idx) => {
                                        const cleanTag = tag.trim().toUpperCase();
                                        if (!cleanTag) return null;
                                        return (
                                            <span 
                                                key={`${tag}-${idx}`} 
                                                className="inline-block text-[11px] md:text-xs font-black text-blue-600 uppercase tracking-[0.2em] break-all whitespace-normal hover:text-blue-700 transition-colors"
                                            >
                                                #{cleanTag}
                                            </span>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    )}

                    <div className="mt-20 pt-10 border-t border-black/5">
                        <div className="bg-white border border-black/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
                            <div className="h-24 w-24 bg-zinc-950 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                                <img src="https://i.postimg.cc/FRZNKBLZ/abuqitmir222.png" alt="ABUQITMIRLABS.TECH Shiraz Almadani" className="w-full h-full object-cover object-top" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-tight">ABUQITMIRLABS.TECH Shiraz Almadani</h3>
                                <p className="text-zinc-500 leading-relaxed max-w-xl">Lead Architect & Engineering Consultant. Specializing in high-performance digital ecosystems, AI-driven architectures, and building the future of software development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
