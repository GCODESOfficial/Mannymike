'use client'


export default function VideoPlayer() {

  return (
    <div className="relative w-full mx-auto">
      <video
        src="/INTRO VIDEO.mp4"
        className="w-full md:rounded-4xl rounded-xl"
        muted
        autoPlay
        playsInline
        controls
        loop
      />
      
    </div>
  )
}
