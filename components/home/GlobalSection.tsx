import { motion } from 'framer-motion'
import { globalSection } from '~/data/home'
import { fadeInView, staggerContainer, staggerItem } from './animations'

export default function GlobalSection() {
  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.h2
          {...fadeInView}
          className="text-center font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl"
        >
          {globalSection.title}
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-10 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {globalSection.blocks.map((block) => (
            <motion.article
              key={block.title}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#eef2f0]">
                <img src={block.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold capitalize leading-snug text-[#17231e]">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#17231e]/70">{block.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
