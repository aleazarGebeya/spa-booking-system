"use client";

export function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-2">እኛን ያግኙ</h3>
        <p className="text-muted-foreground mb-4">ኢሜይል: hello@saunaaddis.et<br/>ስልክ: +251 911 000 000<br/>አድራሻ: Bole, Addis Ababa</p>

        <div className="flex gap-3 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-pink-50">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-blue-50">Facebook</a>
        </div>
      </div>

      <div>
        <form className="space-y-3">
          <div>
            <label className="text-sm block mb-1">ስም</label>
            <input className="w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm block mb-1">ኢሜይል</label>
            <input className="w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm block mb-1">መልዕክት</label>
            <textarea className="w-full rounded-md border px-3 py-2" rows={4} />
          </div>

          <div>
            <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white">ላክ</button>
          </div>
        </form>
      </div>
    </div>
  );
}
