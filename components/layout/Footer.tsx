import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#11231f] text-white">
      <div className="mx-auto grid w-full max-w-[1080px] gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/vendor/framerusercontent.com/images/71j9VPXZ2Y7S8poJeoVhfLu8Mg0__q_d0286e79b6.png"
            alt="SapientWealth"
            className="h-7 w-auto"
          />
          <p className="mt-5 max-w-[260px] text-sm leading-6 text-white/75">
            Achieve ambitious financial goals with a strategic investment roadmap tailored for you
            and your family.
          </p>
          <p className="mt-6 text-sm font-medium">Find us on</p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://x.com/SapientWealth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f5f2eb] text-[#17231e]"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/company/sapient-wealth-advisors-&-brokers-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f5f2eb] text-[#17231e]"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/sapientwealth/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f5f2eb] text-[#17231e]"
            >
              ig
            </a>
          </div>
        </div>

        <nav className="space-y-2 text-sm text-white/85">
          <p className="mb-3 font-medium text-white">Company</p>
          <Link to="/about-us" className="block hover:text-[#a4cf6b]">
            About
          </Link>
          <Link to="/contact-us" className="block hover:text-[#a4cf6b]">
            Contact
          </Link>
          <Link to="/blogs" className="block hover:text-[#a4cf6b]">
            Blogs
          </Link>
          <Link to="/disclosures" className="block hover:text-[#a4cf6b]">
            Disclosures
          </Link>
          <Link to="/investorcharter" className="block hover:text-[#a4cf6b]">
            KYC
          </Link>
        </nav>

        <nav className="space-y-2 text-sm text-white/85">
          <p className="mb-3 font-medium text-white">Legal</p>
          <Link to="/legal" className="block hover:text-[#a4cf6b]">
            Terms & Conditions
          </Link>
          <Link to="/legal" className="block hover:text-[#a4cf6b]">
            Privacy Policy
          </Link>
          <Link to="/faq" className="block hover:text-[#a4cf6b]">
            Disclaimer
          </Link>
          <Link to="/stewardshipcode" className="block hover:text-[#a4cf6b]">
            SID/SAI/KAIM
          </Link>
          <Link to="/investment-opportunity" className="block hover:text-[#a4cf6b]">
            Code of Conduct
          </Link>
        </nav>

        <nav className="space-y-2 text-sm text-white/85">
          <p className="mb-3 font-medium text-white">Resources</p>
          <a
            href="https://app.sapientwealth.net/app/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#a4cf6b]"
          >
            Meet the manager
          </a>
          <a
            href="https://app.sapientwealth.net/app/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#a4cf6b]"
          >
            Coffee pe compounding
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1080px] px-4 py-5 text-sm text-white/65">
          Sapient Wealth 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
