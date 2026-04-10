import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { leadership } from '~/data/home'
import { fadeInView } from './animations'

export default function LeadershipSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
            Our Strong Leadership
          </h2>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="relative mx-auto w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl md:mx-0">
              <img
                src={leadership.image}
                alt={leadership.name}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl font-bold text-[#17231e]">{leadership.name}</p>
              <p className="mt-1 text-sm font-medium text-[#17231e]/60">{leadership.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#17231e]/80">{leadership.bio}</p>
              <Link
                to="/about-us"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#17231e] underline-offset-4 hover:underline"
              >
                Meet our team
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
