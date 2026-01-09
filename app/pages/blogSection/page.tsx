'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Blog {
    _id: string;
    title: string;
    content: string;
    author: string;
    category: string;
    image?: string;
    createdAt: string;
}

interface PaginatedBlogs {
    blogs: Blog[];
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
}

export default function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    /* ------------------ FETCH BLOGS ------------------ */
    const fetchBlogs = async (pageNumber = 1) => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?page=${pageNumber}&limit=6`);
            const data: PaginatedBlogs = await res.json();

            // ✅ Use the `blogs` array from backend
            setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
            setPage(data.currentPage || 1);
            setTotalPages(data.totalPages || 1);
        } catch (error) {
            console.error('❌ Failed to fetch blogs', error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs(page);
    }, [page]);

    /* ------------------ ANIMATIONS ------------------ */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#050610] text-white relative">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
                style={{ backgroundImage: "url('/assets/healthcare-back.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/50 via-[#0a0e27]/60 to-[#050610]/70 z-0" />

            {/* Content */}
            <div className="relative z-10">
                {/* Hero */}
                <section className="relative pt-48 pb-32 px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1
                            className="text-5xl md:text-7xl font-light tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Legal Insights & Blogs
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-300 max-w-2xl mx-auto mt-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Expert perspectives, legal updates, and practical guidance from our experienced professionals.
                        </motion.p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16 px-8 pb-24">
                    <div className="max-w-[1400px] mx-auto">
                        {loading ? (
                            <p className="text-center text-gray-400">Loading blogs...</p>
                        ) : blogs.length === 0 ? (
                            <p className="text-center text-gray-400">No blogs found.</p>
                        ) : (
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {blogs.map((blog) => (
                                    <Link
                                        key={blog._id}
                                        href={`/pages/blogSection/blogPost/${blog._id}`}
                                        className="block"
                                    >
                                        <motion.div
                                            variants={cardVariants}
                                            whileHover={{ y: -5 }}
                                            className="group relative bg-[#0d1133]/40 backdrop-blur-sm border-2 border-gray-700/50 rounded-lg p-8 h-full hover:border-white/50 hover:bg-[#0d1133]/60 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                                        >
                                            <h3 className="text-2xl font-normal mb-3 tracking-tight text-white">
                                                {blog.title}
                                            </h3>

                                            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                                {blog.content.replace(/<[^>]+>/g, '').slice(0, 160)}...
                                            </p>

                                            <div className="flex justify-between items-center text-xs text-gray-300">
                                                <span>{blog.category}</span>
                                                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                            </div>

                                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                                Read More
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-12 gap-3">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => setPage(i + 1)}
                                        className={`px-4 py-2 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
