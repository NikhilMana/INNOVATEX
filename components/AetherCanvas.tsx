'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const FRAME_COUNT = 290;

export default function AetherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textARef = useRef<HTMLDivElement>(null);
  const textBRef = useRef<HTMLDivElement>(null);
  const textCRef = useRef<HTMLDivElement>(null);
  const textDRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(imgArray);
          setLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (!loaded || images.length === 0 || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Drawing function
    const renderFrame = (frameIndex: number) => {
      let idx = Math.round(frameIndex);
      if (idx >= FRAME_COUNT) idx = FRAME_COUNT - 1;
      if (idx < 0) idx = 0;
      
      const img = images[idx];
      if (!img) return;

      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Initial render and resize
    renderFrame(0);
    const handleResize = () => renderFrame(proxy.frame);
    window.addEventListener('resize', handleResize);

    const proxy = { frame: 0 };

    // Set initial text states
    gsap.set([textARef.current, textCRef.current], {
      opacity: 0,
      x: -150,
      scale: 0.9
    });
    
    gsap.set([textBRef.current, textDRef.current], {
      opacity: 0,
      x: 150,
      scale: 0.9
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (window.innerHeight * 4),
        scrub: 1, // Smooth scrubbing
      }
    });

    // Animate Frames from 0 to 119 across the entire timeline
    tl.to(proxy, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      onUpdate: () => renderFrame(proxy.frame)
    }, 0);

    // Fade out indicator quickly
    tl.to(indicatorRef.current, { opacity: 0, duration: 0.05 }, 0);

    // Text Animations (Mapped proportionally to the timeline duration of 1, representing 0 to 100%)
    
    // Beat A (Left: 0 to 0.20)
    tl.to(textARef.current, { opacity: 1, x: 0, scale: 1, ease: "back.out(1.2)", duration: 0.05 }, 0.0);
    tl.to(textARef.current, { opacity: 0, y: -50, scale: 0.95, ease: "power2.in", duration: 0.05 }, 0.15);

    // Beat B (Right: 0.25 to 0.45)
    tl.to(textBRef.current, { opacity: 1, x: 0, scale: 1, ease: "back.out(1.2)", duration: 0.05 }, 0.25);
    tl.to(textBRef.current, { opacity: 0, y: -50, scale: 0.95, ease: "power2.in", duration: 0.05 }, 0.40);

    // Beat C (Left: 0.50 to 0.70)
    tl.to(textCRef.current, { opacity: 1, x: 0, scale: 1, ease: "back.out(1.2)", duration: 0.05 }, 0.50);
    tl.to(textCRef.current, { opacity: 0, y: -50, scale: 0.95, ease: "power2.in", duration: 0.05 }, 0.65);

    // Beat D (Right: 0.75 to 0.95)
    tl.to(textDRef.current, { opacity: 1, x: 0, scale: 1, ease: "back.out(1.2)", duration: 0.05 }, 0.75);
    tl.to(textDRef.current, { opacity: 0, y: -50, scale: 0.95, ease: "power2.in", duration: 0.05 }, 0.90);

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === containerRef.current) t.kill();
      });
    };
  }, [loaded, images]);

  return (
    <>
      {/* Loading Screen Overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/60">
          <div className="w-48 h-px bg-white/20 mb-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-white animate-pulse w-full" />
          </div>
          <p className="text-xs tracking-[0.2em] font-light">INITIALIZING AETHER...</p>
        </div>
      )}

      <div ref={containerRef} className="relative w-full bg-black" style={{ height: '600vh' }}>
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          {/* Canvas */}
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full object-contain" style={{ opacity: loaded ? 1 : 0 }} />

          {/* Overlays Container */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
            
            {/* Scroll Indicator */}
            <div ref={indicatorRef} className="absolute bottom-12 flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] text-white/50">SCROLL TO EXPLORE</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
            </div>

            {/* Text Beats Container */}
            <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center h-full">
              
              {/* Beat A - Left */}
              <div ref={textARef} className="absolute top-16 md:top-auto left-6 md:left-12 max-w-md lg:max-w-lg text-left">
                <div className="glass-card p-6 md:p-10 shadow-2xl backdrop-blur-md">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight gradient-text mb-4">
                    INNOVATEX 2025
                  </h2>
                  <p className="text-base md:text-lg text-white/90 font-medium tracking-wide">
                    Building the Future of AI Innovation at MIT Mysore.
                  </p>
                </div>
              </div>

              {/* Beat B - Right */}
              <div ref={textBRef} className="absolute bottom-32 md:bottom-auto right-6 md:right-12 max-w-md lg:max-w-lg text-right">
                <div className="glass-card p-6 md:p-10 shadow-2xl backdrop-blur-md flex flex-col items-end">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight gradient-text mb-4">
                    30+ EVENTS
                  </h2>
                  <p className="text-base md:text-lg text-white/90 font-medium tracking-wide">
                    Explore the innovation ecosystem of the CSE AI & ML department.
                  </p>
                </div>
              </div>

              {/* Beat C - Left */}
              <div ref={textCRef} className="absolute top-16 md:top-auto left-6 md:left-12 max-w-md lg:max-w-lg text-left">
                <div className="glass-card p-6 md:p-10 shadow-2xl backdrop-blur-md">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight gradient-text mb-4">
                    COSMIC MAGAZINE
                  </h2>
                  <p className="text-base md:text-lg text-white/90 font-medium tracking-wide">
                    A <span className="text-cyan-400 font-semibold">closed-loop</span> network of tech insights and publications.
                  </p>
                </div>
              </div>

              {/* Beat D - Right */}
              <div ref={textDRef} className="absolute bottom-32 md:bottom-auto right-6 md:right-12 max-w-md lg:max-w-lg text-right">
                <div className="glass-card p-6 md:p-10 shadow-2xl backdrop-blur-md flex flex-col items-end">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight gradient-text mb-4">
                    137+ MEMBERS
                  </h2>
                  <p className="text-base md:text-lg text-white/90 font-medium tracking-wide">
                    Building, learning, and shipping the future, <span className="text-[#FF0055] font-semibold">together</span>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
