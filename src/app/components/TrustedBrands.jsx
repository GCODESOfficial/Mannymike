import Image from 'next/image';

export default function TrustedBrands() {
//   const brands = [
//     { src: '/brand1.png', alt: 'Brand 1' },
//     { src: '/brand2.png', alt: 'Brand 2' },
//     { src: '/brand3.png', alt: 'Brand 3' },
//   ];

  return (
    <main className="pt-20 block items-center md:flex px-[10%] bg-white justify-between rounded-3xl shadow-md">
      <div className='w-full md:w-[50%] mb-10 md:mb-0'>
        <h1 className="font-bold mb-3 text-xl">
          Trusted By Brands & <br /> Partners
        </h1>
        <p className="text-gray-400 w-full md:w-[50%] text-base">
          Over the years, I’ve had the privilege of collaborating with forward-thinking brands, startups, and organizations that value design-driven growth.
        </p>
      </div>

      <div className="md:w-[50%] w-full ">
        {/* {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.src}
            alt={brand.alt}
            width={200}
            height={200}
            className="object-contain"
          />
        ))} */}
        <Image
          src="/brands.png"
          alt="Brand 1"
          width={200}
          height={200}
          className="object-cover w-full pb-10 md:pb-0"
        />
      </div>
    </main>
  );
}
