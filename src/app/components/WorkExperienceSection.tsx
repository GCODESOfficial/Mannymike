const EXPERIENCES = [
    {
      company: "Pushup Brands, Nigeria",
      duration: "March 2021 – March 2024",
      role: "UI/UX Designer, Strategist",
      details: [
        "Helped brands develop strategies to help boost their visibility",
        "Create designs to meet both users and business needs",
      ],
      dotColor: "bg-purple-400",
    },
    {
      company: "Paradigm Media, Nigeria",
      duration: "March 2024 – Present",
      role: "Product (UI/UX) Designer",
      details: ["Create designs to meet both users and business needs."],
      dotColor: "bg-neutral-900",
    },
    {
      company: "Mih Branding Agency",
      duration: "Sept 2024 – Present",
      role: "Product (UI/UX) Designer",
      details: ["Create designs to meet both users and business needs."],
      dotColor: "bg-purple-400",
    },
    {
      company: "Web3Raiser, Qatar",
      duration: "Dec. 2024 – Jan. 2025",
      role: "UI/UX Designer",
      details: ["Create designs to meet both users and business needs."],
      dotColor: "bg-neutral-900",
    },
  ];
  
  export default function WorkExperienceSection() {
    return (
      <section className="bg-[#1F1F1F] text-white px-6 md:px-20 py-16 rounded-b-[2rem] hidden md:block">
        <h2 className="text-5xl font-medium text-center">My Work Experience</h2>
        <p className="text-center text-xl text-gray-400 mt-2 font-[TTFirsNeueReg]">
  Happiness{" "}
  <span className="text-black ">|</span>{" "}
  Trust{" "}
  <span className="text-black px-1">|</span>{" "}
  Empathy{" "}
  <span className="text-black px-1">|</span>{" "}
  Honesty
</p>

  
        <div className="relative mt-20 font-[TTFirsNeueReg]">
          {/* The continuous vertical dashed line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-gray-600"></div>
  
          <div className="flex flex-col space-y-16 relative z-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-8 items-start">
                {/* Left side: Company and duration */}
                <div className="text-right md:text-left">
                  <h3 className="font-bold text-2xl -mt-2">{exp.company}</h3>
                  <p className="text-gray-400 ">{exp.duration}</p>
                </div>
  
                {/* Center timeline dot */}
                <div className="flex justify-center">
                <div className="bg-white border border-dashed border-black rounded-full">
                    <div
                    className={`w-5 h-5 rounded-full border-2 border-white ${exp.dotColor} z-20`}
                  />

                    </div>
                  
                </div>
  
                {/* Right side: Role and details */}
                <div>
                  <h3 className="font-bold text-2xl">{exp.role}</h3>
                  <ul className="text-gray-300 list-disc pl-5 mt-2">
                    {exp.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  