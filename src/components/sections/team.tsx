import ref from "@/assets/ref-team.png.asset.json";

export function Team() {
  return (
    <section id="team" className="relative w-full bg-black">
      <img
        src={ref.url}
        alt="Real people. Real expertise. Real results."
        className="block w-full h-auto"
        loading="lazy"
      />
    </section>
  );
}
