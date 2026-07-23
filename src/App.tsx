import { useState, useEffect } from 'react';
import './framer/styles.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import SuccessPage from './pages/SuccessPage';
import KYMPage from './pages/KYMPage';
import CPCPage from './pages/CPCPage';
import BlogsPage from './pages/BlogsPage';
import DisclosurePage from './pages/DisclosurePage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import KYCPage from './pages/KYCPage';
import BlogDetailPage from './pages/BlogDetailPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Also listen for clicks on links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        // Internal link
        const url = new URL(anchor.href);
        if (url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          setCurrentPath(url.pathname);
        }
      }
    };

    window.addEventListener('click', handleLinkClick);

    // Update path every 100ms as a fallback for non-triggering navigation
    const interval = setInterval(handleLocationChange, 100);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('click', handleLinkClick);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Simple routing logic
  if (currentPath === '/about-us' || currentPath === '/about') {
    return <AboutUsPage />;
  }
  
  if (currentPath === '/contact' || currentPath === '/contact-us') {
    return <ContactUsPage />;
  }

  if (currentPath === '/success-form') {
    return <SuccessPage />;
  }

  if (currentPath === '/kym') {
    return <KYMPage />;
  }

  if (currentPath === '/cpc') {
    return <CPCPage />;
  }

  if (currentPath === '/blog' || currentPath === '/blogs.html') {
    return <BlogsPage />;
  }

  // Handle blog posts - catch any /blog/ slug or legacy .html paths
  if (currentPath.startsWith('/blog/') || currentPath.endsWith('.html')) {
    let slug = '';
    
    // Check for legacy .html paths first
    if (currentPath === '/blog1.html') slug = 'millennials-save-money';
    else if (currentPath === '/blog2.html') slug = 'grow-old-and-wise';
    else if (currentPath === '/blog3.html') slug = 'proposed-regulations-ignores-ground-realities';
    else if (currentPath === '/blog4.html') slug = 'role-of-distributors-is-critical';
    else if (currentPath.startsWith('/blog/')) {
      slug = currentPath.split('/blog/')[1].replace(/\/$/, '');
    }

    if (slug) {
      return <BlogDetailPage slug={slug} />;
    }
  }

  if (currentPath === '/disclosure') {
    return <DisclosurePage />;
  }

  if (currentPath === '/terms-conditions') {
    return <TermsConditionsPage />;
  }

  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  if (currentPath === '/disclaimer') {
    return <DisclaimerPage />;
  }

  if (currentPath === '/kyc') {
    return <KYCPage />;
  }

  return <HomePage />;
}




