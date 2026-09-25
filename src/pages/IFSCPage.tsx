import { useEffect, useState } from 'react';
import Navigation from '../framer/navigation';
import Footer from '../framer/footer';
import {
  activities,
  contact,
  fme,
  grievance,
  keyPersonnel,
  schemes,
  serviceProviders,
} from '../data/ifscFme';

const fontDisplay = '"Plus Jakarta Sans", sans-serif';
const fontBody = '"Satoshi", sans-serif';

const navSections = [
  { id: 'about', label: 'About the FME' },
  { id: 'contact', label: 'Registered Office' },
  { id: 'activities', label: 'IFSC Activities' },
  { id: 'schemes', label: 'Funds & Schemes' },
  { id: 'providers', label: 'Service Providers' },
  { id: 'personnel', label: 'Key Management' },
  { id: 'grievance', label: 'Grievance Redressal' },
] as const;

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
      <span
        className="text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5C6B4A]"
        style={{ fontFamily: fontBody }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-[#17231E] leading-[120%] tracking-[0.01em]"
        style={{ fontFamily: fontDisplay }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className="text-[14px] sm:text-[16px] text-[#475569] leading-[155%] max-w-[640px]"
          style={{ fontFamily: fontBody }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 py-3 border-b border-[#17231E]/08 last:border-b-0">
      <dt
        className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.04em] text-[#78716C]"
        style={{ fontFamily: fontBody }}
      >
        {label}
      </dt>
      <dd
        className="text-[14px] sm:text-[16px] text-[#17231E] leading-[155%]"
        style={{ fontFamily: fontBody }}
      >
        {value}
      </dd>
    </div>
  );
}

export default function IFSCPage() {
  const [active, setActive] = useState(navSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id as (typeof navSections)[number]['id']);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FDFCF9]">
      <Navigation.Responsive style={{ width: '100%' }} />

      <header className="relative w-full overflow-hidden bg-[#17231E] text-white">
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 10% 0%, #E5EBD1 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, #A8B88A 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col gap-6 sm:gap-8 max-w-[900px]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase"
                style={{ fontFamily: fontBody }}
              >
                GIFT City · IFSC
              </span>
              <span
                className="inline-flex items-center rounded-full border border-[#E5EBD1]/40 bg-[#E5EBD1]/15 px-3 py-1 text-[11px] sm:text-[12px] font-semibold tracking-[0.04em] text-[#E5EBD1]"
                style={{ fontFamily: fontBody }}
              >
                Non-Retail FME
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h1
                className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold leading-[110%] tracking-[0.01em]"
                style={{ fontFamily: fontDisplay }}
              >
                {fme.legalName}
              </h1>
              <p
                className="text-[15px] sm:text-[18px] lg:text-[20px] text-white/75 leading-[150%] max-w-[640px]"
                style={{ fontFamily: fontBody }}
              >
                {fme.category}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 pt-2">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.08em] text-white/50 mb-1"
                  style={{ fontFamily: fontBody }}
                >
                  IFSCA Registration No.
                </p>
                <p
                  className="text-[18px] sm:text-[22px] font-bold tracking-wide text-[#E5EBD1]"
                  style={{ fontFamily: fontDisplay }}
                >
                  {fme.registrationNumber}
                </p>
              </div>
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.08em] text-white/50 mb-1"
                  style={{ fontFamily: fontBody }}
                >
                  Category
                </p>
                <p
                  className="text-[14px] sm:text-[16px] font-medium text-white/90"
                  style={{ fontFamily: fontBody }}
                >
                  {fme.category}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#schemes"
                className="inline-flex items-center justify-center rounded-full bg-[#E5EBD1] text-[#17231E] px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold hover:bg-white transition-colors"
                style={{ fontFamily: fontBody }}
              >
                View Funds
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold hover:bg-white/10 transition-colors"
                style={{ fontFamily: fontBody }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full bg-[#E5EBD1]/55 border-b border-[#17231E]/08">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-5">
          <p
            className="text-[13px] sm:text-[14px] text-[#17231E]/85 leading-[155%]"
            style={{ fontFamily: fontBody }}
          >
            Parent / group entity: {fme.parentEntity}
          </p>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <aside className="lg:w-[220px] shrink-0">
            <nav
              className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Page sections"
            >
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] sm:text-[13px] font-medium transition-colors ${
                    active === s.id
                      ? 'bg-[#17231E] text-white'
                      : 'bg-transparent text-[#475569] hover:bg-[#17231E]/06'
                  }`}
                  style={{ fontFamily: fontBody }}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="flex-1 min-w-0 flex flex-col gap-16 sm:gap-20 lg:gap-24">
            <section id="about" className="scroll-mt-28">
              <SectionHeading
                eyebrow="01 — About the FME"
                title="Fund Management Entity"
              />
              <p
                className="text-[15px] sm:text-[17px] text-[#334155] leading-[165%] mb-8"
                style={{ fontFamily: fontBody }}
              >
                {fme.profile}
              </p>
              <dl>
                <MetaRow label="Legal name" value={fme.legalName} />
                <MetaRow
                  label="Registration no."
                  value={
                    <span className="font-semibold tracking-wide">
                      {fme.registrationNumber}
                    </span>
                  }
                />
                <MetaRow label="Category" value={fme.category} />
                <MetaRow
                  label="IFSC activities"
                  value={fme.ifscActivitiesBrief}
                />
                <MetaRow label="Parent / group" value={fme.parentEntity} />
              </dl>
            </section>

            <section id="contact" className="scroll-mt-28">
              <SectionHeading
                eyebrow="02 — Contact & Registered Office"
                title="Registered office in the IFSC"
              />
              <div className="rounded-[20px] sm:rounded-[24px] bg-[#f5f2eb] p-6 sm:p-8 lg:p-10">
                <dl className="flex flex-col gap-1">
                  <MetaRow
                    label="Registered office"
                    value={contact.registeredOffice}
                  />
                  <MetaRow
                    label="Telephone"
                    value={
                      <a
                        href={`tel:${contact.telephone.replace(/\s/g, '')}`}
                        className="underline decoration-[#17231E]/25 underline-offset-4 hover:decoration-[#17231E]"
                      >
                        {contact.telephone}
                      </a>
                    }
                  />
                  <MetaRow
                    label="Email"
                    value={
                      <a
                        href={`mailto:${contact.email}`}
                        className="underline decoration-[#17231E]/25 underline-offset-4 hover:decoration-[#17231E]"
                      >
                        {contact.email}
                      </a>
                    }
                  />
                  <MetaRow
                    label="Investor contact"
                    value={
                      <a
                        href={`mailto:${contact.investorEmail}`}
                        className="underline decoration-[#17231E]/25 underline-offset-4 hover:decoration-[#17231E]"
                      >
                        {contact.investorEmail}
                      </a>
                    }
                  />
                </dl>
              </div>
            </section>

            <section id="activities" className="scroll-mt-28">
              <SectionHeading
                eyebrow="03 — IFSC Activities"
                title="Activities undertaken from the IFSC"
              />
              <dl>
                <MetaRow
                  label="Fund management"
                  value={activities.fundManagement}
                />
                <MetaRow label="Fund categories" value={activities.fundTypes} />
                <MetaRow
                  label="Other permissible"
                  value={activities.otherPermissible}
                />
              </dl>
            </section>

            <section id="schemes" className="scroll-mt-28">
              <SectionHeading
                eyebrow="04 — Funds & Schemes"
                title="Schemes managed from the IFSC"
              />
              <div className="flex flex-col gap-6 sm:gap-8">
                {schemes.map((scheme, i) => (
                  <article
                    key={scheme.name}
                    className="rounded-[20px] sm:rounded-[24px] border border-[#17231E]/10 bg-white p-6 sm:p-8 lg:p-10"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex flex-col gap-2 min-w-0">
                        <span
                          className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#5C6B4A]"
                          style={{ fontFamily: fontBody }}
                        >
                          Scheme {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3
                          className="text-[20px] sm:text-[24px] font-bold text-[#17231E] leading-[125%]"
                          style={{ fontFamily: fontDisplay }}
                        >
                          {scheme.name}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 rounded-full bg-[#E5EBD1] text-[#17231E] px-3 py-1 text-[11px] sm:text-[12px] font-semibold"
                        style={{ fontFamily: fontBody }}
                      >
                        {scheme.launchDate}
                      </span>
                    </div>
                    <p
                      className="text-[13px] sm:text-[14px] font-medium text-[#5C6B4A] mb-4"
                      style={{ fontFamily: fontBody }}
                    >
                      {scheme.type}
                    </p>
                    <p
                      className="text-[14px] sm:text-[16px] text-[#334155] leading-[165%] mb-6"
                      style={{ fontFamily: fontBody }}
                    >
                      {scheme.description}
                    </p>
                    <dl>
                      <MetaRow label="Current status" value={scheme.status} />
                    </dl>
                  </article>
                ))}
              </div>
            </section>

            <section id="providers" className="scroll-mt-28">
              <SectionHeading
                eyebrow="05 — Service Providers"
                title="Service providers for IFSC operations"
              />
              <div className="overflow-x-auto rounded-[20px] border border-[#17231E]/10 bg-white">
                <table className="w-full min-w-[520px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f5f2eb]">
                      <th
                        className="px-5 sm:px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#78716C]"
                        style={{ fontFamily: fontBody }}
                      >
                        Type
                      </th>
                      <th
                        className="px-5 sm:px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#78716C]"
                        style={{ fontFamily: fontBody }}
                      >
                        Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceProviders.map((sp) => (
                      <tr
                        key={sp.type}
                        className="border-t border-[#17231E]/08"
                      >
                        <td
                          className="px-5 sm:px-6 py-4 text-[13px] sm:text-[14px] font-medium text-[#5C6B4A]"
                          style={{ fontFamily: fontBody }}
                        >
                          {sp.type}
                        </td>
                        <td
                          className="px-5 sm:px-6 py-4 text-[14px] sm:text-[15px] text-[#17231E]"
                          style={{ fontFamily: fontBody }}
                        >
                          {sp.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="personnel" className="scroll-mt-28">
              <SectionHeading
                eyebrow="06 — Key Management"
                title="Key managerial personnel"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {keyPersonnel.map((person) => (
                  <div
                    key={person.role}
                    className="rounded-[20px] sm:rounded-[24px] bg-[#f5f2eb] p-6 sm:p-8 flex flex-col gap-4"
                  >
                    <div>
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C6B4A] mb-2"
                        style={{ fontFamily: fontBody }}
                      >
                        {person.role}
                      </p>
                      <h3
                        className="text-[20px] sm:text-[22px] font-bold text-[#17231E] leading-[125%]"
                        style={{ fontFamily: fontDisplay }}
                      >
                        {person.name}
                      </h3>
                      <p
                        className="text-[14px] text-[#475569] mt-1"
                        style={{ fontFamily: fontBody }}
                      >
                        {person.designation}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2 border-t border-[#17231E]/10">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-[14px] text-[#17231E] underline decoration-[#17231E]/25 underline-offset-4 hover:decoration-[#17231E]"
                        style={{ fontFamily: fontBody }}
                      >
                        {person.email}
                      </a>
                      <a
                        href={`tel:${person.telephone.replace(/\s/g, '')}`}
                        className="text-[14px] text-[#17231E]/80"
                        style={{ fontFamily: fontBody }}
                      >
                        {person.telephone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="grievance" className="scroll-mt-28">
              <SectionHeading
                eyebrow="07 — Investor Grievance"
                title="Grievance redressal"
              />
              <div className="flex flex-col gap-6">
                <div className="rounded-[20px] sm:rounded-[24px] border border-[#17231E]/10 bg-white p-6 sm:p-8">
                  <h3
                    className="text-[16px] sm:text-[18px] font-bold text-[#17231E] mb-4"
                    style={{ fontFamily: fontDisplay }}
                  >
                    Escalation matrix
                  </h3>
                  <p
                    className="text-[14px] sm:text-[16px] text-[#334155] leading-[165%] mb-4"
                    style={{ fontFamily: fontBody }}
                  >
                    {grievance.escalationMatrix}
                  </p>
                  <p
                    className="text-[14px] sm:text-[15px] font-medium text-[#17231E] leading-[160%]"
                    style={{ fontFamily: fontBody }}
                  >
                    {grievance.escalationContacts}
                  </p>
                </div>

                <div className="rounded-[20px] sm:rounded-[24px] bg-[#f5f2eb] p-6 sm:p-8">
                  <h3
                    className="text-[16px] sm:text-[18px] font-bold text-[#17231E] mb-4"
                    style={{ fontFamily: fontDisplay }}
                  >
                    Grievance Redressal Officer
                  </h3>
                  <dl>
                    <MetaRow label="Name" value={grievance.gro.name} />
                    <MetaRow
                      label="Designation"
                      value={grievance.gro.designation}
                    />
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer.Responsive style={{ width: '100%' }} />
    </div>
  );
}
