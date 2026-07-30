import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import Disclaimer from '../framer/disclaimer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation.Responsive
        style={{ width: '100%' }}
      />
      <main className="max-w-[1440px] mx-auto pt-20 pb-40 px-6 md:px-20">
        <Disclaimer.Responsive
          style={{ width: '100%' }}
        />
      </main>
      <Footer.Responsive
        style={{ width: '100%' }}
      />
    </div>
  );
}
