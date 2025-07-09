'use client';

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Pushup Brands, Nigeria',
    role: 'UI/UX Designer, Strategist',
    date: 'March 2021 - March 2024',
  },
  {
    company: 'Paradigm Media, Nigeria',
    role: 'Product (UI/UX) Designer',
    date: 'March 2024 - Present',
  },
  {
    company: 'Mih Branding Agency',
    role: 'Product (UI/UX) Designer',
    date: 'Sept 2024 - Present',
  },
  {
    company: 'Web3Raiser, Qatar',
    role: 'Product (UI/UX) Designer',
    date: 'Dec. 2024 - Jan. 2025',
  },
];

export default function Experience() {
  return (
    <section className="bg-[#1f1f1f] text-white py-12 pb-40 px-4 mt-14 md:px-16 min-h-screen font-[TTFirsNeueReg] md:hidden rounded-b-[2rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[TTFirsNeueBold]">
        My Work Experience
      </h2>
      <div className="text-center mb-10 space-x-4 text-sm opacity-80">
        <span>Happiness</span>
        <span>Trust</span>
        <span>Empathy</span>
        <span>Honesty</span>
      </div>

      <div className="space-y-10 text-center">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <p className="text-sm">{exp.role}</p>
            <p className="text-sm opacity-80 mt-1">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}