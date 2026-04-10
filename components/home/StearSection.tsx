import { motion } from 'framer-motion'
import { stearPillars } from '~/data/home'
import { fadeInView, staggerContainer, staggerItem } from './animations'

export default function StearSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2eb] py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "url('/vendor/framerusercontent.com/images/xdWPSkCi3Bm46gXNI70xNOrTdY8.svg')",
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'min(1200px, 100%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
            Our S.T.E.A.R Commitment to You
          </h2>
          <p className="mt-3 max-w-2xl font-medium capitalize text-[#17231e]/90">
            We operate on the pillars of Service, Trust, Empathy, Advice, and Relationship:
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {stearPillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={staggerItem}
              className="rounded-2xl bg-white/90 p-5 shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-[#17231e]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#17231e]/80">{pillar.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
