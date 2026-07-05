import ref from "@/assets/ref-hero.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-white">
      <img
        src={ref.url}
        alt="Content that Captures, Strategies that Drive Growth"
        className="block w-full h-auto"
        loading="eager"
      />
    </section>
  );
}
