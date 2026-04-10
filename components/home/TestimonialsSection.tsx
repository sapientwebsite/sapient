import { motion } from 'framer-motion'
import { testimonials } from '~/data/home'
import { fadeInView, staggerContainer, staggerItem } from './animations'

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.h2
          {...fadeInView}
          className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl"
        >
          Trusted by Our Clients
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={staggerItem}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-[#17231e]/80">{testimonial.quote}</p>
              <p className="mt-4 text-base font-semibold text-[#17231e]">{testimonial.name}</p>
              <p className="text-sm text-[#17231e]/65">{testimonial.subtitle}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
