"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("የፍቅር ሳውና (Infrared)");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    "የፍቅር ሳውና (Infrared)",
    "የእሳት ሳውና (Traditional)",
    "Private Steam Room",
  ];

  function validate() {
    if (!name.trim()) return "እባክዎ ስምዎን ያስገቡ";
    if (!phone.trim()) return "ስልክ ቁጥር ያስገቡ";
    if (!date) return "ቀን ይምረጡ";
    if (!time) return "ሰዓት ይምረጡ";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setMessage(err);
      return;
    }

    const booking = {
      id: Date.now(),
      name,
      phone,
      service,
      date,
      time,
    };

    try {
      const existing = typeof window !== "undefined" ? localStorage.getItem("bookings") : null;
      const list = existing ? JSON.parse(existing) : [];
      list.push(booking);
      localStorage.setItem("bookings", JSON.stringify(list));

      setMessage("ቦታዎ ተሳክቷል — እናመሰግናለን!");
      setName("");
      setPhone("");
      setDate("");
      setTime("");
    } catch (err: unknown) {
      console.error(err);
      setMessage("ስህተት፡ እባክዎን እንደገና ይሞክሩ።");
    }
  }

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-white to-amber-50 shadow-md">
      <h3 className="text-2xl font-semibold mb-2">ቦታ ማስያዣ</h3>
      <p className="text-sm text-muted-foreground mb-4">በግል ወይም ጥቅም ለማስቀመጥ ይህን ቅጽ ሙሉ ይሙሉ።</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-sm block mb-1">ስም</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="ሙሉ ስም" />
        </div>

        <div>
          <label className="text-sm block mb-1">ስልክ</label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="09xx xxx xxx" />
        </div>

        <div>
          <label className="text-sm block mb-1">አገልግሎት</label>
          <select value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-md border px-3 py-2">
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm block mb-1">ቀን</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label className="text-sm block mb-1">ሰዓት</label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <div className="pt-3">
          <Button type="submit">ይያዙ</Button>
        </div>

        {message && <div className="text-sm text-muted-foreground pt-2">{message}</div>}
      </form>
    </div>
  );
}
