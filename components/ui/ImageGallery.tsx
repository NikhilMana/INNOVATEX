"use client";

import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  title?: string;
  description?: string;
  images: string[];
}

export function ImageGallery({
  title = "Event Highlights",
  description = "A visual collection of our most memorable moments.",
  images,
}: ImageGalleryProps) {
  return (
    <section className="w-full flex flex-col items-center justify-start py-12">
      <div className="max-w-3xl text-center px-4">
        <h2 className="text-3xl font-display font-bold text-white">
          {title}
        </h2>
        <p className="text-sm text-muted mt-2">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 h-auto md:h-[400px] w-full max-w-5xl mt-10 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-full md:w-48 lg:w-56 h-[300px] md:h-full rounded-2xl overflow-hidden duration-500 md:hover:w-[800px]"
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={src}
              alt={`Gallery Image ${idx + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
