import Image from "next/image";

export default function FinalResult() {
  return (
    <div className="relative w-full min-h-screen px-4 py-16 overflow-hidden">
      {/* Grid background */}

      {/* Left teardrop */}
      <Image
        src="/images/int10.svg"
        alt="left"
        width={300}
        height={300}
        className="absolute bottom-[18%] -left-40 rotate-90 z-10 hidden md:block"
      />

      {/* Right teardrop */}
      <Image
        src="/images/int10.svg"
        alt="right"
        width={300}
        height={300}
        className="absolute top-0 -right-20 z-10  hidden md:block"
      />

      <div className="flex flex-col justify-center items-center w-full">
      <h2 className="md:text-[80px] text-3xl text-center md:text-left font-bold text-black">Final Result</h2>
      <Image
								src="/images/int line.svg"
								alt="Underline"
								width={450}
								height={600}
								className=" h-auto px-10 md:px-0"
							/>

          <p className="md:text-2xl text-[#5E5D5C] md:my-2 my-5 max-w-xl text-center mx-auto">
            High-fidelity screens designed for real-world testing and
            interaction.
          </p>
          <p className="text-4xl font-semibold text-[#5E5D5C] my-14 md:block hidden">Mobile App</p>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-6 text-center md:text-left">
        {/* Left text */}
        <div className="text-xl text-[#5E5D5C] space-y-80 pt-36 md:block hidden">
          <p>
            Our smart algorithm helps users find compatible matches based on
            preferences and interests.
          </p>
          <p>
            A modern interface that makes navigating the app effortless and
            enjoyable.
          </p>
          <p>
            Features that encourage meaningful interactions beyond just
            swiping.
          </p>
        </div>

        {/* Center mockup */}
        <div className="flex flex-col items-center">
          

          <Image
            src="/images/int9.svg"
            alt="mobile"
            width={300}
            height={440}
            className="rounded-xl shadow-lg pt-10 md:pt-0"
          />
        </div>

        {/* Right text */}
        <div className="text-xl text-[#5E5D5C] space-y-80 pt-96  md:block hidden">
          <p>
            Swipe through beautifully designed profiles with ease and clarity.
          </p>
          <p>
            Tailored recommendations to enhance your dating journey.
          </p>
        </div>
      </div>
    </div>
  );
}
