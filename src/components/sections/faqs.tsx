import ref from "@/assets/ref-faqs.png.asset.json";

export function Faqs() {
  return (
    <section id="faqs" className="relative w-full bg-white">
      <img
        src={ref.url}
        alt="Questions? We've got answers."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
