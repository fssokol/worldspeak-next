import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://worldspeak.pl"

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/zajecia-online`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/polityka-prywatnosci`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/rodo`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
