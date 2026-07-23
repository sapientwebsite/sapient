import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import ContactUs from '../framer/contact-us';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] overflow-x-hidden">
      <Navigation.Responsive style={{ width: '100%' }} />
      <main className="overflow-x-hidden">
        <ContactUs.Responsive style={{ width: '100%' }} />
      </main>
      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
