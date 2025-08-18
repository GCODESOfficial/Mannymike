"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <Image 
        src="/loading.svg" 
        alt="Loading..." 
        width={80} 
        height={80} 
        priority 
      />
    </div>
  );
}
