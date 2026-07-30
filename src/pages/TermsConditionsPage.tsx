import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import TermsConditions from '../framer/terms-conditions';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation.Responsive
        style={{ width: '100%' }}
      />
      <main className="max-w-[1440px] mx-auto pt-20 pb-40 px-6 md:px-20">
        <TermsConditions.Responsive
          style={{ width: '100%' }}
        />
      </main>
      <Footer.Responsive
        style={{ width: '100%' }}
      />
    </div>
  );
}
