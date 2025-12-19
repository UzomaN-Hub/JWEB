"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articleApi } from "@/lib/api";
import { Article } from "@/types";
import { Loader2, Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await articleApi.getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  // Helper function to build image URL
  const getImageUrl = (imagePath: string | null | undefined): string => {
    if (!imagePath) return '/placeholder.jpg';
    
    // If it's already a full URL, return it
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    // Try BACKEND_URL first, fallback to API_URL, then localhost
    const backendUrl = 
      process.env.NEXT_PUBLIC_BACKEND_URL || 
      process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 
      'http://localhost:8000';
    
    // Ensure the path starts with /
    const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    
    // Remove trailing slash from backend URL if present
    const cleanBackendUrl = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
    
    return `${cleanBackendUrl}${path}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="w-8 h-8 text-orange-600 animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl font-bold mb-2 text-white">Article not found</h1>
        <Link href="/" className="text-orange-600 hover:text-orange-500">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        {article.featured_image && (
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={getImageUrl(article.featured_image)}
              alt={article.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Title & Meta */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-xl text-gray-400 mb-4">{article.excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(article.created_at), "MMMM dd, yyyy")}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-orange-600 prose-strong:text-white prose-code:text-orange-400"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}