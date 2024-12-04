import React from "react";

import { services } from "../store/constants";

export default function Services() {
  return (
    <section id="services" className="mx-auto px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl">
          We offer comprehensive interior design solutions for every space in
          your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
        {services.map(service => (
          <div
            className={`service-card bg-white rounded-2xl h-64 shadow-lg overflow-hidden ${service.class}`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="service-content">
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
