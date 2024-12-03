import React, { useState, useEffect } from "react";

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
