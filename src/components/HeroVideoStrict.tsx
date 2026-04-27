"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoStrictProps = {
  src: string;
  className?: string;
};

export function HeroVideoStrict({ src, className = "" }: HeroVideoStrictProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, [mounted]);

  const handleReady = () => setReady(true);
  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (video.currentTime > 0.1) setReady(true);
  };

  return (
    <div className={`${className} bg-black`}>
      {mounted && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleReady}
          onLoadedData={handleReady}
          onPlaying={handleReady}
          onTimeUpdate={handleTimeUpdate}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
