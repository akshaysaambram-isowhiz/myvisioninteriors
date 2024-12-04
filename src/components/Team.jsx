import React from "react";
import { team } from "../store/constants";

export default function Team() {
  return (
    <section className="bg-white">
      <div className="px-8 py-12 mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl">
          Meet our
          <span className="text-orange-500"> Creative Designers</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600">
          Based in Hyderabad, our team specializes in creating stunning interior
          designs that transform your spaces into captivating environments.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map(member => (
            <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg">
              <img
                className="object-cover w-24 h-24 mx-auto rounded-full ring-4 ring-orange-400"
                src={member.image}
                alt="Designer"
              />
              <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
                {member.name}
              </h2>
              <p className="mt-2 text-center text-gray-500">{member.role}</p>
              <p className="mt-4 text-sm text-gray-600 text-center">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
