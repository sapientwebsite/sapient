const stats = [
  { value: '$1B+', label: 'Assets Under Management' },
  { value: '70+', label: 'Years Of Experience' },
  { value: '15+', label: 'Managing Clients In Countries' },
  { value: '15000+', label: 'People Managed' },
];

export default function MobileHero() {
  return (
    <section className="w-full bg-[#f5f2eb] px-[var(--page-pad-x)] pb-12 pt-8 font-[family-name:Satoshi,sans-serif]">
      <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-6 text-center">
        <header className="flex flex-col items-center gap-3">
          <h1 className="font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-[#17231E]">
            Your Partners To Generational Wealth
          </h1>
          <p className="max-w-[340px] text-[15px] font-medium leading-[1.45] text-[#17231E]/80">
            Build a financial roadmap with trusted partners to realise your
            ambitious financial goals.
          </p>
        </header>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-[#A4CF6B] px-5 py-3.5 text-[14px] font-semibold text-[#17231E] shadow-[inset_0_4px_16px_rgba(255,255,255,0.2)] transition-colors hover:bg-[#83B93C]"
        >
          Start Your Investment Journey
        </a>

        <div className="w-full overflow-hidden rounded-[28px]">
          <img
            src="/cL2Y2oHOENG99tJh5bbVUEJw3M4.png"
            alt="Family enjoying outdoor time together"
            className="aspect-[4/3] h-auto w-full object-cover object-[center_35%]"
            loading="eager"
          />
        </div>

        <div className="mt-2 flex w-full flex-col gap-5">
          <h2 className="font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[26px] font-bold leading-[1.25] text-[#17231E]">
            Our Numbers Tell More About Us
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="relative flex min-h-[120px] flex-col items-center justify-center gap-2 overflow-hidden rounded-[20px] bg-[#17231E] px-3 py-5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(163,163,163,0.35) 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, rgba(163,163,163,0.25) 0 14%, transparent 15%), radial-gradient(circle at 70% 80%, rgba(163,163,163,0.3) 0 16%, transparent 17%), radial-gradient(circle at 25% 75%, rgba(163,163,163,0.22) 0 12%, transparent 13%)',
                  }}
                />
                <p className="relative font-[family-name:'Plus_Jakarta_Sans',sans-serif] text-[28px] font-extrabold leading-none text-[#A4CF6B]">
                  {stat.value}
                </p>
                <p className="relative max-w-[9.5rem] text-[12px] font-medium leading-[1.25] text-white">
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
