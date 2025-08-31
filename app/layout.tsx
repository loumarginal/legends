import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

// SEO Metadata - EDIT THESE VALUES
export const metadata: Metadata = {
  title: {
    default: "Legends no Fansub - Traducción de Novelas Ligeras",
    template: "%s | Legends no Fansub",
  },
  description:
    "Descarga novelas ligeras traducidas por Legends no Fansub en formatos PDF y EPUB. Descubre increíbles historias japonesas traducidas al inglés con contexto cultural y fluidez natural.",
  keywords: [
    "Traduccion de novelas ligeras",
    "Descarga PDF",
    "Descarga EPUB",
    "Novelas japonesas",
    "Traducción al Español",
    "Novelas de anime",
  ],
  authors: [{ name: "Legends no Fansub" }],
  creator: "Legends no Fansub",
  publisher: "Legends no Fansub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.legnnovels.com/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ES",
    url: "https://www.legnnovels.com/", // Replace with your actual domain
    title: "Legends no Fansub - Traducción de Novelas Ligeras",
    description:
      "Descarga novelas ligeras traducidas por Legends no Fansub en formatos PDF y EPUB. Descubre increíbles historias japonesas traducidas al inglés con contexto cultural y fluidez natural.",
    siteName: "Legends no Fansub",
    images: [
      {
        url: "/og.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Legends no Fansub - Traducción de Novelas Ligeras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legends no Fansub - Traducción de Novelas Ligeras",
    description: "Descarga novelas ligeras traducidas por Legends no Fansub en formatos PDF y EPUB.",
    creator: "@legendsnofansub", // Replace with your Twitter handle
    images: ["/og.png"], // Replace with your actual image
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Additional SEO tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Legends no Fansub",
              url: "https://www.legnnovels.com/",
              logo: "https://www.legnnovels.com/logo.png",
              description: "Traducción de novelas ligeras y descargas",
              sameAs: [
                "https://twitter.com/legendsnofansub",
                "https://facebook.com/legendsnofansub",
              ],
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, "dark")}>
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
