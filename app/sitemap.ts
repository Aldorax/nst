import type { MetadataRoute } from "next";
import { siteUrl } from "./site";
import { services, projects } from "./content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/services",
    "/studio",
    "/process",
    "/pricing",
    "/contact",
    ...services.map((item) => `/services/${item.slug}`),
    ...projects.map((item) => `/work/${item.slug}`),
  ].map((path) => ({
    url: siteUrl + path,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
