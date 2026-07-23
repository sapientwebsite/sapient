import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import SuccessPage from '../framer/success-page';

export default function SuccessPageContent() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] flex flex-col">
      <Navigation 
        variant="Desktop"
        style={{ width: '100%' }}
      />
      <main className="flex-grow flex items-center justify-center py-20">
        <SuccessPage 
          variant="Desktop"
          style={{ width: '100%', maxWidth: '1200px' }}
        />
      </main>
      <Footer 
        variant="Desktop" 
        style={{ width: '100%' }} 
      />
    </div>
  );
}
