import { HeroSection } from "@/components/hero-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SpeakersSection />
      <ScheduleSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
