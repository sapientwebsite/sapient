import { motion } from 'framer-motion'
import { services } from '~/data/home'
import { fadeInView, staggerContainer, staggerItem } from './animations'

export default function ServicesSection() {
  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.h2 {...fadeInView} className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
          What We Do Best
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold capitalize text-[#17231e]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#17231e]/75">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
