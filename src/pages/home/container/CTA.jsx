import React from 'react';

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
      <section className="relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="col-span-12">
            <h2 className="text-white font-roboto font-bold text-2xl">
              Get out stories delivered From us to your inbox
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                placeholder="Your Email"
              />
              <button className="px-4 py-3 rounded-lg bg-primary text-white w-full font-bold">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;