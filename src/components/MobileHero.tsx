const stats = [
  { value: '$1B+', label: 'Assets Under Management' },
  { value: '70+', label: 'Years Of Experience' },
  { value: '15+', label: 'Managing Clients In Countries' },
  { value: '15000+', label: 'People Managed' },
];

export default function MobileHero() {
  return (
    <section className="w-full bg-[#f5f2eb] px-[var(--page-pad-x)] pb-12 pt-8 font-[family-name:Satoshi,sans-serif] md:pb-16 md:pt-12">
      <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-6 text-center md:max-w-[720px] md:gap-8 lg:max-w-[860px]">
        <header className="flex flex-col items-center gap-3 md:gap-4">
          <h1 className="font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-[#17231E] md:text-[44px] lg:text-[52px]">
            Your Partners To Generational Wealth
          </h1>
          <p className="max-w-[340px] text-[15px] font-medium leading-[1.45] text-[#17231E]/80 md:max-w-[520px] md:text-[18px]">
            Build a financial roadmap with trusted partners to realise your
            ambitious financial goals.
          </p>
        </header>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-[#A4CF6B] px-5 py-3.5 text-[14px] font-semibold text-[#17231E] shadow-[inset_0_4px_16px_rgba(255,255,255,0.2)] transition-colors hover:bg-[#83B93C] md:rounded-2xl md:px-7 md:py-4 md:text-[16px]"
        >
          Start Your Investment Journey
        </a>

        <div className="w-full overflow-hidden rounded-[28px] md:rounded-[32px]">
          <img
            src="/cL2Y2oHOENG99tJh5bbVUEJw3M4.png"
            alt="Family enjoying outdoor time together"
            className="aspect-[4/3] h-auto w-full object-cover object-[center_35%] md:aspect-[16/10]"
            loading="eager"
          />
        </div>

        <div className="mt-2 flex w-full flex-col gap-5 md:mt-4 md:gap-8">
          <h2 className="font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[26px] font-bold leading-[1.25] text-[#17231E] md:text-[36px]">
            Our Numbers Tell More About Us
          </h2>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="relative flex min-h-[120px] flex-col items-center justify-center gap-2 overflow-hidden rounded-[20px] bg-[#17231E] px-3 py-5 md:min-h-[160px] md:gap-3 md:rounded-[24px] md:px-5 md:py-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(163,163,163,0.35) 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, rgba(163,163,163,0.25) 0 14%, transparent 15%), radial-gradient(circle at 70% 80%, rgba(163,163,163,0.3) 0 16%, transparent 17%), radial-gradient(circle at 25% 75%, rgba(163,163,163,0.22) 0 12%, transparent 13%)',
                  }}
                />
                <p className="relative font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[28px] font-extrabold leading-none text-[#A4CF6B] md:text-[40px]">
                  {stat.value}
                </p>
                <p className="relative max-w-[9.5rem] text-[12px] font-medium leading-[1.25] text-white md:max-w-[12rem] md:text-[15px]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
