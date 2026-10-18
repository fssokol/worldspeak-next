import ContactSection from "../sections/ContactSection"
import FaqSection from "../sections/FaqSection"
import HeroSection from "../sections/HeroSection"
import TeamSection from "../sections/TeamSection"
import WhySection from "../sections/WhySection"

export default function Page() {
  return (
    <main className="pb-12">
      <HeroSection />
      <WhySection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
