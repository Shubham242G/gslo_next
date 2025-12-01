'use client'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-64 h-64 object-cover"
      >
        {/* If the MP4 is in /public/loadingJson/loading.mp4 */}
        <source src="/assets/gslo-loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
