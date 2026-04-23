"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  className?: string;
};

export function HeroVideo({ src, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const START_AT_SECONDS = 1.0;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.preload = "auto";

    const seekToStart = () => {
      const safeStart = Math.min(
        START_AT_SECONDS,
        Math.max(0, (video.duration || START_AT_SECONDS) - 0.1)
      );

      if (video.currentTime < safeStart) {
        video.currentTime = safeStart;
      }
    };

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
      seekToStart();
      void tryPlay();
    };

    const onLoadedMetadata = () => {
      seekToStart();
      void tryPlay();
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= START_AT_SECONDS + 0.05 && !video.paused) {
        setIsReady(true);
      }
    };

    const onEnded = () => {
      seekToStart();
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
      video.removeEventListener("loadeddata", onLoadedData);
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop={false}
        playsInline
        preload="auto"
        poster=""
        onPlaying={() => setShowFallback(false)}
        onError={() => setShowFallback(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}