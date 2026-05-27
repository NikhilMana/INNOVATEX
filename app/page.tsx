import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { IntroSplash } from "@/components/home/IntroSplash";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { EventsGrid } from "@/components/home/EventsGrid";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { CosmicPreview } from "@/components/home/CosmicPreview";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { TeamPreview } from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <IntroSplash />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />
        <AboutSnapshot />
        <EventsGrid />
        <UpcomingEvents />
        <CosmicPreview />
        <SponsorsMarquee />
        <TeamPreview />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
