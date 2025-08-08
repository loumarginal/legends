"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

// DATOS EDITABLES - Agrega o quita nombres según tus supporters
const wallOfLoveData = {
  patreonLink: "https://www.patreon.com/Gashadokai/membership", // Cambia por tu enlace de Patreon

  // Lista de supporters del Gasha Club ($5/mes)
  gashaClubSupporters: [
    "SrArgus",
  ],

  // Lista de supporters del Gasha World ($30/mes)
  gashaWorldSupporters: [
    "Tu nombre aquí",
    "Tu nombre aquí",
    "Tu nombre aquí",
    "Tu nombre aquí",
  ],
}

export default function WallOfLovePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center mb-4">
              <Crown className="h-16 w-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Wall of
              <span className="block text-yellow-500">Love</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mi más sincero agradecimiento a todos los increíbles miembros del Gasha Club que apoyan mi labor de traducción. Gracias a ustedes todo esto es posible.
            </p>
          </div>

          {/* Tier Info Cards */}
          <div className="grid gap-6 md:grid-cols-2 mb-12 max-w-4xl mx-auto">
            <Card className="border-blue-500/20 bg-blue-950/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-blue-500">Gasha Club</h2>
                  <Star className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-muted-foreground">
                  Recibiras mi más grande agradecimiento y apoyas a financiar próximas series.
                </p>
                <Badge variant="outline" className="border-blue-500 text-blue-500">
                  $5 / mes
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-yellow-500/20 bg-yellow-950/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Crown className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold text-yellow-500">Gasha World</h2>
                  <Crown className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-muted-foreground">
                  Obtén prioridad en seleccionar series y solicitar traducciones exclusivas.
                </p>
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  $15 / mes
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Gasha World Supporters */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-yellow-500">Miembros del Gasha World</h2>
              <p className="text-muted-foreground text-lg">
                {wallOfLoveData.gashaWorldSupporters.length} miembros están carreando a este humilde traductor
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wallOfLoveData.gashaWorldSupporters.map((supporter, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-yellow-500/30 bg-yellow-950/10"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <Crown className="h-10 w-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-yellow-500 transition-colors duration-300">
                      {supporter}
                    </h3>
                    <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-500">
                      Gasha World
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gasha Club Supporters */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-500">Miembros del Gasha Club</h2>
              <p className="text-muted-foreground text-lg">
                {wallOfLoveData.gashaClubSupporters.length} increibles lectores están apoyando esta comunidad.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wallOfLoveData.gashaClubSupporters.map((supporter, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-blue-500/30 bg-blue-950/10"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <Star className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">
                      {supporter}
                    </h3>
                    <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-500">
                      Gasha Club
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 bg-card p-8 md:p-12 rounded-lg border">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                <Star className="h-8 w-8 text-blue-500" />
                <Crown className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Sé parte de este Muro</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Traducir Novelas Ligeras es pesado, costoso y toma mucho tiempo. Con tu apoyo, será mucho más sencillo.
            </p>

            <div className="flex flex-col gap-4 items-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full max-w-md"
              >
                <Link
                  href={wallOfLoveData.patreonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Star className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Gasha Club - $5/mes</span>
                  <span className="sm:hidden">Gasha Club - $5/m</span>
                  <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold w-full max-w-md"
              >
                <Link
                  href={wallOfLoveData.patreonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Crown className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Gasha World - $15/mes</span>
                  <span className="sm:hidden">Gasha World - $15/m</span>
                  <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground max-w-lg mx-auto">
              <div className="space-y-1">
                <p className="font-semibold text-blue-400">Gasha Club beneficios:</p>
                <p>✨ Apoyas la traducción de la novela</p>
                <p>⭐ Tu nombre estará aquí</p>
                <p>💝 Acceso a los EPUB</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-yellow-400">Gasha World Bbeneficios:</p>
                <p>👑 Prioridad en votaciones</p>
                <p>🌟 Pide una novela mensual</p>
                <p>🍱 Acceso a traducciones exclusivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
