"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoStrictProps = {
  src: string;
  className?: string;
  startAt?: number;
};

export function HeroVideoStrict({ src, className, startAt = 1.0 }: HeroVideoStrictProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.preload = "auto";

    const getSafeStart = () => Math.min(startAt, Math.max(0, (video.duration || startAt) - 0.1));

    const seekToStart = () => {
      const safeStart = getSafeStart();
      if (video.currentTime < safeStart) {
        video.currentTime = safeStart;
      }
    };

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        return;
      }
    };

    const onLoadedMetadata = () => {
      seekToStart();
      void tryPlay();
    };

    const onLoadedData = () => {
      seekToStart();
      void tryPlay();
    };

    const onTimeUpdate = () => {
      if (!video.paused && video.currentTime >= getSafeStart() + 0.05) {
        setIsReady(true);
      }
    };

    const onPlaying = () => {
      if (video.currentTime >= getSafeStart()) {
        setIsReady(true);
      }
    };

    const onEnded = () => {
      setIsReady(false);
      seekToStart();
      void tryPlay();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        void tryPlay();
      }
    };

    const onUserGesture = () => {
      void tryPlay();
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onUserGesture);
    window.addEventListener("touchstart", onUserGesture, { passive: true });
    window.addEventListener("click", onUserGesture);
    window.addEventListener("keydown", onUserGesture);

    void tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };
  }, [startAt]);

  return (
    <div className={className}>
      <div className="absolute inset-0 bg-gray-900" />
      {hasError && <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop={false}
        playsInline
        preload="auto"
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}