import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import BlogsText from '../framer/blogs-text';
import BlogList from '../framer/blog-list';

const BLOGS_BG = 'rgb(229, 235, 209)';

export default function BlogsPage() {
  const blogsBg = {
    backgroundColor: BLOGS_BG,
    backgroundImage: 'url(/sunburst-hq.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
  } as const;

  return (
    <div className="blogs-page min-h-screen flex flex-col overflow-x-hidden" style={blogsBg}>
      <Navigation.Responsive style={{ width: '100%' }} />

      <main className="w-full flex-1 pb-40 overflow-x-hidden pt-6 xl:pt-12">
        <BlogsText.Responsive style={{ width: '100%' }} />
        <div className="h-8 xl:h-16" />
        <BlogList.Responsive style={{ width: '100%' }} />
      </main>

      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
