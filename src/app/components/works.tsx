"use client";

import { useState } from "react";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { WORKS } from "../constants/work";

const hoverColors = [
	"bg-[#61644e]",
	"bg-[#160b08]",
	"bg-[#767e23]",
	"bg-[#626f7d]",
	"bg-[#305d63]",
	"bg-[#6b604d]",
];

const defaultBg = "bg-gray-600";

export default function WorksSection() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section id="my-work" className="bg-[#D9D9D9]">
			<section className="px-6 md:px-12 md:py-28 py-20 bg-white md:rounded-[2rem]">
				<div className="flex justify-between items-center md:mb-6 mb-20">
					<div>
						<p className="md:text-xl  text-[#C199D7] font-[TTFirsNeueReg]">
							I left a Legacy:
						</p>
						<h2 className="md:text-5xl text-3xl font-bold">My Works</h2>
					</div>
					<button className="bg-[#C199D7] text-xs md:text-base text-black px-8 py-4 font-extrabold cursor-pointer rounded-full font-[TTFirsNeueReg] hover:bg-[#ae8ec076] transition">
						See All
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
					{WORKS.map((work, index) => {
						const isHovered = hoveredIndex === index;
						const bgColor = isHovered ? hoverColors[index] : defaultBg;

						return (
							<div
								key={index}
								className="relative rounded-xl overflow-hidden cursor-pointer group"
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								<Image
									src={work.image}
									alt={work.title}
									width={600}
									height={400}
									className="w-full md:h-full h-[14rem] object-cover transition-transform duration-300"
								/>

								{/* Top-right Arrow */}
								<Link key={work.title} href={work.href}>
								<div className="absolute top-4 right-4 z-10">
									<div className="md:w-10 md:h-10 hidden  w-8 h-8 rounded-full border-[#C199D7] border group-hover:bg-[#C199D7] md:flex items-center justify-center">
										<ArrowRight className="text-[#C199D7] group-hover:text-white" />
									</div>
									<div className="md:w-10 md:h-10 w-8 h-8 rounded-full md:hidden bg-[#C199D7] flex items-center justify-center">
										<ArrowRight className="text-white" />
									</div>
								</div>
								</Link>

								{/* Bottom-left Title */}
								<div className="absolute hidden md:block bottom-4 left-4 z-10 group-hover:-translate-y-32 transition-transform duration-500">
									<h3 className="text-6xl font-bold text-white transition-all duration-50">
										{work.title}
									</h3>
								</div>

								<div className="absolute bottom-0 md:hidden   px-4 pt-2 bg-[#292929bd]  z-10 w-full h-24">
									<h3 className="md:text-6xl text-3xl font-bold text-white transition-all duration-50">
										{work.title}
									</h3>
									<p className="text-white text-sm font-[TTFirsNeueReg] line-clamp-2">
  {work.subtitle}
</p>

								</div>

								{/* Hover Overlay */}
								<div
									className={`absolute hidden md:block bottom-0 left-0 right-0 h-56 p-4 z-30 rounded-2xl m-4 transition-transform duration-500 translate-y-60 group-hover:translate-y-0 ${bgColor}`}
								>
									<div className="flex flex-col text-left  mt-2">
										<h3 className="text-6xl font-bold text-white">
											{work.title}
										</h3>

										<p className="text-white text-sm font-[TTFirsNeueReg] mt-4">
											{work.subtitle}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-12 flex justify-center">
				<a
          href="https://wa.me/+2348104283896"
          target="_blank" 
		  className="bg-[#C199D7] text-lg  text-black md:px-8 md:py-4 md:block hidden rounded-full cursor-pointer font-[TTFirsNeueReg] hover:bg-[#C199D7] transition">
						Got a Project? Let’s Talk
					</a>

					<a
          href="https://wa.me/+2348104283896"
          target="_blank" 
		  className="bg-[#C199D7] md:hidden  text-black py-3 w-full flex justify-center  rounded-full cursor-pointer font-[TTFirsNeueReg] hover:bg-[#C199D7] transition">
						Got a Project? Let’s Talk
					</a>
				</div>
			</section>
		</section>
	);
}
