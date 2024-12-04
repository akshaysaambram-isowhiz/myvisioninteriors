import React from "react";

import { stats } from "../store/constants";

export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted Interior Design Experts in Hyderabad
        </h2>
        <p className="opacity-80 mb-10 max-w-2xl mx-auto">
          Transforming spaces with innovative design, precision, and creativity.
          Our team brings your interior vision to life with unparalleled
          expertise and passion.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(stat => (
            <div className="rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">
                {stat.figure}
              </h3>
              <p className="opacity-80">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
