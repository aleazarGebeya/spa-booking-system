"use client";

export function Gallery() {
  const images = [
    {
      src: `https://images.unsplash.com/photo-1541542684-0b7f6f0f7d3b?w=800&h=600&fit=crop&auto=format`,
      alt: "Sauna interior",
    },
    {
      src: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&auto=format`,
      alt: "Bar lounge",
    },
    {
      src: `https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop&auto=format`,
      alt: "Steam room",
    },
  ];

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-6">ማዕከለ-ስዕላታችን</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.src} className="rounded-lg overflow-hidden shadow-sm">
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
