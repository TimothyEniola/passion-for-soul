import React, { useEffect, useRef } from "react";

export default function MediaModal({ active, close, prev, next }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (active?.type === "video" && videoRef.current) {
      const v = videoRef.current;
      v.currentTime = 0;
      const p = v.play();
      if (p?.catch) p.catch(() => (v.muted = true) || v.play());
    }
    return () => {
      if (videoRef.current) videoRef.current.pause();
    };
  }, [active]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="relative max-w-6xl w-full mx-auto" id="gallery-modal">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-1 bg-white/10 text-white rounded">‹</button>
            <button onClick={next} className="px-3 py-1 bg-white/10 text-white rounded">›</button>
          </div>
          <button onClick={close} className="px-3 py-1 bg-white/10 text-white rounded">Close</button>
        </div>

        <div className="bg-black rounded">
          {active.type === "image" ? (
            <img
              src={active.src}
              alt={active.alt || "Open image"}
              className="w-full h-[70vh] object-contain select-none"
            />
          ) : (
            <video
              ref={videoRef}
              src={active.src}
              poster={active.poster}
              className="w-full max-h-[80vh] bg-black"
              playsInline
              preload="metadata"
              controls
            />
          )}
        </div>
      </div>
    </div>
  );
}
