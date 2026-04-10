import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#11231f] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(17,35,31,.84) 0%, rgba(17,35,31,.56) 44%, rgba(17,35,31,.22) 100%), url('/vendor/framerusercontent.com/images/5DV6erJ6SRbbOoJC710lzDR22g.png')",
        }}
      />
      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1080px] items-center px-4 py-20 md:min-h-[560px]">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl font-bold leading-[1.12] md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            Your Partners To
            <br />
            Generational Wealth
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[520px] text-base text-white/85 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: 'easeOut' }}
          >
            <span className="md:hidden">
              Automate any broker account using data-driven strategies made by professionals
            </span>
            <span className="hidden md:inline">
              Build a financial roadmap with trusted partners to realise your ambitious financial
              goals.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' }}
          >
            <Link
            to="/contact-us"
            className="mt-9 inline-flex items-center rounded-xl bg-[#a4cf6b] px-6 py-3 text-sm font-bold text-[#17231e]"
            >
              Start Your Investment Journey
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
