import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
	{
		title: "Product (UI/UX) Design",
		description:
			"I craft intuitive and aesthetically engaging user interfaces and experiences that ensure your product is both functional and delightful to use. From wireframes to prototypes, I bring your vision to life with precision and creativity.",
		image: "/images/work 1.svg", // Replace with your actual image paths
	},
	{
		title: "Brand Visual Identity Design",
		description:
			"Building a strong visual identity is key to making a lasting impression. I help brands create cohesive and impactful visual elements that resonate with their audience, from logos to color schemes and typography.",
		image: "/images/work 2.svg",
	},
	{
		title: "Brand Strategy",
		description:
			"A solid brand strategy lays the foundation for long-term success. I work closely with you to define your brand’s mission, values, and positioning, creating a strategy that guides your brand toward sustained growth and recognition.",
		image: "/images/work 3.svg",
	},
];

export default function ServicesSection() {
	return (
		
			<section id="services" className="px-4 md:px-12 md:py-16 py-5 md:bg-[#D9D9D9] md:rounded-t-[2rem] text-center -mt-6">
				<p className="text-[#C199D7] md:text-2xl mb-2 font-[TTFirsNeueReg]">
					Services
				</p>
				<h2 className="md:text-5xl text-4xl font-bold mb-12">What I do</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
					{SERVICES.map((service, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
						>
							<div className="mb-4">
								<Image
									src={service.image}
									alt={service.title}
									width={500}
									height={300}
									className="rounded-lg w-full h-48 object-cover"
								/>
							</div>
							<h3 className="font-semibold text-lg mb-2">{service.title}</h3>
							<p className="text-sm text-[#514F4F] font-[TTFirsNeueReg]">
								{service.description}
							</p>
						</div>
					))}
				</div>

				<div className="flex justify-center gap-4 mt-12 flex-wrap">
				<a
          href="#my-work" 
		  className="border border-black hidden md:flex text-black px-3 py-3 rounded-full hover:bg-black hover:text-white items-center transition">
						See My Works
					</a>


					
					<a
          href="https://wa.me/+2348104283896"
          target="_blank" 
		  className="bg-[#C199D7] text-black px-4 py-3 md:flex items-center hidden rounded-full  hover:bg-[#ae8ec076] transition">
						Got a Project? Let’s Talk
            <ArrowRight className="text-black -rotate-45 ml-2" />
					</a>

					<a
          href="https://wa.me/+2348104283896"
          target="_blank" 
		  className="bg-[#C199D7] text-black py-3 w-full justify-center md:hidden flex items-center rounded-full  hover:bg-[#ae8ec076] transition">
						Got a Project? Let’s Talk
            <ArrowRight className="text-black -rotate-45 ml-2" />
					</a>

					<a
          href="#my-work" 
		  className="border border-black md:hidden text-black py-3 w-full rounded-full hover:bg-black hover:text-white transition">
						See My Works
					</a>
				</div>
			</section>
	
	);
}
