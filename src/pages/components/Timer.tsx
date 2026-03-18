import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s <= 1 ? 15 * 60 : s - 1), 1000);
    return () => clearInterval(id);
  }, []);

  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <div className="mt-4 bg-pink-100 border border-pink-300 rounded-2xl px-8 py-4 flex flex-col items-center gap-2 shadow-sm">
      <p className="text-lg font-oswald font-bold text-[#E30613] uppercase tracking-widest animate-pulse">⚠ МЕСТА ОГРАНИЧЕНЫ</p>
      <div className="flex items-center gap-2">
        <div className="bg-[#3183FF] text-white font-oswald text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-xl shadow">{m}</div>
        <span className="text-gray-800 font-oswald text-3xl font-bold">:</span>
        <div className="bg-[#3183FF] text-white font-oswald text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-xl shadow">{s}</div>
      </div>
      <p className="text-sm text-gray-500 font-medium">до конца бронирования</p>
    </div>
  );
}