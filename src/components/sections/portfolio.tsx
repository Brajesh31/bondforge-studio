import ref from "@/assets/ref-portfolio.png.asset.json";

export function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-white">
      <img
        src={ref.url}
        alt="Work that speaks for itself"
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
