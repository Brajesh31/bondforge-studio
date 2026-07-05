import ref from "@/assets/ref-services.png.asset.json";

export function Services() {
  return (
    <section id="services" className="relative w-full bg-white">
      <img
        src={ref.url}
        alt="Everything you need. All working together."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
