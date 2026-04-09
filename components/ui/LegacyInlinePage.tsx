import { useEffect, useMemo, useState } from 'react'

type LegacyInlinePageProps = {
  src: string
}

function copyElement(targetDoc: Document, source: Element) {
  const copy = targetDoc.createElement(source.tagName.toLowerCase())
  for (const attr of source.attributes) {
    copy.setAttribute(attr.name, attr.value)
  }
  copy.textContent = source.textContent
  return copy
}

function sanitizeInjectedNode(node: HTMLElement) {
  if (
    node.tagName.toLowerCase() === 'style' &&
    node.getAttribute('data-framer-font-css') !== null
  ) {
    node.textContent =
      node.textContent?.replace(
        /@font-face\s*\{[^{}]*?src:\s*url\((?:["'])?\/vendor\/fonts\.gstatic\.com\/[^)]*\)[^{}]*?\}/g,
        '',
      ) ?? ''
  }

  return node
}

export function LegacyInlinePage({ src }: LegacyInlinePageProps) {
  const [markup, setMarkup] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const appendedNodes = useMemo(() => [] as HTMLElement[], [])

  useEffect(() => {
    let active = true
    const abortController = new AbortController()

    const clearInjectedNodes = () => {
      while (appendedNodes.length > 0) {
        const node = appendedNodes.pop()
        node?.remove()
      }
    }

    const applyDocument = async () => {
      setLoading(true)
      clearInjectedNodes()

      const response = await fetch(src, { signal: abortController.signal })
      if (!response.ok) {
        throw new Error(`Failed to load ${src} (${response.status})`)
      }
      const html = await response.text()
      if (!active) return

      const parsedDoc = new DOMParser().parseFromString(html, 'text/html')
      document.title = parsedDoc.title || document.title

      const headCandidates = parsedDoc.head.querySelectorAll(
        'meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[rel="icon"],link[rel="modulepreload"],style,script',
      )
      headCandidates.forEach((node) => {
        const copy = sanitizeInjectedNode(copyElement(document, node))
        document.head.appendChild(copy)
        appendedNodes.push(copy)
      })

      const bodyMain = parsedDoc.body.querySelector('#main')
      setMarkup(bodyMain ? bodyMain.outerHTML : parsedDoc.body.innerHTML)

      const svgTemplates = parsedDoc.getElementById('svg-templates')
      if (svgTemplates) {
        const copy = svgTemplates.cloneNode(true) as HTMLElement
        document.body.appendChild(copy)
        appendedNodes.push(copy)
      }

      const bodyScripts = parsedDoc.body.querySelectorAll('script')
      bodyScripts.forEach((node) => {
        const copy = copyElement(document, node)
        document.body.appendChild(copy)
        appendedNodes.push(copy)
      })

      if (active) setLoading(false)
    }

    applyDocument().catch(() => {
      if (active) setLoading(false)
    })

    return () => {
      active = false
      abortController.abort()
      clearInjectedNodes()
    }
  }, [appendedNodes, src])

  return (
    <div className="legacy-inline-shell">
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      {loading && <div className="legacy-page-loading" aria-hidden="true" />}
    </div>
  )
}
