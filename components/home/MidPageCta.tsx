import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInView } from './animations'

export default function MidPageCta() {
  return (
    <section className="bg-[#17231e] py-14 md:py-16">
      <motion.div
        className="mx-auto flex w-full max-w-[1080px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center"
        {...fadeInView}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a4cf6b]">
            Change the way you manage wealth
          </p>
          <h2 className="mt-2 font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold capitalize text-white md:text-3xl">
            Tailored Investment Strategies
          </h2>
        </div>
        <Link
          to="/contact-us"
          className="inline-flex shrink-0 rounded-xl bg-[#a4cf6b] px-6 py-3 text-sm font-bold text-[#17231e]"
        >
          Start Investment Journey
        </Link>
      </motion.div>
    </section>
  )
}
