const NAV_LINK_HINTS = new Set([
  '/',
  '/about-us',
  '/blog',
  '/blogs',
  '/contact',
  '/contact-us',
  '/cpc',
  '/disclosure',
  '/disclosures',
  '/faq',
  '/investment-opportunity',
  '/investorcharter',
  '/kyc',
  '/kym',
  '/legal',
  '/privacy-policy',
  '/stewardshipcode',
  '/terms-conditions',
])

function normalizePathname(href: string) {
  const trimmed = href.trim()
  if (!trimmed || trimmed.startsWith('#')) return null
  if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) return null

  const normalizedHref = trimmed.startsWith('./')
    ? `/${trimmed.slice(2)}`
    : trimmed.startsWith('/')
      ? trimmed
      : trimmed.startsWith('http://') || trimmed.startsWith('https://')
        ? trimmed
        : `/${trimmed}`

  try {
    const url = new URL(normalizedHref, 'https://sapientwealth.in')
    if (url.origin !== 'https://sapientwealth.in') return null
    return url.pathname
  } catch {
    return null
  }
}

export function normalizeLegacyAnchors(root: ParentNode) {
  root.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href')
    if (!href) return
    if (href.startsWith('./')) {
      link.setAttribute('href', href.replace(/^\.\//, '/'))
    }
  })
}

function uniqueTopLevel(elements: HTMLElement[]) {
  return elements.filter(
    (element) => !elements.some((other) => other !== element && other.contains(element)),
  )
}

function getNavHeavyBlocks(mainRoot: HTMLElement) {
  const blocks = Array.from(mainRoot.querySelectorAll<HTMLElement>('div,section,nav'))
  const candidates = blocks.filter((block) => {
    const descendantCount = block.querySelectorAll('*').length
    if (descendantCount > 250) return false

    const htmlSize = block.outerHTML.length
    if (htmlSize > 120_000) return false

    if (block.querySelector('[data-framer-name="Hero Section"]')) return false
    if (block.querySelector('[data-framer-name="Footer"]')) return false

    const paths = new Set<string>()
    block.querySelectorAll('a[href]').forEach((anchor) => {
      const href = anchor.getAttribute('href')
      if (!href) return
      const path = normalizePathname(href)
      if (!path || !NAV_LINK_HINTS.has(path)) return
      paths.add(path)
    })
    return paths.size >= 4
  })

  return uniqueTopLevel(candidates)
}

export function getFooterBlocks(mainRoot: HTMLElement) {
  const explicitFooters = uniqueTopLevel(
    Array.from(mainRoot.querySelectorAll<HTMLElement>('[data-framer-name="Footer"]')),
  )
  if (explicitFooters.length > 0) return explicitFooters

  const navBlocks = getNavHeavyBlocks(mainRoot)
  return navBlocks.length > 0 ? [navBlocks[navBlocks.length - 1]] : []
}

export function getHeaderBlock(mainRoot: HTMLElement) {
  const navBlocks = getNavHeavyBlocks(mainRoot)
  return navBlocks[0] ?? null
}

export function stripLegacyChrome(mainRoot: HTMLElement) {
  const header = getHeaderBlock(mainRoot)
  const footers = getFooterBlocks(mainRoot)

  header?.remove()
  footers.forEach((footer) => footer.remove())
}

export function extractLegacyHeaderFooter(html: string) {
  const parsedDoc = new DOMParser().parseFromString(html, 'text/html')
  const mainRoot = (parsedDoc.body.querySelector('#main') ?? parsedDoc.body) as HTMLElement
  normalizeLegacyAnchors(mainRoot)

  const header = getHeaderBlock(mainRoot)
  const footers = getFooterBlocks(mainRoot)

  return {
    headerHtml: header?.outerHTML ?? '',
    footerHtml: footers.map((footer) => footer.outerHTML).join(''),
  }
}
