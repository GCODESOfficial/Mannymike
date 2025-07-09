import React from "react";
import Image from "next/image";


const metrics = [
  {
    score: 7,
    description:
      "Users expressed frustration with matches that don’t lead to real conversations, making it difficult to form genuine connections.",
      image: "/images/key1.svg",
    },
  {
    score: 5,
    description:
      "Users prefer a balance between casual dating and serious relationships but struggle to find people who share the same intentions.",
    image: "/images/key2.svg",
    },
  {
    score: 6,
    description:
      "Users said that while dating apps help meet new people, many interfaces feel cluttered and overwhelming, making the experience less enjoyable.",
    image: "/images/key3.svg",
    },
];




export default function KeyMetrics() {
  return (
    <div className="font-sans  md:px-20 px-4 py-16 pb-40 overflow-hidden">
       

       <h2 className="md:text-[80px] text-3xl text-center md:text-left font-bold text-black ">Key Metrics</h2>
       <Image
								src="/images/int line.svg"
								alt="Underline"
								width={450}
								height={600}
								className=" h-auto px-10 md:px-0"
							/>

      <p className="mt-5 text-[#5E5D5C]  md:text-2xl text-lg mb-16 md:max-w-xl">
        In order to better understand user needs, a survey was conducted with 50 participants.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 py-14 rounded-xl shadow">

<Image
									src={metric.image}
									alt={"keymetric"}
									width={600}
									height={400}
									className="w-auto h-auto"
								/>
            
            <div className="md:text-[80px] mt-5 md:mt-0 text-3xl font-bold mb-5">{metric.score}/10</div>
            <p className="md:text-xl text-[#5E5D5C]">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
