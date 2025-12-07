
import React, { useState, useEffect } from "react";
import MediaCard from "../components/MediaCard";
import MediaModal from "../components/MediaModal";

const SAMPLE_MEDIA = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
  },
  {
    id: 2,
    type: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80",
  },
  {
    id: 5,
    type: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4",
  },
];

export default function Gallery({ media = SAMPLE_MEDIA }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  function prev() {
    const i = media.findIndex((m) => m.id === active.id);
    setActive(media[(i - 1 + media.length) % media.length]);
  }

  function next() {
    const i = media.findIndex((m) => m.id === active.id);
    setActive(media[(i + 1) % media.length]);
  }

  const filteredMedia =
    filter === "all" ? media : media.filter((item) => item.type === filter);

  const indicatorIndex = filter === "all" ? 0 : filter === "image" ? 1 : 2;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h1>

        {/* FILTER BUTTONS */}
        <div className="mb-6">
          <div
            className="relative inline-grid grid-cols-3 rounded-full border overflow-hidden"
            style={{ alignItems: "stretch" }}
          >
            <div
              className="absolute top-0 left-0 h-full bg-black rounded-full transition-transform duration-200"
              style={{
                width: `${100 / 3}%`,
                transform: `translateX(${indicatorIndex * 100}%)`,
              }}
            />

            <button
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`relative z-10 px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                filter === "all" ? "text-white" : "text-gray-700"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("image")}
              aria-pressed={filter === "image"}
              className={`relative z-10 px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                filter === "image" ? "text-white" : "text-gray-700"
              }`}
            >
              Images
            </button>

            <button
              onClick={() => setFilter("video")}
              aria-pressed={filter === "video"}
              className={`relative z-10 px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                filter === "video" ? "text-white" : "text-gray-700"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredMedia.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onClick={() => setActive(item)}
            />
          ))}
        </div>

        {active && (
          <MediaModal
            active={active}
            close={() => setActive(null)}
            prev={prev}
            next={next}
          />
        )}
      </div>
    </div>
  );
}


