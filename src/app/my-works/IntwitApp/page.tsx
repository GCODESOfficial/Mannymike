// /My works/intwitapp/page.tsx
import FinalResult from "@/app/components/FinalResult";
import KeyMetrics from "@/app/components/KeyMetrics";
import UserPersonas from "@/app/components/UserPersonas";
import Image from "next/image";
import Link from "next/link";

export default function IntwitAppPage() {
	return (
		<div className="bg-white text-black md:pt-56 pt-40 font-sans overflow-hidden">
			{/* Breadcrumb */}
			<div className="mb-10 text-gray-500 px-4 md:px-12">
				<Link href="/My works" className="hover:underline">
					My Works
				</Link>{" "}
				&gt; <span className="text-black font-medium">Intwit App</span>
			</div>

			<section className="w-screen text-center relative overflow-hidden">
				<Image
					src="/images/intapp.svg" // Replace with your actual image path
					alt="Quiz Dash App Screens"
					width={1000}
					height={600}
					className=" w-full h-full md:hidden"
				/>
				<Image
					src="/images/int1.svg" // Replace with your actual image path
					alt="Quiz Dash App Screens"
					width={1000}
					height={600}
					className=" w-full h-full md:block hidden"
				/>
			</section>

			<div className="md:flex justify-center bg-[#E9E9E9]">
				<section className="md:flex md:px-20 px-4  py-20">
					<div className="h-auto flex flex-col justify-between">
						<Image
							src="/images/int logo.svg"
							alt="Segnigo Page 1"
							width={80}
							height={29}
							className="w-28 h-8 hidden md:block"
						/>
						<div>
							<h3 className="text-3xl md:text-left text-center font-bold text-black">
								Project Overview
							</h3>
							<p className="mt-10 text-black md:text-lg md:text-justify text-center md:w-md">
								Intuit aims to create a modern, user-friendly and online social
								community and a connection engaging platform that facilitates
								physical/offline interactions. The app will leverage innovative
								features and intuitive design principles to provide a seamless
								and enjoyable user experience.
							</p>
						</div>
						<Image
							src="/images/dash.svg"
							alt="Segnigo Page 1"
							width={80}
							height={29}
							className="w-auto h-auto hidden md:block"
						/>
					</div>

					<Image
							src="/images/dash.svg"
							alt="Segnigo Page 1"
							width={80}
							height={29}
							className=" w-screen pt-10 md:hidden"
						/>
		
					<Image
						src="/images/int2.svg"
						alt="Segnigo Page 1"
						width={800}
						height={600}
						className="mt-10 md:mt-0"
					/>
				</section>
			</div>




			<section className=" md:px-20 px-4  bg-[#E9E9E9] py-20 flex flex-col justify-center items-center md:gap-40 gap-14">
				<h3 className="md:text-6xl text-3xl font-semibold  text-black text-center">Design Process</h3>

				<Image
					src="/images/int3.svg"
					alt="Segnigo Page 1"
					width={800}
					height={600}
				/>
			</section>

			<section className="md:px-20 px-4 bg-white py-20 flex justify-center">
				<Image
					src="/images/int4.svg"
					alt="Segnigo Page 1"
					width={800}
					height={600}
					className="w-auto h-auto"
				/>
			</section>

			<UserPersonas />

			<section className="relative ">
  <Image
    src="/images/Pattern.svg"
    alt="Background Pattern"
    width={1500}
    height={600}
    className="absolute top-0 md:left-1/2 transform md:-translate-x-1/2 h-[95%] z-0"
  />
				<div className=" bg-[#BCBCBC]">
					<section className=" py-16 pb-40 overflow-hidden md:px-20 px-4" >
						{/* Content on top */}
						<div className="relative z-10">
                            <div >
                            <h2 className="md:text-[90px] text-3xl text-center md:text-left font-bold text-black ">
								Wireframe
							</h2>
							<Image
								src="/images/int line.svg"
								alt="Underline"
								width={450}
								height={600}
								className=" h-auto px-10 md:px-0"
							/>

                            </div>
							
                        <div className="flex justify-center w-full">


                        
							<Image
								src="/images/int5.svg"
								alt="Segnigo Page 1"
								width={900}
								height={600}
								className="h-auto pt-20"
							/>
                            </div>
						</div>
					</section>
				</div>

				<div className="bg-[#DBDAD7] ">
					<div className="relative z-10 flex flex-col justify-center items-center">
						<KeyMetrics />

						<FinalResult />
					</div>
				</div>
				<section className=" md:px-10 px-4 py-16 pb-40 overflow-hidden bg-[#DBDAD7]">
					{/* Background image positioned absolutely */}

					{/* Content on top */}
					<div className="relative z-10 flex flex-col justify-center items-center">
						<h2 className="md:text-[80px] text-3xl text-center md:text-left font-bold text-black mb-2">Features</h2>

						<Image
							src="/images/int line.svg"
							alt="Underline"
							width={350}
							height={600}
							className="px-10 md:px-0"
						/>
						<p className="mt-8 text-[#5E5D5C]  md:text-2xl text-center md:text-left">
							Here are what makes our dating App different
						</p>

						<Image
							src="/images/int6.svg"
							alt="Segnigo Page 1"
							width={800}
							height={600}
							className=" h-auto md:pt-40 pt-10"
						/>
					</div>
				</section>

				<div className="bg-[#D9D9D9] md:pt-20">
					<section className=" md:px-10 px-4 py-16 pb-40 overflow-hidden">
						{/* Background image positioned absolutely */}

						{/* Content on top */}
						<div className="relative z-10 flex flex-col justify-center items-center">
							<h2 className="md:text-[80px] text-3xl text-center md:text-leftfont-bold text-black mb-2">
								Other Screens
							</h2>
							<Image
								src="/images/int line.svg"
								alt="Underline"
								width={500}
								height={600}
								className="px-10 md:px-0"
							/>

							<Image
								src="/images/int7.svg"
								alt="Segnigo Page 1"
								width={800}
								height={600}
								className="w-f h-full md:pt-40 pt-10"
							/>
						</div>
					</section>
				</div>

				<section className=" bg-[#D9D9D9] md:px-10 px-4 py-16 pb-40 overflow-hidden">
					{/* Background image positioned absolutely */}

					{/* Content on top */}
					<div className="relative z-10 flex flex-col justify-center items-center">
						<h2 className="md:text-[80px] text-3xl text-center md:text-leftfont-bold text-black mb-2">
							Landing Page
						</h2>
						<Image
							src="/images/int line.svg"
							alt="Underline"
							width={500}
							height={600}
							className="px-10 md:px-0"
						/>

						<Image
							src="/images/int8.svg"
							alt="Segnigo Page 1"
							width={800}
							height={600}
							className="h-full w-f md:pt-40 pt-10"
						/>
					</div>
				</section>
			</section>

			<section className="w-screen text-center relative overflow-hidden">
				<Image
					src="/images/int last.svg" // Replace with your actual image path
					alt="Quiz Dash App Screens"
					width={1000}
					height={600}
					className=" w-full h-full"
				/>
			</section>
		</div>
	);
}
