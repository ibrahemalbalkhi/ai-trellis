import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Trellis - خدمات الذكاء الاصطناعي للشركات في السعودية",
  description:
    "حلول ذكاء اصطناعي متكاملة للشركات السعودية. من التسويق الرقمي للأتمتة وتحليل البيانات. أكثر من 71 خدمة بتقنيات الذكاء الاصطناعي المتقدمة.",
  keywords:
    "ذكاء اصطناعي السعودية, خدمات AI, استشارات ذكاء اصطناعي, أتمتة الأعمال, تسويق رقمي بالذكاء الاصطناعي, حلول AI, تطوير تطبيقات ذكية, تحليل بيانات, CRM ذكي, الرياض",
  authors: [{ name: "AI Trellis" }],
  openGraph: {
    title: "AI Trellis - خدمات الذكاء الاصطناعي في السعودية",
    description: "حلول ذكاء اصطناعي متكاملة للشركات السعودية",
    type: "website",
    url: "https://aitrellis.com",
    locale: "ar_SA",
    siteName: "AI Trellis",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Trellis - خدمات الذكاء الاصطناعي",
    description: "حلول ذكاء اصطناعي للشركات السعودية",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Trellis",
              description: "خدمات الذكاء الاصطناعي للشركات في السعودية",
              url: "https://aitrellis.com",
              email: "sales@aitrellis.com",
              areaServed: {
                "@type": "Country",
                name: "Saudi Arabia",
              },
              serviceType: "AI Services",
            }),
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
