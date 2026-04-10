import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '~/data/home'
import { fadeInView } from './animations'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.h2
          {...fadeInView}
          className="text-center font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div className="mt-10 space-y-2" {...fadeInView}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-[#17231e]/10 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  onClick={() => setOpenIndex((i) => (i === index ? null : index))}
                >
                  <span className="text-base font-bold text-[#17231e]">{item.q}</span>
                  <span className="text-xl text-[#17231e]/50" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-[#17231e]/8"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-[#17231e]/75 md:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
