import { createFileRoute } from "@tanstack/react-router";
import { pages } from "@/data/site-pages";
import img1 from "@/assets/svc-1.png.asset.json";
import img2 from "@/assets/svc-2.png.asset.json";
import img3 from "@/assets/svc-3.png.asset.json";
import img4 from "@/assets/svc-4.png.asset.json";
import img5 from "@/assets/svc-5.png.asset.json";
import img6 from "@/assets/svc-6.png.asset.json";
import img7 from "@/assets/svc-7.png.asset.json";
import img8 from "@/assets/svc-8.png.asset.json";

const page = pages["services"];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: page.title },
      { name: "description", content: page.metaDescription },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.metaDescription },
    ],
  }),
  component: ServicesPage,
});

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function ServicesPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-foreground pt-24 md:pt-28">
      {images.map((img, i) => (
        <section
          key={i}
          className="relative w-full"
          style={i < images.length - 1 ? { maskImage: "linear-gradient(to bottom, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 92%, transparent 100%)", marginBottom: "-2.5rem" } : undefined}
        >
          <img
            src={img.url}
            alt=""
            className="block w-full h-auto"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </section>
      ))}
    </main>
  );
}
