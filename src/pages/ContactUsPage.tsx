import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import ContactUs from '../framer/contact-us';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation 
        variant="Desktop"
        style={{ width: '100%' }}
      />
      <main>
        <ContactUs 
          variant="Desktop"
          style={{ width: '100%' }}
        />
      </main>
      <Footer 
        variant="Desktop" 
        style={{ width: '100%' }} 
      />
    </div>
  );
}
