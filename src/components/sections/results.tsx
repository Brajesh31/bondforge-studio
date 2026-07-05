import ref from "@/assets/ref-results.png.asset.json";

export function Results() {
  return (
    <section id="results" className="relative w-full bg-black">
      <img
        src={ref.url}
        alt="We don't just create. We create results."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
