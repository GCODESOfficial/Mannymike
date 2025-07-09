import Image from "next/image";

const personas = [
  {
    name: "Daniel Adeyemi",
    age: 28,
    role: "Software Engineer",
    avatar: "/images/int/ava1.svg", // replace with your actual image path
    frustrations:
      "Busy schedule makes it hard to meet new people; dislikes shallow small talk; worried about fake profiles and catfishing.",
    goals:
      "Looking to ease back into dating after divorce and find a genuine connection.",
  },
  {
    name: "Aisha",
    age: 24,
    role: "Content Creator",
    avatar: "/images/int/ava2.svg",
    frustrations:
      "Finds it hard to differentiate between people who want something serious and those who don’t; worried about safety when meeting strangers.",
    goals:
      "Wants to meet interesting people for casual dating but is open to a serious connection.",
  },
  {
    name: "Michael",
    age: 35,
    role: "Entrepreneur",
    avatar: "/images/int/ava3.svg",
    frustrations:
      "Many matches don’t lead to real conversations; dislikes people who aren’t upfront about their intentions; finds online dating overwhelming.",
    goals:
      "Looking to ease back into dating after divorce and find a genuine connection.",
  },
];

export default function UserPersonas() {
    return (
      <section className="md:px-10 px-4 py-16 bg-white">
        
        <h2 className="md:text-[90px] text-3xl text-center md:text-left font-bold text-black">User Personas</h2>
        <Image src="/images/int line.svg" alt="Segnigo Page 1" width={800} height={600} className="w-auto px-10 md:px-0 h-auto"/>
  
        {/* Header Row */}
        <div className="md:grid grid-cols-3 gap-8 font-semibold text-black text-3xl mb-6 pb-2 hidden">
          <div></div>
          <div>Frustrations</div>
          <div>Goals</div>
        </div>
  
        {/* Persona Rows */}
        {personas.map((persona, index) => (
          <div
            key={index}
            className="grid md:grid-cols-3 gap-8 md:py-6 py-10 border-b last:border-none items-start"
          >
            {/* Left: Persona Info */}
            <div className="flex items-center flex-col md:flex-row justify-center md:justify-start gap-4">
              <Image
                src={persona.avatar}
                alt={persona.name}
                width={48}
                height={48}
                className="rounded-full h-auto w-auto"
              />
              <div>
                <p className="font-semibold text-black md:text-3xl text-2xl text-center md:text-left">
                  {persona.name}, {persona.age}
                </p>
                <p className="md:text-lg text-gray-500 text-center md:text-left">{persona.role}</p>
              </div>
            </div>
  
            {/* Center: Frustrations */}
            <h1 className="text-lg font-semibold md:hidden text-center pt-10">Frustrations</h1>
            <p className="md:text-lg text-center md:text-left text-gray-700">{persona.frustrations}</p>
  
            {/* Right: Goals */}
            <h1 className="text-lg font-semibold md:hidden text-center pt-10">Goals</h1>
            <p className="md:text-lg text-center md:text-left text-gray-700">{persona.goals}</p>
          </div>
        ))}
      </section>
    );
  }