import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-orange-500 sm:text-5xl">
            About My Vision Interiors
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            My Vision Interiors is a professionally managed company at the
            forefront of interior design in Hyderabad. We pride ourselves on our
            expertise, creativity, and comprehensive approach to transforming
            spaces.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-orange-700">
                Expert Team
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>
                  Our experienced interior designers and skilled workers are
                  experts in various design styles and execution techniques.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-orange-700">
                Comprehensive Services
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>
                  From dining rooms to kitchens, bedrooms to TV units, we handle
                  all types of interior design and execution.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-orange-700">
                Personalized Approach
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>
                  We thoroughly evaluate each property and collaborate closely
                  with clients to bring their design ideas to life.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
