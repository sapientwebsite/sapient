import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import KYCHeading from '../framer/kyc-heading';
import KYCContent from '../framer/kyc-content';

export default function KYCPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation.Responsive style={{ width: '100%' }} />
      <main className="max-w-[1440px] mx-auto pt-20 pb-40 px-6 md:px-20">
        <div className="flex flex-col gap-12">
          <KYCHeading.Responsive style={{ width: '100%' }} />
          <KYCContent.Responsive style={{ width: '100%' }} />
        </div>
      </main>
      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
