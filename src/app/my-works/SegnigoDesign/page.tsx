// app/My works/Segnigo/page.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function SegnigoPage() {
  return (
    <div className="font-sans md:pt-56 pt-40 mx-auto overflow-hidden">
      {/* Breadcrumb */}
      <div className="mb-10 text-gray-500 px-4 md:px-12">
        <Link href="/" className="hover:underline">
          My Works
        </Link>{' '}
        &gt; <span className="text-black font-medium">Segnigo Design</span>
      </div>


      <section className="w-screen text-center relative overflow-hidden">
       
         <Image
           src="/images/seg1.svg" // Replace with your actual image path
           alt="Quiz Dash App Screens"
           width={1000}
           height={600}
           className=" w-full h-full hidden md:block"
         />

<Image
           src="/images/introduction.svg" // Replace with your actual image path
           alt="Quiz Dash App Screens"
           width={1000}
           height={600}
           className=" w-full h-full md:hidden"
         />
     </section>

      {/* Intro */}
      <section className='md:flex mt-20 md:px-20 px-4 justify-between'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left text-[#234DF0] font-bold">Introduction</h3>
        </div>
        <div className='bg-[#c199d713]  md:p-10 p-8 mt-10 md:mt-0 rounded-2xl h-auto md:w-3xl'>
        <p className="text-black md:text-xl text-center md:text-left md:w-lg">
          Segnigo believes logistics should be seamless, efficient, and reliable. They empower businesses with smart, scalable solutions for order management, last-mile delivery, and customer satisfaction.
        </p>
        </div>
      </section>

      {/* Role */}
      <section className='md:flex mt-20 mb-2 md:mb-0 md:px-20 px-4 justify-between'>
      <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left text-[#234DF0] font-bold">My Role</h3>
        </div>
        <div className='bg-[#c199d713] md:p-10 p-8 mt-10 md:mt-0 rounded-2xl h-auto md:w-3xl'>
        <p className="text-black md:text-xl text-center md:text-left">
        I led the creation of Segnigo’s brand identity, crafting a cohesive visual and strategic direction that reflects their mission in the logistics industry. This included logo design, color palette development, typography systems, and brand guidelines to ensure consistency across digital and print platforms. My goal was to create a modern, trustworthy, and scalable brand image that supports business growth and customer confidence.
        </p>
        </div>
      </section>


      <section className="w-screen text-center relative overflow-hidden">
       
         <Image
           src="/images/seg2.svg" // Replace with your actual image path
           alt="Quiz Dash App Screens"
           width={1000}
           height={600}
           className=" w-full h-full hidden md:block"
         />

<Image
           src="/images/role.svg" // Replace with your actual image path
           alt="Quiz Dash App Screens"
           width={1000}
           height={600}
           className=" w-full h-full md:hidden"
         />
     </section>

   
      {/* Overview */}
      <section className='md:flex md:px-20 px-4 gap-5 bg-[#E9E9E9] py-20'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left font-bold text-[#234DF0]">Overview</h3>
        <p className="mt-10 mb-10 md:mb-0 text-black md:text-lg text-center md:text-left">
          The Segnigo logo represents movement, connection, and trust. The icon captures the flow of goods and information across networks with a clean, modern design.
        </p>
        </div>
        <Image src="/images/seg3.svg" alt="Segnigo Page 1" width={800} height={600} />
      </section>

      <section className='md:flex md:px-20 px-4 py-10 gap-5'>
        <div>
        <h3 className="md:text-5xl mb-14 md:mb-0 text-4xl text-center md:text-left font-bold text-[#234DF0]">Logo Lockup</h3>
        </div>
        <Image src="/images/seg4.svg" alt="Segnigo Page 1" width={800} height={600} />
      </section>

      <section className='md:flex md:px-20 px-4 gap-5 bg-[#E9E9E9] py-20'>
        <div className='h-auto flex flex-col justify-between'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left font-bold text-[#234DF0]">Typeface</h3>
        <p className="mt-10 mb-14 md:mb-0 text-black md:text-lg text-center md:text-left">
        Chosen for its clarity, versatility, and 
        modern feel. Perfect for digital 
        platforms and printed materials alike.</p>
        </div>
        <Image src="/images/seg logo tm.svg" alt="Segnigo Page 1" width={80} height={29} className='w-28 h-8 hidden md:block' />
        </div>
        <Image src="/images/seg5.svg" alt="Segnigo Page 1" width={800} height={600} />
      </section>

      <section className='md:flex md:px-20 px-4 pt-20 gap-5'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left  font-bold text-[#234DF0]">Applications</h3>
        <p className="mt-10 mb-14 md:mb-0 text-black md:text-lg text-center md:text-left">
        Socials Mockups        </p>
        </div>
        <Image src="/images/seg6.svg" alt="Segnigo Page 1" width={800} height={600} />
      </section>


      <section className='md:flex md:px-20 px-4 pt-20 gap-5'>
        <div className='h-auto flex flex-col justify-between'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left  font-bold text-[#234DF0]">Applications</h3>
        <p className="mt-10 mb-14 md:mb-0 text-black md:text-lg text-center md:text-left">Mockups on iOS and on X</p>
        </div>
        <Image src="/images/seg logo tm.svg" alt="Segnigo Page 1" width={80} height={29} className='w-28 h-8 hidden md:block' />
        </div>
        <Image src="/images/seg7.svg" alt="Segnigo Page 1" width={800} height={600} />
      </section>


      <section className='md:flex md:px-20 px-4 py-20 gap-5'>
        <div className='h-auto flex flex-col justify-between'>
        <div>
        <h3 className="md:text-5xl text-4xl text-center md:text-left font-bold text-[#234DF0]">Merchandise</h3>
        <p className="mt-10 mb-14 md:mb-0 text-black md:text-lg text-center md:text-left">Merch</p>
        </div>
        <Image src="/images/seg logo tm.svg" alt="Segnigo Page 1" width={80} height={29} className='w-28 h-8 hidden md:block' />
        </div>
        <Image src="/images/seg8.svg" alt="Segnigo Page 1" width={800} height={600} className='md:block hidden'/>
        <Image src="/images/merchanise.svg" alt="Segnigo Page 1" width={800} height={600} className='md:hidden'/>

      </section>


      <section className="w-screen mb-20 md:mb-0 text-center relative overflow-hidden">
       
       <Image
         src="/images/seg logo.svg" // Replace with your actual image path
         alt="Quiz Dash App Screens"
         width={1000}
         height={600}
         className=" w-full h-full md:block hidden"
       />

<Image
         src="/images/footerseg.svg" // Replace with your actual image path
         alt="Quiz Dash App Screens"
         width={1000}
         height={600}
         className=" w-full h-full md:hidden"
       />
   </section>
    </div>
  );
}
