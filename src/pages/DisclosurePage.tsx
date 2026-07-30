import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import DisclosureText from '../framer/disclosure-text';
import DisclosureTable from '../framer/disclosure-table';

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navigation.Responsive style={{ width: '100%' }} />
      <main className="max-w-[1440px] mx-auto pt-20 pb-40 px-6 md:px-20">
        <div className="flex flex-col gap-12">
          <DisclosureText.Responsive style={{ width: '100%' }} />
          <DisclosureTable.Responsive style={{ width: '100%' }} />
        </div>
      </main>
      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
