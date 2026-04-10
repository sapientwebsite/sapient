import { useState } from 'react'
import { Link } from 'react-router-dom'

const iconChevronDown = (
  <svg viewBox="0 0 14 8" aria-hidden="true" className="h-2 w-3 fill-white">
    <path d="M1.97 1.22a.75.75 0 0 1 1.06 0L7 5.19l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z" />
  </svg>
)

const navTextClass = 'text-sm font-medium leading-[120%] text-white'

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#17231e]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1080px] items-center justify-between px-4 md:px-6">
        <Link to="/" aria-label="SapientWealth home" className="shrink-0">
          <img
            src="/vendor/framerusercontent.com/images/71j9VPXZ2Y7S8poJeoVhfLu8Mg0__q_d0286e79b6.png"
            alt="SapientWealth"
            className="h-5 w-auto md:h-6"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <button type="button" className={`inline-flex items-center gap-2 ${navTextClass}`}>
            Resources
            {iconChevronDown}
          </button>
          <Link to="/about-us" className={navTextClass}>
            About
          </Link>
          <button type="button" className={`inline-flex items-center gap-2 ${navTextClass}`}>
            Investment Advisory
            {iconChevronDown}
          </button>
          <Link to="/contact-us" className={navTextClass}>
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://app.sapientwealth.net/app/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className={navTextClass}
          >
            Login
          </a>
          <Link
            to="/contact-us"
            className="rounded-xl bg-[#a4cf6b] px-4 py-2 text-sm font-bold text-[#17231e]"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/contact-us"
            className="rounded-md bg-[#a4cf6b] px-3 py-1.5 text-xs font-bold tracking-[-0.01em] text-[#17231e]"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 rounded-full bg-white" />
              <span className="h-0.5 rounded-full bg-white" />
              <span className="h-0.5 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="border-t border-white/10 bg-[#17231e] px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-[1080px] flex-col gap-4">
            <button type="button" className={`inline-flex items-center gap-2 ${navTextClass}`}>
              Resources
              {iconChevronDown}
            </button>
            <Link to="/about-us" className={navTextClass} onClick={() => setIsMobileOpen(false)}>
              About
            </Link>
            <button type="button" className={`inline-flex items-center gap-2 ${navTextClass}`}>
              Investment Advisory
              {iconChevronDown}
            </button>
            <Link
              to="/contact-us"
              className={navTextClass}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://app.sapientwealth.net/app/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className={navTextClass}
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
