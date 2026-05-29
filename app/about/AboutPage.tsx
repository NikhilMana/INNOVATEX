"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function AboutPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Mission />
        <Values />
        <Achievements />
        <Faculty />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef, { stagger: 0.12 });

  return (
    <section
      ref={rootRef}
      className="relative min-h-[70dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={28} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-reveal>
              <Pill pulsing>About InnovateX</Pill>
            </div>
            <h1
              data-reveal
              className="font-display font-extrabold tracking-tighter leading-[0.95]"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                letterSpacing: "-0.04em",
              }}
            >
              We&apos;re building
              <br />
              <GradientText variant="animated">the future</GradientText>.
            </h1>
            <p
              data-reveal
              className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
            >
              InnovateX is the innovation ecosystem of the CSE Artificial
              Intelligence &amp; Machine Learning department at MIT Mysore — a
              student-led community of builders, researchers, writers, and
              organizers.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card-strong shadow-glow-md">
              <Image
                src="/images/logos/logo.png"
                alt="CSE AI & ML — MIT Mysore"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 max-w-4xl">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display mb-4"
        >
          · The Mission
        </p>
        <h2
          data-reveal
          className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Turn <GradientText>curiosity</GradientText> into output.
        </h2>
        <div className="space-y-6 text-muted text-lg md:text-xl leading-relaxed">
          <p data-reveal>
            InnovateX exists because curiosity, on its own, decays. It needs
            structure, peers, and a deadline. We&apos;re a community built
            around four programs that turn raw interest in AI/ML into
            shippable work — workshops that build, talks that inspire, sessions
            that teach, and hackathons that demand demos.
          </p>
          <p data-reveal>
            We&apos;re student-led. Faculty-mentored. Industry-engaged. And
            stubbornly biased toward shipping over discussing.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  const values = [
    {
      title: "Build over Talk",
      description:
        "Working demos beat slides. Always. Every program is designed to produce something that runs.",
    },
    {
      title: "Open by Default",
      description:
        "Code, sessions, archives, magazine — all open. Knowledge compounds when it&apos;s shared.",
    },
    {
      title: "Student-Led",
      description:
        "Every program is owned by students. Faculty mentor; we drive.",
    },
    {
      title: "Curious, Always",
      description:
        "The field moves fast. We move with it — but never just because something is trending.",
    },
  ];

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · What We Believe
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Four <GradientText>principles</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v, idx) => (
            <GlassCard
              key={v.title}
              data-reveal
              hoverable
              variant={idx % 2 === 0 ? "default" : "conic"}
              className="p-8 md:p-10"
            >
              <div className="space-y-3">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-purple-400">
                  0{idx + 1}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p
                  className="text-muted text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.description }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const rootRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(rootRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageItems = [
    {
      id: 1,
      title: "MIT Mysore",
      desc: "Department of CSE-AI&ML Campus.",
      url: "/images/achievements/image1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Agentic AI Hackathon",
      desc: "Students participating and winning in the Agentic AI Hackathon.",
      url: "/images/achievements/image10.jpeg",
      span: "md:row-span-1",
    },
    {
      id: 3,
      title: "Cosmic Magazine Launch",
      desc: "Launch of the official department magazine, COSMIC.",
      url: "/images/achievements/image12.jpeg",
      span: "md:row-span-1",
    },
    {
      id: 4,
      title: "TIEU - 2025",
      desc: "Winner in Idea Presentation.",
      url: "/images/achievements/image16.jpeg",
      span: "md:row-span-2",
    },
    {
      id: 5,
      title: "Ethnotech Pitching 2026",
      desc: "Won 1st Prize in Project Presentation.",
      url: "/images/achievements/image22.jpeg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 6,
      title: "Publication Milestones",
      desc: "23 Research Publications across renowned journals.",
      url: "/images/achievements/image7.jpeg",
      span: "md:row-span-2",
    },
    {
      id: 7,
      title: "Mahadasara Sports",
      desc: "Team achievements and sports events.",
      url: "/images/achievements/image31.jpeg",
      span: "md:col-span-2 md:row-span-1",
    }
  ];

  return (
    <section ref={rootRef} className="relative w-full">
      <div ref={containerRef} className="relative h-[300vh] w-full">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg">
          
          {/* Text Content overlay at top */}
          <div className="absolute top-0 left-0 w-full z-20 pt-24 md:pt-32 pb-32 bg-gradient-to-b from-bg via-bg/80 to-transparent pointer-events-none">
            <div className="container-x w-full">
              <div className="max-w-2xl space-y-5">
                <div className="inline-flex items-center space-x-2">
                  <span className="h-px w-6 bg-purple-400"></span>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display">
                    Highlights
                  </p>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                  Our <GradientText variant="animated">Achievements</GradientText>.
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl drop-shadow-md">
                  A visual journey through the department's proudest moments, successful events, and outstanding accomplishments.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bento Gallery Canvas */}
          <div className="w-full absolute inset-0 pt-64 md:pt-48 flex items-center justify-center">
            <InteractiveImageBentoGallery
              imageItems={imageItems}
              title=""
              description=""
              scrollProgress={scrollYProgress}
            />
            
            <div className="text-center absolute bottom-8 left-0 right-0 font-mono uppercase text-[10px] font-semibold z-20 pointer-events-none">
              <p className="text-white/60 tracking-widest drop-shadow">Scroll down to explore the gallery horizontally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  const faculties = [
    {
      name: "Dr. Ranjith K C",
      designation: "Head of Department, CSE-AI&ML",
      image: "/images/faculty/dr_ranjith_k_c_v2.jpg",
    },
    {
      name: "Prof. Yashaswini A R",
      designation: "Assistant Professor",
      image: "/images/faculty/prof_yashaswini_a_r.jpg",
    },
    {
      name: "Prof. Priyanka N",
      designation: "Assistant Professor",
      image: "/images/faculty/prof_priyanka_n.jpg",
    },
    {
      name: "Prof. Usha",
      designation: "Assistant Professor",
      image: "/images/faculty/prof_usha.jpg",
    },
    {
      name: "Prof. Nidarsh M P",
      designation: "Assistant Professor",
      image: "/images/faculty/prof_nidarsh_m_p.jpg",
    },
    {
      name: "Prof. Rakshitha B",
      designation: "Teaching Assistant",
      image: "/images/faculty/prof_rakshitha_b_v2.jpg",
    },
    {
      name: "Prof. Sumith H K",
      designation: "Teaching Assistant",
      image: "/images/faculty/prof_sumith_h_k.jpg",
    },
    {
      name: "Mr. Anand V",
      designation: "Lab Instructor",
      image: "/images/faculty/mr_anand_v.jpg",
    },
    {
      name: "Mrs. Pooja K",
      designation: "Attendant",
      image: "/images/faculty/mrs_pooja_k_v2.jpg",
    },
  ];

  return (
    <section ref={rootRef} className="relative z-10 section-padding overflow-hidden bg-bg border-t border-white/5 -mt-[100vh]">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Leadership
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Our <GradientText>Faculty</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, idx) => (
            <GlassCard key={idx} data-reveal className="p-8 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/10 relative">
                <Image 
                  src={faculty.image} 
                  alt={faculty.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold font-display mb-1 text-white">{faculty.name}</h3>
              <p className="text-purple-400/90 font-medium text-sm">{faculty.designation}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
