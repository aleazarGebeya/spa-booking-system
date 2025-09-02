"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-sm sticky top-0 z-50 bg-white/60 dark:bg-black/40 border-b">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center text-white font-semibold">SA</div>
            <div>
              <div className="text-sm font-semibold">Sauna & Bar Addis</div>
              <div className="text-xs text-muted-foreground">የአዲስ አበባ ሳውና</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:underline">አገልግሎቶች</a>
            <a href="#booking" className="text-sm hover:underline">ቦታ ማስያዣ</a>
            <a href="#gallery" className="text-sm hover:underline">ገለል</a>
            <a href="#about" className="text-sm hover:underline">ስለ እኛ</a>
            <a href="#contact" className="text-sm hover:underline">እውቀት</a>
            <Button asChild size="sm">
              <a href="#booking">ይዘጋ</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md bg-muted/10"
            >
              {open ? "መዝጋት" : "ምንጭ"}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 flex flex-col gap-3">
            <a href="#services" className="text-sm">አገልግሎቶች</a>
            <a href="#booking" className="text-sm">ቦታ ማስያዣ</a>
            <a href="#gallery" className="text-sm">ገለል</a>
            <a href="#about" className="text-sm">ስለ እኛ</a>
            <a href="#contact" className="text-sm">እውቀት</a>
          </div>
        )}
      </div>
    </nav>
  );
}
