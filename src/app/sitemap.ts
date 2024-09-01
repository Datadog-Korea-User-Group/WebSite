import type { MetadataRoute } from "next";

import { Events } from "@/src/constants/events";

import { getAllBlogs } from "@/lib/getAllBlogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();
  const blogPost = blogs.map(({ component, ...meta }) => ({
    url: `https://datadogkrug.vercel.app/blog/${meta.slug}`,
    lastModified: new Date(meta.date),
    changeFrequency: "monthly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  const events = Events.map((event) => ({
    url: `https://datadogkrug.vercel.app/events/${event.slug}`,
    lastModified: new Date(event.created_at),
    changeFrequency: "monthly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: "https://datadogkrug.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://datadogkrug.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://datadogkrug.vercel.app/events",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...events,
    {
      url: "https://datadogkrug.vercel.app/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogPost,
  ];
}
