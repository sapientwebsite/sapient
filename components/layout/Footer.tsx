import { useState } from 'react'

type FooterLeadPayload = {
  name: string
  phone: string
}

export function Footer() {
  const [loading, setLoading] = useState(false)

  const submitLead = async (payload: FooterLeadPayload) => {
    setLoading(true)
    try {
      await fetch('https://crmbackend.entera.in/api/v1/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer style={{ display: 'none' }} aria-hidden="true">
      <button
        disabled={loading}
        onClick={() => submitLead({ name: 'Website Lead', phone: '0000000000' })}
      >
        hidden-footer-action
      </button>
    </footer>
  )
}
