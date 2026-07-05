import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/page-scaffold";
import { pages } from "@/data/site-pages";

const page = pages["terms"];

export const Route = createFileRoute("/terms")({
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
  component: () => <PageScaffold page={page} />,
});
