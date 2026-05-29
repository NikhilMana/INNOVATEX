import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Particles } from "@/components/ui/Particles";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden ai-mesh noise-overlay">
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={30} />

      <div className="relative z-10 container-x px-6 text-center space-y-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-purple-400 font-display">
          · Page Not Found
        </p>
        <h1
          className="font-display font-extrabold tracking-tighter leading-none"
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
        >
          <GradientText variant="animated">404</GradientText>
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-md mx-auto">
          That page wandered into the wrong dimension. Let&apos;s get you back
          to InnovateX.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button size="lg" icon={<Home size={16} />} iconPosition="left">
            <Link href="/">Take me home</Link>
          </Button>
          <Link
            href="/events/vision-x"
            className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
          >
            See Vision X 2026
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
