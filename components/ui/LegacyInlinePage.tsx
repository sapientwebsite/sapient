import { useEffect, useMemo, useState, type MouseEvent } from 'react'

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

function shouldSkipNode(node: Element) {
  const tagName = node.tagName.toLowerCase()
  const href = node.getAttribute('href') ?? ''
  const src = node.getAttribute('src') ?? ''
  const inlineContent = node.textContent ?? ''

  // Framer's editor bootstrap is only useful in Framer preview and throws
  // 404s in our local/prod app when it tries importing `/vendor/framer.com/*`.
  if (
    href.includes('framer.com/edit/init.mjs') ||
    src.includes('framer.com/edit/init.mjs') ||
    inlineContent.includes('__framer_force_showing_editorbar_since') ||
    inlineContent.includes('framer.com/edit/init.mjs')
  ) {
    return true
  }

  // Also ignore editor-only preload links if any were rewritten to /vendor/*
  if (
    tagName === 'link' &&
    node.getAttribute('rel') === 'modulepreload' &&
    href.includes('framer.com/edit/')
  ) {
    return true
  }

  return false
}

export function LegacyInlinePage({ src }: LegacyInlinePageProps) {
  const [markup, setMarkup] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const appendedNodes = useMemo(() => [] as HTMLElement[], [])

  const handleLegacyLinkClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const target = event.target as HTMLElement | null
    const anchor = target?.closest('a[href]') as HTMLAnchorElement | null
    if (!anchor) return
    if (anchor.target && anchor.target !== '_self') return

    const rawHref = anchor.getAttribute('href')?.trim()
    if (!rawHref) return
    if (
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('#')
    ) {
      return
    }

    const normalizedHref = rawHref.startsWith('./')
      ? `/${rawHref.slice(2)}`
      : rawHref.startsWith('/')
        ? rawHref
        : `/${rawHref}`

    // Legacy Framer content can conflict with SPA routing during hydration.
    // Use full-page navigation for blog links to keep rendering consistent.
    if (
      normalizedHref === '/blog' ||
      normalizedHref === '/blogs' ||
      normalizedHref.startsWith('/blog/') ||
      normalizedHref.startsWith('/blogs/')
    ) {
      event.preventDefault()

      const canonicalHref =
        normalizedHref === '/blog'
          ? '/blogs'
          : normalizedHref.startsWith('/blogs/')
            ? `/blog/${normalizedHref.slice('/blogs/'.length)}`
            : normalizedHref
      const currentPath = window.location.pathname
      const shouldReplaceHistory =
        currentPath.startsWith('/blog/') &&
        (canonicalHref === '/blog' || canonicalHref === '/blogs')

      if (shouldReplaceHistory) {
        window.location.replace(canonicalHref)
      } else {
        window.location.assign(canonicalHref)
      }
    }
  }

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

      // Framer-exported links are often `./path`, which break when rendered
      // inside SPA routes (e.g. `/blogs` + `./blog/slug` -> `/blogs/blog/slug`).
      parsedDoc.querySelectorAll('a[href^="./"]').forEach((link) => {
        const href = link.getAttribute('href')
        if (!href) return
        link.setAttribute('href', href.replace(/^\.\//, '/'))
      })

      const headCandidates = parsedDoc.head.querySelectorAll(
        'meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[rel="icon"],link[rel="modulepreload"],style,script',
      )
      headCandidates.forEach((node) => {
        if (shouldSkipNode(node)) return
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
        if (shouldSkipNode(node)) return
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
    <div className="legacy-inline-shell" onClickCapture={handleLegacyLinkClickCapture}>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      {loading && <div className="legacy-page-loading" aria-hidden="true" />}
    </div>
  )
}
