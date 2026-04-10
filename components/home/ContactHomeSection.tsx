import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInView } from './animations'

const CONTACT_ILLUSTRATION = '/vendor/framerusercontent.com/images/Wk4bWdULqLRfkKtzTXV4a9dT0.png'

export default function ContactHomeSection() {
  const [pending, setPending] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    const form = e.currentTarget
    const payload = {
      name: (form.elements.namedItem('Name') as HTMLInputElement)?.value ?? '',
      email: (form.elements.namedItem('Work Email') as HTMLInputElement)?.value ?? '',
      phone: (form.elements.namedItem('Phone number') as HTMLInputElement)?.value ?? '',
    }
    void fetch('https://crmbackend.entera.in/api/v1/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${payload.name} (${payload.email})`,
        phone: payload.phone,
      }),
    }).finally(() => setPending(false))
  }

  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <motion.div {...fadeInView}>
          <h2 className="text-center font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#17231e] md:text-4xl">
            Contact Us
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={CONTACT_ILLUSTRATION}
                alt=""
                className="max-h-[420px] w-full max-w-md object-contain"
              />
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#17231e]">Name</label>
                <input
                  name="Name"
                  required
                  placeholder="Enter name"
                  className="mt-1 w-full rounded-lg border border-[#17231e]/15 bg-white px-3 py-2.5 text-sm outline-none ring-[#a4cf6b] focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#17231e]">Work Email</label>
                <input
                  name="Work Email"
                  type="email"
                  required
                  placeholder="Enter work email"
                  className="mt-1 w-full rounded-lg border border-[#17231e]/15 bg-white px-3 py-2.5 text-sm outline-none ring-[#a4cf6b] focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#17231e]">Phone number</label>
                <input
                  name="Phone number"
                  type="tel"
                  required
                  placeholder="+91"
                  className="mt-1 w-full rounded-lg border border-[#17231e]/15 bg-white px-3 py-2.5 text-sm outline-none ring-[#a4cf6b] focus:ring-2"
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-[10px] bg-[#a4cf6b] py-3 text-sm font-bold text-[#17231e] disabled:opacity-60"
              >
                {pending ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
