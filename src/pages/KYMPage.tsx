import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import KymText from '../framer/kym-text';
import { useRef } from 'react';

const ManagerCard = ({
  img,
  name,
  role,
  date,
}: {
  img: string;
  name: string;
  role: string;
  date: string;
}) => (
  <div className="flex flex-col gap-3 sm:gap-4 w-[min(75vw,280px)] sm:w-[300px] lg:w-[300px] shrink-0">
    <div className="w-full aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#F3F4F6]">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-[#17231E] text-[20px] sm:text-[24px] font-bold leading-[1.2]">
        {name}
      </h3>
      <p className="text-[#4B5563] text-[13px] sm:text-[14px] font-medium opacity-70">
        {role}, {date}
      </p>
    </div>
  </div>
);

export default function KYMPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const managers = [
    {
      name: 'John Doe',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/19oZXQV2LhBqwV3nZUFWPYgNr6c.avif',
    },
    {
      name: 'Amitabh Chaudhary',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/4k8lPSVB1MW7JT43pU3GcQkaI4c.avif',
    },
    {
      name: 'Amitabh Chaudhary',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/D156js5520KrxVgRWhdteszKmM.avif',
    },
    {
      name: 'Amitabh Chaudhary',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/19oZXQV2LhBqwV3nZUFWPYgNr6c.avif',
    },
    {
      name: 'Amitabh Chaudhary',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/4k8lPSVB1MW7JT43pU3GcQkaI4c.avif',
    },
    {
      name: 'Amitabh Chaudhary',
      role: 'CEO Axis Bank',
      date: '7/07/2023',
      img: '/D156js5520KrxVgRWhdteszKmM.avif',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>('[data-kym-card]');
    const gap = 24;
    const amount = (firstCard?.offsetWidth ?? 300) + gap;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FDFCF9]" style={{ backgroundImage: 'url(/sunburst.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundSize: 'cover' }}>
      <Navigation.Responsive style={{ width: '100%' }} />

      <main className="w-full max-w-[1440px] mx-auto pt-10 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-6 md:px-12 lg:px-20 relative">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:justify-between lg:items-end">
            <div className="w-full min-w-0 lg:flex-1 lg:max-w-[720px]">
              <KymText.Responsive style={{ width: '100%', maxWidth: '100%' }} />
            </div>
            <div className="flex gap-3 sm:gap-4 shrink-0 lg:mb-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#17231E]/20 flex items-center justify-center text-[#17231E] hover:bg-[#17231E] hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#17231E]/20 flex items-center justify-center text-[#17231E] hover:bg-[#17231E] hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {managers.map((m, i) => (
              <div key={`${m.name}-${i}`} data-kym-card>
                <ManagerCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
