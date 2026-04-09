import { LegacyInlinePage } from '~/components/ui/LegacyInlinePage'
import { investmentOpportunityContent } from '~/data/investment-opportunity'

export default function InvestmentOpportunityRoute() {
  return <LegacyInlinePage src={investmentOpportunityContent.source} />
}
