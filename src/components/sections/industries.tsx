import ref from "@/assets/ref-industries.png.asset.json";

export function Industries() {
  return (
    <section id="industries" className="relative w-full bg-black">
      <img
        src={ref.url}
        alt="Different goals. Same results."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
