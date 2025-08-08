import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Netorare yuusha o TS shoujo ga sukū hanashi - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Netorare yuusha o TS shoujo ga sukū hanashi. Hiroin ni isekai tensei shite anata to shiawase ni narimashita light novel en PDF y EPUB formato.",
  keywords: [
    "Netorare yuusha o TS shoujo ga sukū hanashi",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
    "La historia de un hombre que reencarnó como mujer y salva a un Héroe Cornudo",
    "寝取られ勇者をＴＳ少女が救う話　ヒロインに異世界転生してあなたと幸せになりました。",
  ],
  openGraph: {
    title: "Netorare yuusha o TS shoujo ga sukū hanashi - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Netorare yuusha o TS shoujo ga sukū hanashi. Hiroin ni isekai tensei shite anata to shiawase ni narimashita light novel en PDF y EPUB formato.",
    url: "https://gashaworld.club/netorare-yuusha-o-ts",
    siteName: "Gashadokai",
    images: [
      {
        url: "/og-netorare.webp",
        width: 1200,
        height: 630,
        alt: "Netorare yuusha o TS shoujo ga sukū hanashi - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netorare yuusha o TS shoujo ga sukū hanashi - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Netorare yuusha o TS shoujo ga sukū hanashi. Hiroin ni isekai tensei shite anata to shiawase ni narimashita light novel en PDF y EPUB formato.",
    images: ["/og-netorare.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/netorare-yuusha-o-ts",
  },
}

export default function NetorareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
