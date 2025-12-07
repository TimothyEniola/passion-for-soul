import React from "react";

export default function MediaCard({ item, onClick }) {
  return (
    <div
      className="break-inside-avoid mb-4 rounded-xl overflow-hidden bg-white cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {item.type === "image" ? (
        <div className="relative overflow-hidden">
          <img
            src={item.src}
            alt={item.alt || "Gallery image"}
            className="w-full h-auto block object-cover transform group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />

          {/* Gradient overlay for style */}
          <div className="absolute inset-0 from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
        </div>
      ) : (
        <div className="relative overflow-hidden">
          <video
            src={item.src}
            poster={item.poster}
            className="w-full h-auto block object-cover transform group-hover:scale-105 transition-all duration-500"
            playsInline
            muted
            autoPlay
            loop
            preload="metadata"
          />

          {/* Video label */}
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md shadow">
            🎥 Video
          </div>

          {/* Overlay for effect */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
        </div>
      )}
    </div>
  );
}
