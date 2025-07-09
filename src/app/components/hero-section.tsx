/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const images = ["/images/scroller.svg"];

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden md:pt-16 md:px-6 bg-white flex flex-col items-center justify-center text-[#1a1a1a]">
			{/* Text Content */}

			<div>
				<div className="mb-4 w-full flex justify-center">
					<button className="px-5 py-2 md:text-sm text-xs border border-black rounded-full md:mt-4 mt-2">
						Hello!
					</button>
					<img
						src="/images/Doodle.svg"
						alt="Manny Mike"
						className="md:w-8 md:h-8 h-5 w-5"
					/>
				</div>

				<h1 className="md:text-8xl text-3xl font-bold leading-tight text-center md:text-left">
					I’m <span className="text-[#C199D7]">Manny Mike</span>,<br />
					<span className="text-black">Product Designer</span>
				</h1>
			</div>

			<div className="relative w-full md:h-[30rem] h-[38rem] text-lg ">
				{/* Experience */}
				<div className="md:absolute top-12 right-5 md:text-right text-center pt-8 md:pt-0">
					<div className="text-[#C199D7] text-xl mb-1">★★★★★</div>
					<div className="md:text-2xl text-lg font-bold">3+ Years</div>
					<div className="md:text-sm text-xs text-gray-500">Experience</div>
				</div>

				<div className="mt-8 font-[TTFirsNeueReg] md:absolute left-6 flex flex-col">
					<div className="md:w-8 md:h-8 mb-8 flex justify-center w-full md:justify-baseline">
						<img
							src="/images/quote-up.svg"
							alt="Manny Mike"
							className="md:w-8 md:h-8 h-5 w-5"
						/>
					</div>

					<p className="mb-4 md:w-sm text-xs md:text-base text-center md:text-left px-10 md:px-0">
						“Working with Manny was a game-changer. His dedication and
						creativity stood out from day one.{" "}
						<strong className="text-black">
							He brought fresh, insightful perspectives that significantly
							enhanced our business UI framework.
						</strong>{" "}
						Absolutely a top-tier designer and collaborator.”
					</p>
					<p className="font-semibold text-sm md:text-base text-center md:text-left text-black">
						Patrick King, Project Manager
					</p>
				</div>

				<div className="md:absolute bottom-0 pt-24 md:pt-0">
					{/* Circle Container */}
					<div className="relative w-screen md:h-[20rem] flex md:items-end items-center justify-center">
						{/* Background Half-Circle */}
						<div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 md:w-[45rem] md:h-[20rem] w-full h-[10rem] bg-[#C199D7] rounded-t-full z-0" />

						{/* Profile Image */}
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[50rem] md:h-[32rem] h-[15rem]  rounded-t-full">
							<Image
								src="/images/HeroSection.svg"
								alt="Manny Mike"
								fill
								className=""
							/>
						</div>

						{/* Buttons */}
						<div className="group absolute md:bottom-10 bottom-2 z-20 flex md:gap-4 gap-2 md:flex-wrap justify-center bg-[#ffffff55] border border-[#C9C9C9] rounded-full p-1 text-xs md:text-base">
							<a
								href="#testimonials"
								className="bg-[#C199D7] flex items-center border border-white group-hover:border-0 group-hover:bg-transparent text-black font-[TTFirsNeueReg] font-extrabold hover: md:px-6 py-3 px-3 rounded-full transition duration-300"
							>
								View My Work
								<ArrowRight className="text-black -rotate-45 md:ml-2 group-hover:hidden transition-opacity duration-300 md:h-8 md:w-8 w-5 h-5 font-[TTFirsNeueReg]" />
							</a>
							<a
								href="https://wa.me/+2348104283896"
								target="_blank"
								className="text-white group-hover:bg-[#C199D7] group-hover:border border-white border md:border-0  md:px-6 py-3 px-3 rounded-full transition duration-300 font-[TTFirsNeueReg] flex items-center  hover:font-bold"
							>
								Let&apos;s Work Together
								<ArrowRight className="text-black -rotate-45 ml-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:h-8 md:w-8 font-[TTFirsNeueReg]" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="h-20 w-screen bg-white  flex items-center">
				<div className="relative overflow-hidden w-screen">
					<div className="animate-scroll-x min-w-max">
						{[...images, ...images].map((src, i) => {
							return (
								<div key={i} className="mr-8 flex items-center">
									<Image
										src={src}
										alt={`Scrolling Image ${i + 1}`}
										width={2570} // Custom width for AWS
										height={50} // Custom height for AWS
										className=""
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
