import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comisiona tu Novela Ligera - Gashadokai",
  description:
    "Servicios de traducción profesional del japonés al español para novelas ligeras, manga y novelas web. Obtén traducciones de alta calidad con contexto cultural y fluidez natural. Desde $30.",
  keywords: [
    "Servicio de traducción",
    "traducción de novelas ligeras",
    "traducción de japonés a español",
    "traductor profesional",
    "traducción por encargo",
  ],
  openGraph: {
    title: "Servicios de Traducción Profesional - Comisiones de Novelas Ligeras",
    description:
      "Servicios de traducción profesional del japonés al español para novelas ligeras y manga. Obtén traducciones de alta calidad con contexto cultural y fluidez natural. Desde $30.",
    url: "https://gashaworld.club/comisiones",
    siteName: "Gashadokai",
    images: [
      {
        url: "/og-comisiones.webp",
        width: 1200,
        height: 630,
        alt: "Gashadokai - Servicios de Traducción por Encargo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Traducción Profesional - Comisiones de Novelas Ligeras",
    description: "Servicios de traducción profesional del japonés al español para novelas ligeras y manga.",
    images: ["/og-comisiones.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/comisiones",
  },
}

export default function CommissionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
