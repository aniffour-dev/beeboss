"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Logo {
  src: string;
  alt: string;
}

interface MarqueeProps {
  logos: Logo[];
  speed?: number;
  gap?: number;
}

const Brands: React.FC<MarqueeProps> = ({
  logos,
  speed = 20,
  gap = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const marqueeContent = marqueeRef.current;
    const totalWidth = marqueeContent.offsetWidth;

    // Clone the content for seamless loop
    const clone = marqueeContent.cloneNode(true);
    containerRef.current.appendChild(clone);

    // GSAP animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to([marqueeContent, clone], {
      x: -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    containerRef.current.addEventListener("mouseenter", () => tl.pause());
    containerRef.current.addEventListener("mouseleave", () => tl.play());

    return () => {
      tl.kill();
    };
  }, [speed]);

  return (
    <div className="w-full overflow-hidden">
      <div ref={containerRef} className="flex">
        <div ref={marqueeRef} className="flex">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ marginRight: `${gap}px` }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
