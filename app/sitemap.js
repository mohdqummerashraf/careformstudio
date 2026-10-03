import { services } from "./services/data";
import { projects } from "./work/data";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://careformlab.com"
).replace(/\/$/, "");

export default function sitemap() {
  const routes = [
    ["", "weekly", 1],
    ["/services", "monthly", 0.9],
    ["/pricing", "monthly", 0.85],
    ["/work", "monthly", 0.8],
    ["/approach", "monthly", 0.7],
    ["/about", "monthly", 0.7],
    ["/contact", "monthly", 0.7],
    ...services.map((service) => [
      `/services/${service.slug}`,
      "monthly",
      0.65,
    ]),
    ...projects.map((project) => [`/work/${project.slug}`, "monthly", 0.6]),
  ];

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
