"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">እንኳን ደህና መጡ — Sauna & Bar አዲስ</h1>
          <p className="text-lg text-muted-foreground max-w-xl">በአዲስ አበባ ውስጥ የተሻለ የማረከ ልምድ፣ ሞገድ እና እርካታ የሚሰጥዎት ሳውና እና ባር አገልግሎት። የባህር ሙዚቃ፣ ምቹ የመገናኛ ክፍሎች እና በግል ስፍራ የሚሰጥ እንኳን እንገናኝ።</p>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#booking">በአሁኑ ጊዜ ቦታ ይያዙ</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#services">አገልግሎቶችን ተመልከት</a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">🔥</div>
              <div>
                <div className="text-sm font-semibold">የጥራት እርግጠኝነት</div>
                <div className="text-xs text-muted-foreground">ባለሙያ እና ተሞክሮ ሣራን ቡድን</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">🍃</div>
              <div>
                <div className="text-sm font-semibold">የመኖሪያ ስፋት</div>
                <div className="text-xs text-muted-foreground">ተወላጅ እና የመገናኛ ውቅር</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={`https://images.unsplash.com/photo-1541542684-0b7f6f0f7d3b?w=1200&h=900&fit=crop&auto=format`}
              alt="Sauna interior - Addis"
              loading="lazy"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="absolute -left-6 -bottom-6 transform rotate-6 opacity-40">
            <div className="w-40 h-24 bg-gradient-to-r from-rose-200 to-amber-200 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
