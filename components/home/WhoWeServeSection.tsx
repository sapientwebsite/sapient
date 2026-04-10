import { motion } from 'framer-motion'
import { whoWeServe } from '~/data/home'
import { fadeInView } from './animations'

export default function WhoWeServeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-2 inline-block rounded-full bg-[#17231e]/5 px-3 py-1 text-xs font-semibold text-[#17231e]">
            {whoWeServe.segment}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#17231e]/10 bg-[#f5f2eb] p-6">
              <p className="text-sm font-semibold text-[#17231e]">{whoWeServe.withoutTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#17231e]/75">{whoWeServe.withoutBody}</p>
            </div>
            <div className="rounded-2xl border border-[#a4cf6b]/40 bg-[#f5f2eb] p-6">
              <p className="text-sm font-semibold text-[#17231e]">{whoWeServe.withTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#17231e]/75">{whoWeServe.withBody}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
