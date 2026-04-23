"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_OFFSET_SECONDS = 0.8;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.preload = "auto";

    const tryPlay = async () => {
      try {
        await video.play();
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

    const onLoadedMetadata = () => {
      const safeOffset = Math.min(
        START_OFFSET_SECONDS,
        Math.max(0, (video.duration || START_OFFSET_SECONDS) - 0.1)
      );

      if (video.currentTime < safeOffset) {
        video.currentTime = safeOffset;
      }

      void tryPlay();
    };

    const onTimeUpdate = () => {
      if (!video.paused && video.currentTime >= START_OFFSET_SECONDS - 0.05) {
        setHasStarted(true);
      }
    };

    const onEnded = () => {
      if (video.currentTime < START_OFFSET_SECONDS) {
        video.currentTime = START_OFFSET_SECONDS;
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("touchstart", onUserGesture, { passive: true });
    window.addEventListener("scroll", onUserGesture, { passive: true });
    window.addEventListener("click", onUserGesture);
    window.addEventListener("keydown", onUserGesture);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${hasStarted ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setHasStarted(true)}
        onError={() => setShowFallback(true)}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}