import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="bg-[#17231e] py-16">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#a4cf6b]">
            Change the way you manage wealth
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Tailored Investment Strategies
          </h2>
        </div>
        <Link
          to="/contact-us"
          className="inline-flex rounded-xl bg-[#a4cf6b] px-6 py-3 text-sm font-bold text-[#17231e]"
        >
          Start Investment Journey
        </Link>
      </div>
    </section>
  )
}
