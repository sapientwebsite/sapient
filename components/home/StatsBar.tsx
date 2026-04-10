import { motion } from 'framer-motion'
import { homeStats } from '~/data/home'
import { staggerContainer, staggerItem } from './animations'

export default function StatsBar() {
  return (
    <section className="bg-[linear-gradient(90deg,#142320_0%,#1f2a2d_40%,#4d1e1e_100%)] text-white">
      <motion.div
        className="mx-auto grid w-full max-w-[1080px] grid-cols-2 gap-6 px-4 py-8 md:grid-cols-5 md:items-center md:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={staggerItem}
          className="col-span-2 text-2xl font-bold leading-tight md:col-span-1 md:text-[34px]"
        >
          Our Numbers Tell More About Us
        </motion.p>
        {homeStats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem}>
            <p className="text-4xl font-bold text-[#a4cf6b]">{stat.value}</p>
            <p className="mt-1 text-xs text-white/80 md:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
