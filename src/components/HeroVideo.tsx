"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const tryPlay = async () => {
      try {
        await video.play();
        setShowFallback(false);
      } catch {
        return;
      }
    };

    void tryPlay();

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        void tryPlay();
      }
    };

    const onPageShow = () => {
      void tryPlay();
    };

    const onUserGesture = () => {
      void tryPlay();
    };

    const onCanPlay = () => {
      void tryPlay();
    };

    const onLoadedData = () => {
      void tryPlay();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("touchstart", onUserGesture, { passive: true });
    window.addEventListener("scroll", onUserGesture, { passive: true });
    window.addEventListener("click", onUserGesture);
    window.addEventListener("keydown", onUserGesture);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  return (
    <div className={className}>
      <div className="absolute inset-0 bg-gray-900" />

      {showFallback && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      )}

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onPlaying={() => setShowFallback(false)}
        onError={() => setShowFallback(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}