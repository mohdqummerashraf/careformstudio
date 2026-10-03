const siteName = "Careform Studio";
const socialImage = "/opengraph-image";
const socialImageAlt =
  "Careform studio — thoughtful digital for better healthcare";

export function createPageMetadata({ title, description, path }) {
  const brandedTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      title: brandedTitle,
      description,
      url: path,
      images: [
        { url: socialImage, alt: socialImageAlt, width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [socialImage],
    },
  };
}
