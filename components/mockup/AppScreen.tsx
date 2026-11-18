const cells = [
  "start",
  "path",
  "path",
  "stone",
  "open",
  "path",
  "path",
  "path",
  "open",
  "stone",
  "path",
  "path",
  "path",
  "path",
  "stone",
  "end",
];

export function AppScreen() {
  return (
    <div className="rounded-[2rem] border border-teal-900/10 bg-white p-4 shadow-[0_30px_80px_-48px_rgba(15,118,110,0.8)]">
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-teal-950">
          <img src="/app_logo.png" alt="" className="h-6 w-6 rounded-md" />
          PathWeave
        </div>
        <span className="text-xs text-teal-950/50">Breeze · 04</span>
      </div>
      <div className="grid grid-cols-4 gap-2 rounded-3xl bg-[#0b3f3a] p-4">
        {cells.map((cell, index) => (
          <div
            key={`${cell}-${index}`}
            className={
              cell === "stone"
                ? "aspect-square rounded-xl bg-[#12312e]"
                : cell === "start"
                  ? "aspect-square rounded-xl bg-amber-300"
                  : cell === "end"
                    ? "aspect-square rounded-xl bg-cyan-300"
                    : cell === "path"
                      ? "aspect-square rounded-xl bg-teal-400"
                      : "aspect-square rounded-xl bg-teal-800/80"
            }
          />
        ))}
      </div>
      <p className="px-2 py-3 text-sm text-teal-950/70">Drag from the amber tile. The cyan tile is the last step.</p>
    </div>
  );
}
