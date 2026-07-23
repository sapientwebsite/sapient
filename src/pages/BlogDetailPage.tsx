import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import { motion } from 'unframer';
import { BLOG_POSTS } from '../data/blogs';

export default function BlogDetailPage({ slug }: { slug?: string }) {
  const currentPath = window.location.pathname;
  const currentSlug = slug || currentPath.split('/blog/')[1]?.replace(/\/$/, '');
  
  const post = BLOG_POSTS.find(p => p.slug === currentSlug) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation.Responsive
        variant="Desktop"
        style={{ width: '100%' }}
      />
      
      <main className="pt-32 pb-40">
        <article className="max-w-[1200px] mx-auto px-6">
          {/* Title */}
          <h1 className="text-[60px] font-bold text-[#313333] tracking-tight leading-[1.1] mb-6 font-['Plus_Jakarta_Sans']">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-3 text-[#5F6368] text-[20px] font-medium mb-12 font-['Satoshi']">
            <span>{post.date}</span>
            <span className="text-[12px] opacity-60">●</span>
            <span>{post.source}</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-16 shadow-2xl shadow-blue-900/10"
          >
            <img 
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-none text-[#333333] leading-relaxed space-y-8 text-lg font-['Satoshi']">
            {post.paragraphs.map((para, index) => {
              if (typeof para === 'string') {
                return <p key={index} className="whitespace-pre-wrap">{para}</p>;
              }
              
              if (para.type === 'header') {
                return (
                  <h3 key={index} className="text-2xl font-bold text-[#0F172A] mt-12 mb-6">
                    {para.content}
                  </h3>
                );
              }

              if (para.type === 'interview') {
                return (
                  <section key={index} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {para.speaker}
                    </h3>
                    <p>
                      {para.content}
                    </p>
                  </section>
                );
              }

              if (para.type === 'list') {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-3">
                    {para.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </article>
      </main>

      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}

