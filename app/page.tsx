import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { IntroSplash } from "@/components/home/IntroSplash";
import AetherCanvas from "@/components/AetherCanvas";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { EventsGrid } from "@/components/home/EventsGrid";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { CosmicPreview } from "@/components/home/CosmicPreview";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { LeadershipMessages } from "@/components/home/LeadershipMessages";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <IntroSplash />
      <ScrollProgress />
      <Navbar />
      
      {/* Live Event Alert */}
      <div className="fixed top-24 right-6 md:right-12 z-[90] animate-fade-in pointer-events-auto">
        <a href="/events/vision-x">
          <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-magenta/20 border border-magenta/50 px-4 py-2 pr-5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,0,85,0.3)] transition-all hover:scale-105 hover:bg-magenta/30 hover:shadow-[0_0_25px_rgba(255,0,85,0.5)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-magenta"></span>
            </span>
            <span className="tracking-wide">Live: Vision X</span>
          </button>
        </a>
      </div>

      {/* Inserted AetherCanvas here to replace RobotScene */}
      <AetherCanvas />

      <main id="main" className="relative z-10 bg-[#0d0d1a] -mt-[100vh]">
        <HeroSection />
        <LeadershipMessages />
        <AboutSnapshot />
        <EventsGrid />
        <UpcomingEvents />
        <CosmicPreview />
        <SponsorsMarquee />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
