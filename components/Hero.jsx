import React from 'react'

export const Hero = () => {
  return (
    <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
      <div className="lg:w-3/6">
        <h1 className="inline-block max-w-xl text-3xl font-bold leading-none text-black lg:text-[4.2em]">
          Moving Company in Seattle
        </h1>

        <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
          At Concord, we make every move stress-free and efficient. Whether it's
          residential or commercial, we offer tailored moving solutions designed
          to meet your needs. Experience hassle-free moving with Concord.
        </p>
      </div>
      <div className=" mb-20 mt-44 hidden w-full flex-col rounded-3xl lg:mt-12 lg:inline-block lg:w-3/6">
        <img className=" rounded-3xl" src="/images/icons/logo.jpg" alt="Hero" />
      </div>
      <div className=" my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
        <img className=" rounded-3xl" src="/images/icons/logo.jpg" alt="Hero" />
      </div>
    </div>
  );
}


