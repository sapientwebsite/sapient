import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import ContactUs from '../framer/contact-us';

const offices = [
  {
    title: 'Registered Office',
    company: 'Sapient Wealth Advisors and Brokers Pvt Ltd.',
    address:
      '201, Nav Vani Hsg Society, Opposite Kailash Plaza, Above IndusInd Bank, Ghatkopar East, Mumbai - 400077.',
    landline: '022 4011 1950',
  },
  {
    title: 'Branch Office - Nariman Point',
    company: 'Sapient Wealth Advisors & Brokers Pvt. Ltd.',
    address:
      '20A, 20th Floor, Nirmal Building, Next to Inox, Nariman Point, Mumbai - 400021',
    landline: '022 4474 1992',
  },
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] overflow-x-hidden">
      <Navigation.Responsive style={{ width: '100%' }} />
      <main className="overflow-x-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
          <ContactUs.Responsive style={{ width: '100%' }} />
          <section className="pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {offices.map((office) => (
                <div key={office.title} className="flex flex-col gap-3">
                  <h2
                    className="text-[#17231E] text-[20px] md:text-[24px] font-bold leading-[1.2]"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {office.title}
                  </h2>
                  <p
                    className="text-[#17231E]/80 text-[14px] md:text-[16px] leading-[155%]"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {office.company} {office.address}
                  </p>
                  <p
                    className="text-[#17231E] text-[14px] md:text-[16px] font-medium leading-[155%]"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Landline Number: {office.landline}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
