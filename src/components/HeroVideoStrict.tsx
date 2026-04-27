"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideoStrict({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.preload = "auto";

    let revealed = false;
    const reveal = () => {
      if (!revealed) {
        revealed = true;
        setIsReady(true);
      }
    };

    // Step 3: video is playing from 1s — remove the dark overlay
    const onPlaying = () => {
      if (video.currentTime >= 0.9) reveal();
    };

    // Step 2: seek to 1s completed — NOW call play()
    const onSeeked = () => {
      video.play().catch(() => {});
    };

    // Step 1: metadata loaded — seek to 1s, then wait for 'seeked' before playing
    // NO autoPlay on the element so the browser cannot start from frame 0
    const onLoadedMetadata = () => {
      video.currentTime = 1.0;
    };

    // Recovery for mobile browsers that need a user gesture or become visible again
    const onGesture = () => {
      if (video.paused) video.currentTime = 1.0;
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible" && video.paused) video.currentTime = 1.0;
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("click", onGesture);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("click", onGesture);
    };
  }, []);

  return (
    <div className={className}>
      {/* No autoPlay — browser cannot start from frame 0 */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay on top — fades out only after playing event fires at currentTime >= 0.9 */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-200 pointer-events-none ${isReady ? "opacity-0" : "opacity-100"}`}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}