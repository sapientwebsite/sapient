import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { journeySteps } from '~/data/home'
import { fadeInView, staggerContainer, staggerItem } from './animations'

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
            The Path to Financial Freedom
          </h2>
          <p className="mt-2 text-sm text-[#17231e]/70">Start Investment Journey</p>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {journeySteps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={staggerItem}
              className="rounded-2xl border border-[#17231e]/10 bg-[#faf9f6] p-5"
            >
              <p className="text-[11px] font-bold tracking-[0.14em] text-[#64748b]">
                STEP {index + 1}
              </p>
              <p className="mt-2 text-base font-bold leading-snug tracking-tight text-[#0f172a]">
                {step.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#505050]">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div className="mt-10 flex justify-center" {...fadeInView}>
          <Link
            to="/contact-us"
            className="inline-flex rounded-xl bg-[#a4cf6b] px-8 py-3 text-sm font-bold text-[#151c24]"
          >
            Start Investment Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
