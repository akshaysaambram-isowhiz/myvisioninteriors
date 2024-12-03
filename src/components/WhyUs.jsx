import React from "react";

const bullets = [
  {
    img: "../assets/bullet1.png",
    name: "Highly Qualified Professionals",
    description:
      "We have highly qualified professionals who are experts in their field.",
  },
];

export default function WhyUs() {
  return (
    <section className="overflow-hidden pt-20 px-12 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                    alt="Interior Design Project"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                    alt="Interior Design Consultation"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                    alt="Interior Design Workspace"
                    className="w-full rounded-2xl"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <img src="./assets/circles.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-orange-500">
                Why My Vision?
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-[40px]/[48px]">
                Transforming Spaces with Precision and Passion
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <img
                    src="./assets/time.svg"
                    alt=""
                    className="h-6 w-6 text-orange-500 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      On-time
                    </h3>
                    <p className="text-gray-600">
                      We strictly adhere to the timings assigned to us. You set
                      the time and we'll stay committed to it!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Standard Pricing
                    </h3>
                    <p className="text-gray-600">
                      You don't have to break the bank to get your problem
                      fixed. Our services are aptly priced without hidden costs!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Efficient Ergonomics
                    </h3>
                    <p className="text-gray-600">
                      We have accredited equipment and committed experts to see
                      the work through with ease
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Certified Architects
                    </h3>
                    <p className="text-gray-600">
                      All our professionals are certified and excel in their
                      respective fields. They are dedicated and know their jobs
                      well
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
