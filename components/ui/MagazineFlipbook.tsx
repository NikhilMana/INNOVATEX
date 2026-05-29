"use client";

import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MagazineFlipbookProps {
  pages: string[]; // Array of image URLs for each page
  title?: string;
}

// react-pageflip requires forwardRef for custom page components if we want to use complex things, 
// but we can just use normal divs inside it.
export const MagazineFlipbook = ({ pages, title = "Magazine" }: MagazineFlipbookProps) => {
  const bookRef = useRef<any>(null);
  const isSmallScreen = useMediaQuery('only screen and (max-width: 640px)');
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFlipNext = () => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handleFlipPrev = () => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  if (!mounted) {
    return (
      <div className="w-full h-[600px] flex justify-center items-center">
        <Loader2 className="animate-spin text-purple-500" size={32} />
      </div>
    );
  }

  // To make it look like a real book, the aspect ratio of the pages is crucial.
  // We'll use standard A4/Magazine aspect ratio (width: 210, height: 297).
  const pageW = isSmallScreen ? 300 : 400;
  const pageH = isSmallScreen ? 424 : 565;

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 relative">
      <div className="mb-6 flex items-center justify-between w-full max-w-3xl px-4">
        <Button 
          variant="secondary" 
          onClick={handleFlipPrev} 
          disabled={currentPage === 0}
          icon={<ChevronLeft size={16} />}
          iconPosition="left"
        >
          Prev
        </Button>
        <span className="text-white/60 font-mono text-sm">
          Page {currentPage === 0 ? "Cover" : currentPage} / {pages.length - 1}
        </span>
        <Button 
          variant="secondary" 
          onClick={handleFlipNext} 
          disabled={currentPage >= pages.length - 1}
          icon={<ChevronRight size={16} />}
        >
          Next
        </Button>
      </div>

      <div className="relative shadow-2xl shadow-black/50 rounded-md">
        {/* @ts-ignore - react-pageflip types are sometimes problematic with React 18 */}
        <HTMLFlipBook
          ref={bookRef}
          width={pageW}
          height={pageH}
          size="fixed"
          minWidth={pageW}
          maxWidth={pageW}
          minHeight={pageH}
          maxHeight={pageH}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={isSmallScreen}
          onFlip={onFlip}
          className="book-wrapper shadow-2xl"
          style={{ margin: "0 auto" }}
        >
          {pages.map((imgSrc, index) => (
            <div key={index} className="page bg-white relative overflow-hidden border border-gray-200">
              <Image 
                src={imgSrc} 
                alt={`${title} - Page ${index}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 300px, 400px"
                priority={index < 4}
              />
              
              {/* Optional page number overlay for inner pages */}
              {index > 0 && index < pages.length - 1 && (
                <div className={`absolute bottom-3 ${index % 2 === 0 ? 'left-4' : 'right-4'} text-xs text-gray-500 font-serif z-10`}>
                  {index}
                </div>
              )}
              
              {/* Spine shadow effect */}
              {index > 0 && index < pages.length - 1 && (
                <div className={`absolute inset-y-0 w-8 pointer-events-none z-10 ${
                  index % 2 === 0 
                    ? 'right-0 bg-gradient-to-l from-black/10 to-transparent' 
                    : 'left-0 bg-gradient-to-r from-black/10 to-transparent'
                }`} />
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      
      <p className="mt-8 text-sm text-white/40 tracking-wide font-light">
        Tip: Drag the corners or click to flip pages
      </p>
    </div>
  );
};
