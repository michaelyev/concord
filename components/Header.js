/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <>

      <div
        className="
        bg-blue
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Local Moves starting at
        <span className="pl-3 underline">
          $100/hr
        </span>
      </div>
      <div className="grotesk mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="w-full mt-4 flex pb-4 pl-8 justify-between">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            CONCORD Moving
          </a>
          <a href="tel:+12062552708">206-255-2708</a>
          
        </div>
      </div>
    </>
  );
}
