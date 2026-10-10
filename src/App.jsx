import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ValueStrip from './components/ValueStrip'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsSection from './components/BenefitsSection'
import PassportShowcase from './components/PassportShowcase'
import BetaRegistration from './components/BetaRegistration'
import PrivacyDraft from './components/PrivacyDraft'
import Footer from './components/Footer'
import { SECTION_IDS } from './data/navigation'
import { useActiveSection, useScrollReveal } from './hooks/useScrollEffects'

const SPY_IDS = [
  SECTION_IDS.hero,
  SECTION_IDS.features,
  SECTION_IDS.howItWorks,
  SECTION_IDS.benefits,
  SECTION_IDS.passport,
  SECTION_IDS.beta,
]

export default function App() {
  useScrollReveal()
  const activeId = useActiveSection(SPY_IDS)

  return (
    <div id={SECTION_IDS.top} className="min-h-dvh">
      <Header activeId={activeId} />
      <main id="noi-dung">
        <HeroSection />
        <ValueStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PassportShowcase />
        <BetaRegistration />
        <PrivacyDraft />
      </main>
      <Footer />
    </div>
  )
}
