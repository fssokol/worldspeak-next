import ContactSection from "../sections/ContactSection"
import FaqSection from "../sections/FaqSection"
import HeroSection from "../sections/HeroSection"
import WhySection from "../sections/WhySection"

export default function Page() {
  return (
    <main className="pb-12">
      <HeroSection />
      <WhySection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
