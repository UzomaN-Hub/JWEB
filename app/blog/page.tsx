import Link from 'next/link';
import Image from 'next/image'; // Assuming you might use Next.js Image optimization later

// 1. Define the shape of a Blog Post
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'Business' | 'Education'; // Strict typing for your two niches
  readTime: string;
  imageUrl: string; 
}

// 2. Mock Data Fetching Function
async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: '1',
      slug: 'future-of-corporate-upskilling',
      title: 'The Future of Corporate Upskilling in 2024',
      excerpt: 'How leading companies are bridging the skills gap through hybrid education models and continuous learning platforms.',
      date: 'Nov 12, 2023',
      author: 'Dr. Sarah Mitchell',
      category: 'Education',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '2',
      slug: 'strategic-leadership-digital-age',
      title: 'Strategic Leadership in the Digital Age',
      excerpt: 'Navigating market volatility requires a new set of leadership tools. We explore the 5 pillars of modern management.',
      date: 'Nov 08, 2023',
      author: 'James Sterling',
      category: 'Business',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '3',
      slug: 'edtech-integration-strategies',
      title: 'Integrating EdTech: A Guide for Institutions',
      excerpt: 'Moving beyond Zoom: How to implement learning management systems that actually engage students and employees.',
      date: 'Oct 28, 2023',
      author: 'Elena Rodriguez',
      category: 'Education',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '4',
      slug: 'optimizing-supply-chains',
      title: 'Optimizing Supply Chains for Sustainability',
      excerpt: 'Why green business logistics are not just good for the planet, but essential for long-term profitability.',
      date: 'Oct 15, 2023',
      author: 'Michael Chen',
      category: 'Business',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    },
  ];
}

// Helper component for Category Badges
const CategoryBadge = ({ category }: { category: string }) => {
  const isBusiness = category === 'Business';
  // Blue for Business, Emerald (Green) for Education
  const colorClass = isBusiness 
    ? 'bg-blue-100 text-blue-800 border-blue-200' 
    : 'bg-emerald-100 text-emerald-800 border-emerald-200';

  return (
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${colorClass}`}>
      {category}
    </span>
  );
};

// 3. The Page Component
export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero / Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Insights & Intelligence
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Expert analysis on the convergence of 
            <span className="text-blue-600 font-semibold"> Business Strategy</span> and 
            <span className="text-emerald-600 font-semibold"> Educational Innovation</span>.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid of Posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden relative bg-gray-200">
                {/* Use Next/Image in production. Using standard img for this snippet. */}
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Meta: Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <CategoryBadge category={post.category} />
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    {/* Simple Clock Icon SVG */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer: Author & Date */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">{post.author}</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read Article 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}