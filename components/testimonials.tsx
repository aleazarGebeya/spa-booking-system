"use client";

export function Testimonials() {
  const quotes = [
    { name: "ሀሌ", note: "ሳውናው በጣም አሪፍ ነው — እንደ ቤቴ ነው።" },
    { name: "ሚካ", note: "መልካም አገልግሎት እና ጥሩ ሙዚቃ።" },
    { name: "ገብረ", note: "ቦታው ጥሩ ነው፣ እንኳን ባለሞያ ናቸው።" },
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">የደንበኞች አስተያየቶች</h4>
      <div className="flex flex-col gap-3">
        {quotes.map((q) => (
          <div key={q.name} className="p-4 rounded-lg bg-white/60 shadow-sm">
            <div className="text-sm text-muted-foreground">{q.note}</div>
            <div className="text-xs font-semibold mt-2">— {q.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
