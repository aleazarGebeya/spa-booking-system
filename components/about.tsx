"use client";

export function About() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-semibold mb-4">ስለ እኛ</h2>
        <p className="text-muted-foreground mb-4">Sauna & Bar Addis በአዲስ አበባ የተመሰረተ የጤናና ምቹነት ድርጅት ነው። የባለሞያ ቡድን እንዲሁም የማረከ አገልግሎቶች ይዘው የእናንተን ቀን ይወዳድራሉ።</p>

        <ul className="space-y-2">
          <li>• ባለሞያ ቡድን</li>
          <li>• ንፁህ እና ደህና ማስተናገድ</li>
          <li>• የግል ክፍሎች እና ፕራይቬት ልምዶች</li>
        </ul>
      </div>

      <div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img src={`https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&h=700&fit=crop&auto=format`} alt="Team - Sauna Addis" loading="lazy" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}
