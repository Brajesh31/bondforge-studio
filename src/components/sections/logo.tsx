import logo from "@/assets/logo.png"; // CHANGED: Replaced .asset.json with the correct image extension (e.g., .png or .svg)

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-cream/95 ring-1 ring-hairline">
        <img
          src={logo} /* CHANGED: Removed .url */
          alt="The Social Bond"
          width={36}
          height={36}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight text-foreground">
          Social <span className="text-gradient italic">Bond</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Content · Strategy · Growth
        </span>
      </div>
    </div>
  );
}