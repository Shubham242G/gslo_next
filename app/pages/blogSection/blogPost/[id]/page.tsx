'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
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

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Failed to fetch blog', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center mt-32 text-white">Loading...</p>;
  if (!blog) return <p className="text-center mt-32 text-white">Blog not found</p>;

  return (
    <div className="min-h-screen relative bg-[#0a0e27] text-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: "url('/assets/healthcare-back.jpg')" }}
      />
      
     <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/50 via-[#0a0e27]/60 to-[#050610]/70 z-0" />

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto p-8">
        

        {/* Blog Image */}
        {blog.image && (
          <motion.img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[500px] object-cover rounded-xl mb-8 shadow-2xl relative z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.title}
        </motion.h1>

        {/* Meta info */}
        <motion.div
          className="text-white text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blog.category} • {new Date(blog.createdAt).toLocaleDateString()} • {blog.author}
        </motion.div>

        {/* Content */}
        <div 
  className="max-w-none p-6 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
  style={{
    color: 'rgb(255, 255, 255)',
    WebkitTextFillColor: 'rgb(255, 255, 255)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
  }}
>
  <div 
    dangerouslySetInnerHTML={{ __html: blog.content }}
    style={{
      color: 'rgb(255, 255, 255) !important',
      WebkitTextFillColor: 'rgb(255, 255, 255) !important',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8) !important'
    }}
  />
</div>

      </div>
    </div>
  );
}
