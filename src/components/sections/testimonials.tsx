import ref from "@/assets/ref-testimonials.png.asset.json";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-white">
      <img
        src={ref.url}
        alt="Don't just take our word for it."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
