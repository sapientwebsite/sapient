import { useEffect, useState } from 'react'
import { extractLegacyHeaderFooter } from './legacyChrome'

export function Header() {
  const [headerHtml, setHeaderHtml] = useState('')

  useEffect(() => {
    let active = true
    const abortController = new AbortController()

    fetch('/legacy/index.html', { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load /legacy/index.html (${response.status})`)
        }
        return response.text()
      })
      .then((html) => {
        if (!active) return
        const { headerHtml: extractedHeaderHtml } = extractLegacyHeaderFooter(html)
        setHeaderHtml(extractedHeaderHtml.length <= 120_000 ? extractedHeaderHtml : '')
      })
      .catch(() => {
        if (active) setHeaderHtml('')
      })

    return () => {
      active = false
      abortController.abort()
    }
  }, [])

  if (!headerHtml) return null
  return <header dangerouslySetInnerHTML={{ __html: headerHtml }} />
}
