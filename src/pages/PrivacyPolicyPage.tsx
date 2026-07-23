import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import PrivacyPolicy from '../framer/privacy-policy';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation 
        variant="Desktop"
        style={{ width: '100%' }}
      />
      <main className="max-w-[1440px] mx-auto pt-20 pb-40 px-6 md:px-20">
        <PrivacyPolicy 
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
