import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    auth, googleProvider, signInWithPopup, signOut, 
    db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp 
} from '../lib/firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { 
    LayoutDashboard, FileText, Plus, LogOut, Shield, 
    CheckCircle, AlertCircle, Loader2, ArrowLeft, 
    Globe, Clock, Edit, Trash2, ExternalLink 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ADMIN_EMAIL = "abuqitmirshirazalmadani@gmail.com";
const ADMIN_UID = "cRAf1wZFRRXMVadj7RDaC8WM4152";

const AdminDashboard = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [isInIframe, setIsInIframe] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    const [fetchingPosts, setFetchingPosts] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');

    const CATEGORIES = ["AI", "Software", "Business", "App", "Development"];

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        author: 'ABUQITMIRLABS .TECH Shiraz Almadani',
        category: 'AI',
        published: true,
        coverImage: '',
        tags: '' 
    });

    const fetchPosts = async () => {
        setFetchingPosts(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const p = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(p);
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setFetchingPosts(false);
        }
    };

    useEffect(() => {
        if (user && (user.email === ADMIN_EMAIL || user.uid === ADMIN_UID)) {
            fetchPosts();
        }
    }, [user]);

    const handleEdit = (post: any) => {
        setEditingId(post.id);
        setFormData({
            title: post.title || '',
            slug: post.slug || '',
            excerpt: post.excerpt || '',
            content: post.content || '',
            author: post.author || 'ABUQITMIRLABS .TECH Shiraz Almadani',
            category: post.category || 'AI',
            published: post.published ?? true,
            coverImage: post.coverImage || '',
            tags: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || '')
        });
        setActiveTab('create');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Delete this post forever?')) return;
        try {
            await deleteDoc(doc(db, 'posts', id));
            setPosts(posts.filter(p => p.id !== id));
            setStatus({ type: 'success', message: 'Post deleted' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Delete failed' });
        }
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        const slug = generateSlug(title);
        setFormData({ ...formData, title, slug });
    };

    useEffect(() => {
        // Detect iframe
        setIsInIframe(window.self !== window.top);

        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) {
                setLoginError(null);
            }
        });

        // Handle redirect result
        getRedirectResult(auth).catch((error) => {
            console.error("Redirect Error:", error);
            setLoginError(`Redirect login failed: ${error.message}`);
        });

        return () => unsubscribe();
    }, []);

    const handleOpenInNewTab = () => {
        window.open(window.location.href, '_blank');
    };

    const handleLogin = async () => {
        setIsLoginLoading(true);
        setLoginError(null);
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error: any) {
            console.error("Login Error:", error);
            let message = `Sign-in failed (${error.code || 'unknown error'}).`;
            
            if (error.code === 'auth/popup-blocked') {
                message = "Sign-in popup was blocked. Please allow popups or try the Redirect method below.";
            } else if (error.code === 'auth/popup-closed-by-user') {
                message = "Sign-in window was closed. If popups aren't working, try the Redirect method below.";
            } else if (error.code === 'auth/cancelled-closure-interaction') {
                message = "Sign-in was cancelled.";
            } else if (error.code === 'auth/operation-not-allowed') {
                message = "Google Sign-In is not enabled in your Firebase Project.";
            } else if (error.code === 'auth/unauthorized-domain') {
                message = "This domain is not authorized for Firebase Auth.";
            }
            
            setLoginError(message);
        } finally {
            setIsLoginLoading(false);
        }
    };

    const handleRedirectLogin = async () => {
        setIsLoginLoading(true);
        try {
            await signInWithRedirect(auth, googleProvider);
        } catch (error: any) {
            setLoginError(`Redirect failed: ${error.message}`);
            setIsLoginLoading(false);
        }
    };

    const handleLogout = () => signOut(auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthorized = user && (user.email === ADMIN_EMAIL || user.uid === ADMIN_UID);
        
        if (!isAuthorized || !user.emailVerified) {
            setStatus({ type: 'error', message: 'Unauthorized action or unverified email' });
            return;
        }

        setIsSubmitting(true);
        setStatus(null);

        try {
            const tagsArray = formData.tags.split(',').map(tag => tag.trim().replace(/^#/, '')).filter(tag => tag !== '');
            
            if (editingId) {
                await updateDoc(doc(db, 'posts', editingId), {
                    ...formData,
                    tags: tagsArray,
                    updatedAt: serverTimestamp()
                });
                setStatus({ type: 'success', message: 'Post updated successfully!' });
            } else {
                const docRef = await addDoc(collection(db, 'posts'), {
                    ...formData,
                    tags: tagsArray,
                    authorId: user.uid,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp()
                });
                setStatus({ type: 'success', message: `Post published successfully! ID: ${docRef.id}` });
            }

                setFormData({
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    author: 'ABUQITMIRLABS .TECH Shiraz Almadani',
                    category: 'AI',
                    published: true,
                    coverImage: '',
                    tags: ''
                });
            setEditingId(null);
            fetchPosts();
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Failed to create post' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <Loader2 className="text-blue-500 animate-spin" size={48} />
        </div>
    );

    const renderContent = () => {
        console.log("AdminDashboard: Rendering content, user:", user?.email);
        
        if (!user) {
            return (
                <div className="flex items-center justify-center min-h-[60vh] p-6">
                    <div className="max-w-md w-full bg-[#111] border-4 border-white/20 p-10 rounded-3xl text-center shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
                        <Shield className="mx-auto text-blue-500 mb-6" size={80} />
                        <h1 className="text-4xl font-black text-white uppercase mb-4 tracking-tighter">Admin Portal</h1>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Identity verification required. Please sign in with your authorized technical administrator account.</p>
                        
                        <AnimatePresence>
                            {loginError && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6 flex items-center gap-3 text-sm font-bold text-left overflow-hidden"
                                >
                                    <AlertCircle className="shrink-0" size={20} />
                                    <div className="break-words w-full">{loginError}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-4">
                            {isInIframe ? (
                                <>
                                    <button 
                                        onClick={handleOpenInNewTab}
                                        className="w-full bg-white text-black font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-base shadow-lg active:scale-95 flex items-center justify-center gap-3 mb-2"
                                    >
                                        <Globe size={20} /> Launch in New Tab
                                    </button>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                        Required for secure authentication
                                    </p>
                                    <div className="relative">
                                        <hr className="border-white/10" />
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] px-4 text-[10px] font-black text-white/20">OR TRY ANYWAY</span>
                                    </div>
                                </>
                            ) : null}

                            <button 
                                onClick={handleLogin}
                                disabled={isLoginLoading}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-base shadow-lg shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-3"
                            >
                                {isLoginLoading ? <Loader2 className="animate-spin" /> : null}
                                {isLoginLoading ? 'Connecting...' : 'Sign in with Google'}
                            </button>

                            <button 
                                onClick={handleRedirectLogin}
                                disabled={isLoginLoading}
                                className="w-full bg-white/5 hover:bg-white/10 text-gray-400 font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                            >
                                <Globe size={14} /> Redirect Login Method
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                            <div className="text-left bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <AlertCircle size={12} /> Troubleshoot Network Error
                                </h4>
                                <ul className="text-[10px] text-gray-500 font-bold uppercase tracking-tight leading-relaxed list-disc ml-4 space-y-1">
                                    <li>Open this app in a <span className="text-blue-500">New Tab</span> (Required)</li>
                                    <li>Disable Ad-Blockers / Brave Shields</li>
                                    <li>Enable "Allow Popups" in browser settings</li>
                                    <li>Ensure you are using a Private/Incognito window if problems persist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        const isAuthorized = user && (user.email === ADMIN_EMAIL || user.uid === ADMIN_UID);

        if (!isAuthorized || (user.email === ADMIN_EMAIL && !user.emailVerified)) {
            return (
                <div className="flex items-center justify-center min-h-[60vh] p-6">
                    <div className="max-w-md w-full bg-[#0a0a0a] border border-red-500/30 p-8 rounded-3xl text-center brutalist-shadow border-4 border-red-500/10">
                        <AlertCircle className="mx-auto text-red-500 mb-6" size={64} />
                        <h1 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Access Denied</h1>
                        <p className="text-gray-400 mb-8 font-medium">
                            Administrative access is strictly restricted.
                            {!isAuthorized ? ` Your account (${user.email || user.uid}) is not authorized.` : " Please verify your email to continue."}
                        </p>
                        <button 
                            onClick={handleLogout}
                            className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-sm"
                        >
                            Log Out & Try Admin Account
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar: Desktop Only */}
                    <aside className="hidden md:flex flex-col gap-4 w-64 shrink-0">
                        <button 
                            onClick={() => {
                                setActiveTab('create');
                                setEditingId(null);
                                setFormData({
                                    title: '', slug: '', excerpt: '', content: '', 
                                    author: 'ABUQITMIRLABS .TECH Shiraz Almadani', category: 'AI', 
                                    published: true, coverImage: '', tags: ''
                                });
                            }}
                            className={`w-full font-bold py-4 px-6 rounded-xl flex items-center gap-3 transition-all active:scale-95 shadow-lg ${activeTab === 'create' ? 'bg-blue-600 text-white shadow-blue-900/20' : 'bg-zinc-900 text-gray-400 border border-white/5'}`}
                        >
                            <Plus size={24} />
                            <span className="uppercase tracking-widest text-xs font-black">{editingId ? 'EDITING POST' : 'NEW POST'}</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('list')}
                            className={`w-full font-bold py-4 px-6 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'list' ? 'bg-zinc-800 text-white border-blue-500/50 border' : 'bg-zinc-950 text-gray-400 border border-white/5'}`}
                        >
                            <FileText size={20} />
                            <span className="uppercase tracking-widest text-xs font-black">ALL POSTS ({posts.length})</span>
                        </button>

                        <div className="mt-auto pt-10">
                             <button 
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-400 transition-colors font-black uppercase tracking-widest text-[10px] py-4 border border-red-500/10 rounded-xl bg-red-500/5 shadow-sm"
                            >
                                <LogOut size={14} /> Log Out Account
                            </button>
                        </div>
                    </aside>

                    {/* Editor Container */}
                    <section className="flex-grow w-full">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">Build v2.4</div>
                            </div>

                            {/* Section Title */}
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="text-blue-500 font-light text-4xl leading-none">{editingId ? '✎' : '+'}</div>
                                    <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
                                        {activeTab === 'create' ? (editingId ? 'Update Blog Post' : 'Create New Blog Post') : 'Manage Contents'}
                                    </h2>
                                </div>
                                {editingId && (
                                    <button 
                                        onClick={() => {
                                            setEditingId(null);
                                            setFormData({
                                                title: '', slug: '', excerpt: '', content: '', 
                                                author: 'ABUQITMIRLABS .TECH Shiraz Almadani', category: 'AI', 
                                                published: true, coverImage: '', tags: ''
                                            });
                                        }}
                                        className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-4 py-2 rounded-lg"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {activeTab === 'create' ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <AnimatePresence>
                                            {status && (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className={`p-5 rounded-2xl mb-8 flex items-center gap-3 font-bold uppercase tracking-widest text-[10px] ${
                                                        status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,44,44,0.1)]'
                                                    }`}
                                                >
                                                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                                    {status.message}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Create Form */}
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            {/* Category & Title */}
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                                <div className="md:col-span-4 space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Post Category</label>
                                                    <select 
                                                        className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-white font-bold appearance-none cursor-pointer"
                                                        value={formData.category}
                                                        onChange={e => setFormData({...formData, category: e.target.value})}
                                                    >
                                                        {CATEGORIES.map(cat => (
                                                            <option key={cat} value={cat}>{cat}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="md:col-span-8 space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex justify-between">
                                                        Post Title
                                                        <span className="text-blue-500/50">Required</span>
                                                    </label>
                                                    <input 
                                                        className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 text-white font-medium" 
                                                        placeholder="Future-Proofing with AI" 
                                                        type="text"
                                                        required
                                                        value={formData.title}
                                                        onChange={handleTitleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Slug */}
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Slug (URL Friendly)</label>
                                                <input 
                                                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 text-gray-400 font-mono text-sm" 
                                                    placeholder="future-proofing-with-ai" 
                                                    type="text"
                                                    required
                                                    value={formData.slug}
                                                    onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                                                />
                                            </div>

                                            {/* Cover Image */}
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex justify-between items-center">
                                                    Cover Image URL
                                                    {formData.coverImage && <span className="text-green-500 animate-pulse">● LIVE PREVIEW</span>}
                                                </label>
                                                <input 
                                                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 text-white" 
                                                    placeholder="https://images.unsplash.com/..." 
                                                    type="url"
                                                    value={formData.coverImage}
                                                    onChange={e => setFormData({...formData, coverImage: e.target.value})}
                                                />
                                                
                                                {/* Dynamic Image Preview */}
                                                <AnimatePresence>
                                                    {formData.coverImage && (
                                                        <motion.div 
                                                            initial={{ opacity: 0, y: 10, height: 0 }}
                                                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                            exit={{ opacity: 0, y: 10, height: 0 }}
                                                            className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-[#151515] group"
                                                        >
                                                            <img 
                                                                src={formData.coverImage} 
                                                                alt="futuristic blog post cover preview" 
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                                onError={(e) => {
                                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1a1a1a/3b82f6?text=Invalid+Image+URL';
                                                                }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                                <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Visual Preview Verified</p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Excerpt (Brief Summary)</label>
                                                <textarea 
                                                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 resize-none text-white leading-relaxed" 
                                                    placeholder="Enter a short catchy summary for the card view..." 
                                                    rows={3}
                                                    required
                                                    value={formData.excerpt}
                                                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                                                ></textarea>
                                            </div>

                                            {/* Full Content */}
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex justify-between">
                                                    Full Content (Markdown Supported)
                                                    <span className="text-zinc-600 lowercase cursor-help hover:text-blue-500 transition-colors">Supports H1 (#), H2 (##), etc.</span>
                                                </label>
                                                <textarea 
                                                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-[2rem] px-8 py-8 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 text-white min-h-[400px] font-mono text-base leading-relaxed" 
                                                    placeholder="Write your article content here..." 
                                                    required
                                                    value={formData.content}
                                                    onChange={e => setFormData({...formData, content: e.target.value})}
                                                ></textarea>
                                            </div>

                                            {/* Hashtags - Bottom of Form */}
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Hashtags (Comma separated)</label>
                                                <input 
                                                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-700 text-blue-400 font-bold" 
                                                    placeholder="#AI, #Tech, #Innovation" 
                                                    type="text"
                                                    value={formData.tags}
                                                    onChange={e => setFormData({...formData, tags: e.target.value})}
                                                />
                                            </div>

                                            {/* Form Actions */}
                                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between">
                                                <div className="flex items-center gap-3 text-zinc-600">
                                                    <Clock size={14} />
                                                    <p className="text-[10px] font-black uppercase tracking-widest">Autosave enabled</p>
                                                </div>
                                                <div className="flex gap-4 w-full md:w-auto">
                                                    <button 
                                                        type="button"
                                                        className="flex-1 md:flex-none px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 font-black uppercase tracking-widest text-[10px] transition-all"
                                                    >
                                                        Save Draft
                                                    </button>
                                                    <button 
                                                        type="submit" 
                                                        disabled={isSubmitting}
                                                        className="flex-1 md:flex-none px-16 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900/50 text-white font-black uppercase tracking-widest text-xs transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-95 flex items-center justify-center gap-3"
                                                    >
                                                        {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : null}
                                                        {isSubmitting ? 'Saving...' : (editingId ? 'Update Changes' : 'Publish Post Now')}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </motion.div>
                    ) : (
                        /* Post Listing */
                        <motion.div 
                            key="list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            {fetchingPosts ? (
                                <div className="text-center py-20 bg-white/5 rounded-3xl">
                                    <Loader2 className="animate-spin mx-auto text-blue-500 mb-4" size={32} />
                                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Synchronizing Post Database...</p>
                                </div>
                            ) : posts.length === 0 ? (
                                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                                     <p className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em]">No Posts found in the system</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                    {posts.map(post => (
                                        <div key={post.id} className="bg-zinc-950/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all group flex flex-col md:flex-row items-center gap-6">
                                            <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-zinc-900 border border-white/5">
                                                <img src={post.coverImage} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt={`thumbnail for ${post.title}`} />
                                            </div>
                                            <div className="flex-1 text-center md:text-left">
                                                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                                    <span className="text-[8px] font-black px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-widest">{post.category}</span>
                                                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{post.slug}</span>
                                                </div>
                                                <h3 className="text-lg font-black text-white uppercase tracking-tight line-clamp-1">{post.title}</h3>
                                            </div>
                                            <div className="flex gap-3">
                                                <Link 
                                                    to={`/blog/${post.slug}`} 
                                                    target="_blank"
                                                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 flex items-center justify-center transition-all"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                                <button 
                                                    onClick={() => handleEdit(post)}
                                                    className="w-12 h-12 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white flex items-center justify-center transition-all"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(post.id)}
                                                    className="w-12 h-12 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                            </AnimatePresence>
                        </motion.div>
                    </section>
                </div>

                {/* Mobile Navigation Bar */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 px-8 py-4 flex justify-around items-center z-50">
                    <button className="flex flex-col items-center gap-1.5 text-blue-500">
                        <Plus size={24} />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">New</span>
                    </button>
                    <button className="flex flex-col items-center gap-1.5 text-zinc-600">
                        <FileText size={24} />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Posts</span>
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="flex flex-col items-center gap-1.5 text-red-500/50"
                    >
                        <LogOut size={24} />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Exit</span>
                    </button>
                </nav>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <div className="pt-32 pb-20 px-6">
                {renderContent()}
            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
