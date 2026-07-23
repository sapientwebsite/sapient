import { useCallback, useEffect, useRef, useState } from 'react';

type AudienceId =
  | 'hni'
  | 'nris'
  | 'women'
  | 'business'
  | 'genz'
  | 'retirees';

type Audience = {
  id: AudienceId;
  label: string;
  without: string;
  with: string;
};

const audiences: Audience[] = [
  {
    id: 'hni',
    label: 'HNI/UHNI',
    without:
      'HNIs often face challenges in preserving and growing their wealth, navigating complex investments, tax structures, and estate planning without expert guidance, leading to missed opportunities and avoidable risks.',
    with: 'Sapient empowers HNIs with personalized wealth strategies, investment advisory, estate planning, and tax optimization to preserve, grow, and seamlessly transfer wealth across generations.',
  },
  {
    id: 'nris',
    label: 'NRIs',
    without:
      'NRIs often struggle with managing wealth across jurisdictions, navigating tax regulations, currency exposure, and investment opportunities while staying compliant with changing regulations.',
    with: 'Sapient simplifies cross-border wealth management through tailored investment strategies, tax-efficient planning, regulatory guidance, and seamless portfolio management designed specifically for NRIs.',
  },
  {
    id: 'women',
    label: 'Women',
    without:
      'Many women face financial uncertainty due to limited access to personalized financial guidance, often delaying important investment and wealth-building decisions.',
    with: 'Sapient helps women achieve financial independence with customized wealth strategies, goal-based planning, investment advisory, and long-term financial security tailored to their unique aspirations.',
  },
  {
    id: 'business',
    label: 'Business owners',
    without:
      'Business owners often struggle to balance personal wealth with business growth while managing succession planning, tax efficiency, liquidity, and risk protection.',
    with: 'Sapient provides integrated wealth and business advisory solutions, helping entrepreneurs optimize investments, safeguard assets, plan succession, and build long-term financial resilience.',
  },
  {
    id: 'genz',
    label: 'Genz & millennials investors',
    without:
      'Young investors often feel overwhelmed by market complexity, information overload, and a lack of personalized guidance, causing them to delay investing or make uninformed decisions.',
    with: 'Sapient equips the next generation of investors with personalized financial planning, disciplined investment strategies, and expert guidance to build wealth confidently from an early stage.',
  },
  {
    id: 'retirees',
    label: 'Retirees & Pre-retirees',
    without:
      'Retirees and those approaching retirement often worry about generating sustainable income, preserving capital, managing healthcare costs, and maintaining their desired lifestyle.',
    with: 'Sapient designs retirement-focused wealth strategies that provide reliable income, capital preservation, tax-efficient withdrawals, and financial confidence throughout retirement.',
  },
];

export default function WhoWeServe() {
  const [activeId, setActiveId] = useState<AudienceId>('hni');
  const active = audiences.find((a) => a.id === activeId) ?? audiences[0];

  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbWidthRef = useRef(40);
  const [scrollMetrics, setScrollMetrics] = useState({
    needsScroll: false,
    thumbWidth: 40,
    thumbLeft: 0,
  });

  const updateScrollbar = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollWidth, clientWidth, scrollLeft } = el;
    const needsScroll = scrollWidth > clientWidth + 1;
    const ratio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(ratio * clientWidth, 40);
    const maxThumbLeft = clientWidth - thumbWidth;
    const maxScroll = scrollWidth - clientWidth;
    const thumbLeft = maxScroll > 0 ? (scrollLeft / maxScroll) * maxThumbLeft : 0;

    thumbWidthRef.current = thumbWidth;
    setScrollMetrics({ needsScroll, thumbWidth, thumbLeft });
  }, []);

  useEffect(() => {
    updateScrollbar();
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateScrollbar();
    el.addEventListener('scroll', onScroll, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollbar);
    resizeObserver.observe(el);
    window.addEventListener('resize', updateScrollbar);

    return () => {
      el.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollbar);
    };
  }, [updateScrollbar]);

  const scrollFromPointer = (clientX: number) => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const rect = track.getBoundingClientRect();
    const thumbWidth = thumbWidthRef.current;
    const maxThumbLeft = rect.width - thumbWidth;
    const x = Math.min(Math.max(clientX - rect.left - thumbWidth / 2, 0), maxThumbLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = maxThumbLeft > 0 ? (x / maxThumbLeft) * maxScroll : 0;
  };

  const onThumbPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const thumb = event.currentTarget;
    thumb.setPointerCapture(event.pointerId);

    const onMove = (moveEvent: PointerEvent) => {
      scrollFromPointer(moveEvent.clientX);
    };
    const onUp = (upEvent: PointerEvent) => {
      thumb.releasePointerCapture(upEvent.pointerId);
      thumb.removeEventListener('pointermove', onMove);
      thumb.removeEventListener('pointerup', onUp);
    };

    thumb.addEventListener('pointermove', onMove);
    thumb.addEventListener('pointerup', onUp);
  };

  const onTrackPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current) return;
    scrollFromPointer(event.clientX);
  };

  return (
    <section className="w-full bg-[#E8F0DC] py-16 font-[family-name:Satoshi,sans-serif] sm:py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:gap-14 lg:px-8">
        <header className="flex max-w-[720px] flex-col items-center gap-3 text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#17231E] sm:text-[40px] lg:text-[48px]">
            Who We Serve
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#17231E]/75 sm:text-[18px]">
            Change The Way You Manage Wealth
          </p>
        </header>

        <div className="flex w-full max-w-full flex-col gap-3">
          <div
            ref={scrollRef}
            id="who-we-serve-tabs"
            className="who-serve-tabs w-full overflow-x-auto sm:overflow-visible"
          >
            <div
              className="flex min-w-min items-center gap-2 sm:flex-wrap sm:justify-center sm:gap-3"
              role="tablist"
              aria-label="Audience segments"
            >
              {audiences.map((audience) => {
                const isActive = audience.id === activeId;
                return (
                  <button
                    key={audience.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(audience.id)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-colors duration-300 sm:px-5 sm:py-3 sm:text-[14px] ${
                      isActive
                        ? 'border-[#17231E] bg-[#17231E] text-white shadow-sm'
                        : 'border-[#A4CF6B] bg-[#F3F7E9] text-[#17231E] shadow-[0_1px_2px_rgba(23,35,30,0.06)] hover:border-[#8FBE55] hover:bg-[#EEF4E3]'
                    }`}
                  >
                    {audience.label}
                  </button>
                );
              })}
            </div>
          </div>

          {scrollMetrics.needsScroll && (
            <div
              ref={trackRef}
              role="scrollbar"
              aria-orientation="horizontal"
              aria-controls="who-we-serve-tabs"
              aria-valuenow={Math.round(scrollMetrics.thumbLeft)}
              tabIndex={0}
              onPointerDown={onTrackPointerDown}
              className="relative h-1.5 w-full cursor-pointer rounded-full bg-[#D5E0C4] sm:hidden"
            >
              <div
                onPointerDown={onThumbPointerDown}
                className="absolute top-0 h-1.5 cursor-grab rounded-full bg-[#17231E] active:cursor-grabbing"
                style={{
                  width: scrollMetrics.thumbWidth,
                  transform: `translateX(${scrollMetrics.thumbLeft}px)`,
                }}
              />
            </div>
          )}
        </div>

        <div
          key={active.id}
          className="grid w-full animate-[whoFade_0.35s_ease] grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
        >
          <article className="flex flex-col gap-5 rounded-[28px] bg-[#d6e0b7] p-6 sm:gap-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold leading-tight text-[#17231E] sm:text-[26px]">
                Without Sapient
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#17231E]/80 sm:text-[15px]">
                {active.without}
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] bg-white">
              <img
                src="/DwYBpm55cOK4zgI4LFO3GLeb3w.svg"
                alt="Chat conversation showing confusion about investments"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </article>

          <article className="flex flex-col gap-5 rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(23,35,30,0.08)] sm:gap-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold leading-tight text-[#17231E] sm:text-[26px]">
                With Sapient
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#17231E]/80 sm:text-[15px]">
                {active.with}
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] bg-[#E8F0DC]">
              <img
                src="/Zl5BiRmAjwiq1yma3sc7sO6O1Y.svg"
                alt="Sapient services including wealth management, estate planning, and investment advisory"
                className="h-auto w-full object-cover object-center"
              />
            </div>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes whoFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .who-serve-tabs {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .who-serve-tabs::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
