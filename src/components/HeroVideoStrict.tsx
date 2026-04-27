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

    const onPlaying = () => {
      setIsReady(true);
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
    video.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onUserGesture);
    window.addEventListener("touchstart", onUserGesture, { passive: true });
    window.addEventListener("click", onUserGesture);
    window.addEventListener("keydown", onUserGesture);

    void tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };
  }, [startAt]);

  return (
    <div className={className}>
      {/* Video always rendered at full opacity — overlay covers it until ready */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay sits ON TOP of the video and fades away once playback is confirmed */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-150 pointer-events-none ${isReady ? "opacity-0" : "opacity-100"}`}
        style={{ zIndex: 1 }}
      />

      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" style={{ zIndex: 2 }} />
      )}
    </div>
  );
}