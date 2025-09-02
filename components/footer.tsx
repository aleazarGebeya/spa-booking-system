"use client";

export function Footer() {
  return (
    <footer className="border-t mt-12 py-8 bg-gradient-to-t from-white to-transparent">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} Sauna & Bar Addis — ሁሉንም መብት ይጠበቃል</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#privacy" className="text-sm">Privacy</a>
          <a href="#terms" className="text-sm">Terms</a>
        </div>
      </div>
    </footer>
  );
}
