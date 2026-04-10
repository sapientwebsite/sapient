import { motion } from 'framer-motion'
import { press } from '~/data/home'
import { fadeInView } from './animations'

export default function PressSection() {
  return (
    <section className="bg-[#f5f2eb] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <p className="text-center text-sm font-medium text-[#17231e]/70">As Featured In</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-90">
            {press.logos.map((src) => (
              <img key={src} src={src} alt="" className="h-8 w-auto object-contain md:h-10" />
            ))}
          </div>
          <h2 className="mt-10 text-center font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold leading-snug text-[#17231e] md:text-3xl">
            {press.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-center text-sm leading-relaxed text-[#17231e]/80 md:text-base">
            {press.body}
          </p>
          <p className="mt-6 text-center text-sm text-[#17231e]/55">
            {press.source} · {press.date}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
