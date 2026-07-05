import ref from "@/assets/ref-trust.png.asset.json";

export function Trust() {
  return (
    <section className="relative w-full bg-black">
      <img
        src={ref.url}
        alt="Trusted by creators, brands & businesses building the future"
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
