import { LEGACY_HOME_HTML_URL } from '~/constants/legacyHome'
import { LegacyInlinePage } from '~/components/ui/LegacyInlinePage'

/**
 * Exact clone of the exported Framer home (`public/legacy/index.html`).
 * React section rebuild: `/home-react` → `components/home/HomePage.tsx`.
 */
export default function IndexRoute() {
  return <LegacyInlinePage src={LEGACY_HOME_HTML_URL} />
}
