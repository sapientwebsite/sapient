import { LegacyInlinePage } from '~/components/ui/LegacyInlinePage'
import { aboutUsContent } from '~/data/about-us'

export default function AboutUsRoute() {
  return <LegacyInlinePage src={aboutUsContent.source} />
}
