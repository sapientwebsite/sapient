import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import BlogsText from '../framer/blogs-text';
import BlogList from '../framer/blog-list';

export default function BlogsPage() {
  const blogsBg = {
    backgroundColor: 'rgb(229, 235, 209)',
    backgroundImage: 'url(/vIFOS4BuUd5Dwrb6UZjsQHdbE.avif)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
  } as const;

  return (
    <div className="min-h-screen" style={blogsBg}>
      <Navigation 
        variant="Desktop"
        style={{ width: '100%' }}
      />
      <main className="w-full pt-20 pb-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-12">
            <BlogsText 
              variant="Desktop"
              style={{ width: '100%' }}
            />
            <BlogList 
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </main>
      <Footer 
        variant="Desktop" 
        style={{ width: '100%' }} 
      />
    </div>
  );
}
