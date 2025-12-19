"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/store/authstore";
import { articleApi } from "@/lib/api";
import { Article } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  ExternalLink,
  Loader2,
  FileText,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";

export default function ArticlesPage() {
  const router = useRouter();
  const { isAuthenticated, checkAuth, isLoading: authLoading } = useAuthStore();
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [togglingId, setTogglingId] = useState<number | null>(null);

  // Auth check
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast.error("You must be logged in to access this page");
      router.push("/login");
    }
  }, [isAuthenticated, authLoading, router]);

  // Helper function to build image URL
  const getImageUrl = (imagePath: string | null | undefined): string | null => {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || '';
    
    if (!backendUrl) {
      console.warn('No backend URL configured');
      return null;
    }
    
    const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    const cleanBackendUrl = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
    
    return `${cleanBackendUrl}${path}`;
  };

  // Fetch articles
  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const data = await articleApi.getArticles();
      setArticles(data);
      setFilteredArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      toast.error("Failed to load articles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles();
    }
  }, [isAuthenticated]);

  // Search filter
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredArticles(articles);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredArticles(
        articles.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.slug.toLowerCase().includes(query) ||
            article.excerpt?.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, articles]);

  // Toggle publish status
  const handleTogglePublish = async (article: Article) => {
    setTogglingId(article.id);
    try {
      await articleApi.togglePublish(article.id);
      setArticles((prev) =>
        prev.map((a) =>
          a.id === article.id ? { ...a, published: !a.published } : a
        )
      );
      toast.success(
        article.published ? "Article unpublished" : "Article published"
      );
    } catch (error) {
      console.error("Error toggling publish:", error);
      toast.error("Failed to update article status");
    } finally {
      setTogglingId(null);
    }
  };

  // Delete article
  const handleDelete = async () => {
    if (!deleteId) return;

    setIsDeleting(true);
    try {
      await articleApi.deleteArticle(deleteId);
      setArticles((prev) => prev.filter((a) => a.id !== deleteId));
      toast.success("Article deleted successfully");
    } catch (error) {
      console.error("Error deleting article:", error);
      toast.error("Failed to delete article");
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM dd, yyyy");
    } catch {
      return dateString;
    }
  };

  // Show loading screen while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-orange-600 animate-spin" />
          <p className="text-gray-400">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="space-y-6 p-4">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={fetchArticles}
            disabled={isLoading}
            className="cursor-pointer border-gray-800 bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
          <Link href="/Adminarticles/newpage">
            <Button className="bg-orange-600 hover:bg-orange-700 cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              New Article
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Articles</p>
          <p className="text-2xl font-bold text-white">{articles.length}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Published</p>
          <p className="text-2xl font-bold text-orange-600">
            {articles.filter((a) => a.published).length}
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Drafts</p>
          <p className="text-2xl font-bold text-yellow-500">
            {articles.filter((a) => !a.published).length}
          </p>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-orange-600 animate-spin" />
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <FileText className="w-12 h-12 mb-4 text-gray-700" />
            <p className="text-lg font-medium text-white">No articles found</p>
            <p className="text-sm text-gray-400">
              {searchQuery
                ? "Try a different search term"
                : "Create your first article to get started"}
            </p>
            {!searchQuery && (
              <Link href="/Adminarticles/newpage" className="mt-4">
                <Button className="bg-orange-600 hover:bg-orange-700 cursor-pointer">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Article
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800/50 border-gray-800 hover:bg-gray-800/50">
                <TableHead className="w-[400px] text-gray-400">Article</TableHead>
                <TableHead className="text-gray-400">Slug</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="w-[70px] text-gray-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => {
                const imageUrl = getImageUrl(article.featured_image);
                
                return (
                  <TableRow key={article.id} className="group border-gray-800 hover:bg-gray-800/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {/* Thumbnail */}
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={article.title}
                              fill
                              className="object-cover"
                              unoptimized={!imageUrl.startsWith('http')}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileText className="w-5 h-5 text-gray-600" />
                            </div>
                          )}
                        </div>
                        {/* Title */}
                        <div className="min-w-0">
                          <p className="font-medium text-white truncate max-w-[280px]">
                            {article.title}
                          </p>
                          {article.excerpt && (
                            <p className="text-sm text-gray-400 truncate max-w-[280px]">
                              {article.excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {article.slug}
                      </code>
                    </TableCell>
                    <TableCell>
                      {article.published ? (
                        <Badge className="bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 border-orange-600/50">
                          Published
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/50">
                          Draft
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-gray-400 text-sm">
                      {formatDate(article.created_at)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-gray-800"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
                          <DropdownMenuItem asChild className="text-gray-300 focus:text-white focus:bg-gray-800">
                            <Link href={`/articles/${article.slug}`} target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Article
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild className="text-gray-300 focus:text-white focus:bg-gray-800">
                            <Link href={`/Adminarticles/${article.id}/editpage`}>
                              <Pencil className="w-4 h-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleTogglePublish(article)}
                            disabled={togglingId === article.id}
                            className="text-gray-300 focus:text-white focus:bg-gray-800"
                          >
                            {togglingId === article.id ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : article.published ? (
                              <EyeOff className="w-4 h-4 mr-2" />
                            ) : (
                              <Eye className="w-4 h-4 mr-2" />
                            )}
                            {article.published ? "Unpublish" : "Publish"}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-gray-800" />
                          <DropdownMenuItem
                            onClick={() => setDeleteId(article.id)}
                            className="text-red-400 focus:text-red-300 focus:bg-red-600/10"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="bg-gray-900 border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Delete Article</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to delete this article? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting} className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}