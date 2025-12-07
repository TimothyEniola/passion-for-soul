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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {media.map((item) => (
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
