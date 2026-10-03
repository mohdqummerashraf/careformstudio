import Header from "./component/Header";
import Footer from "./component/Footer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://careformstudio.com";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Careform",
  url: siteUrl,
  email: "hello@careform.studio",
  description:
    "Healthcare websites, patient experiences and custom software designed around the people who use them.",
  knowsAbout: [
    "Healthcare web design",
    "Patient experience design",
    "Healthcare software development",
    "Digital health",
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Careform studio | Thoughtful digital for better healthcare",
    template: "%s | Careform",
  },
  description:
    "Healthcare websites, patient experiences and custom software for doctors, clinics, hospitals, diagnostic centres and health startups.",
  applicationName: "Careform",
  authors: [{ name: "Careform" }],
  creator: "Careform",
  publisher: "Careform",
  keywords: [
    "healthcare web design",
    "healthcare software development",
    "clinic management software",
    "EHR software",
    "patient experience design",
    "healthcare websites",
    "digital health",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Careform",
    title: "Careform studio | Thoughtful digital for better healthcare",
    description:
      "Healthcare websites, patient experiences and custom software designed around the people who use them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careform studio | Thoughtful digital for better healthcare",
    description:
      "Healthcare websites, patient experiences and custom software designed around the people who use them.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
