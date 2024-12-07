import React, { useState, useEffect } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const images = [
  "./assets/hero1.avif",
  "./assets/hero2.jpg",
  "./assets/hero3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Animate hero text with a dynamic entrance
    const heroTimeline = gsap.timeline();

    heroTimeline
      .fromTo(
        "h1",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
      .fromTo(
        "p",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Add a subtle parallax effect to background images
    gsap.utils
      .toArray("section div[style*='backgroundImage']")
      .forEach((bgImage, index) => {
        gsap.to(bgImage, {
          backgroundPosition: `50% ${index % 2 === 0 ? "120%" : "80%"}`,
          ease: "power1.inOut",
          duration: 5,
          repeat: -1,
          yoyo: true,
        });
      });
  });

  return (
    <section className="relative isolate w-full">
      <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity ease-in-out duration-[3000ms] ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}
        </div>

        {/* Overlay Content  */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-100">
              Transforming Spaces, Transforming Lives
            </h1>
            <p className="mb-6">A Complete Space Design Studio in Hyderabad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
