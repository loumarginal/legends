"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, ExternalLink, Heart, AlertTriangle, ArrowLeft, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

// DATOS DE LA NOVELA - Solo cambia esto para crear una nueva página
const novelData = {
  title: "Black Summoner",
  coverImage: "/black1.webp",
  isCompleted: false,
  synopsis: `Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración. 
Dirigiéndose a un mundo completamente nuevo como un Invocador, Kelvin comienza su nueva vida como aventurero, y no pasa mucho tiempo antes de que descubra su carácter oculto como adicto a las batallas. 

Desde el Caballero Negro del Antiguo Castillo de los Espíritus Malignos hasta el demonio dentro de la Cueva Oculta del Sabio, se deleita en la lucha contra un enemigo formidable tras otro.`,

  details: {
    alternativeTitles: ["黒の召喚士, 黒の召喚士　～戦闘狂の成り上がり～", "Kuro no Shoukanshi: Sentoukyou no Nariagari, Kuro no Shoukanshi: The Berserker Rises to Greatness"],
    author: "Doufu Mayoi",
    illustrator: "Kurogin, DAI-XT",
    yearPublished: "2016",
    publisher: "OVERLAP",
    totalVolumes: 22,
    translatedVolumes: 13,
    genres: ["Acción", "Aventura", "Fantasía"],
  },

  showAdWarning: false,

  supportLinks: {
    patreon: "https://patreon.com/LegendsNoFansub",
    paypal: "https://ko-fi.com/legendsnofansub",
  },

  volumes: [
    {
      number: 1,
      coverImage: "/black1.webp",
      pdfLink: "https://www.mediafire.com/file/wcat7pnoozulwl8/%255BJM-T%255D_Black_Summoner_Volumen_1.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 2,
      coverImage: "/black2.webp",
      pdfLink: "https://www.mediafire.com/file/39wgik9xndepink/%255BJM-T%255D_Black_Summoner_Volumen_2.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 3,
      coverImage: "/black3.webp",
      pdfLink: "https://www.mediafire.com/file/cip7wmgbd9wyltp/%255BJM-T%255D_Black_Summoner_Vol_3.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 4,
      coverImage: "/black4.webp",
      pdfLink: "https://www.mediafire.com/file/yqqesoo7ul22i9k/%255BJM-T%255D_Black_Summoner_Volumen_4.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 5,
      coverImage: "/black5.webp",
      pdfLink: "https://www.mediafire.com/file/4c51x2m95n0jrdn/%255BLnF%255D_Black_Summoner_-_Volumen_05.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 6,
      coverImage: "/black6.webp",
      pdfLink: "https://www.mediafire.com/file/sf6r1e21oml9lhf/Black_Summoner_Volumen_6.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 7,
      coverImage: "/black7.webp",
      pdfLink: "https://www.mediafire.com/file/7065qwvc9quqy9g/Black_Summoner_Volumen_7.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 8,
      coverImage: "/black8.webp",
      pdfLink: "https://www.mediafire.com/file/jvomp3tw8i0dxm3/Black_Summoner_Volumen_8_Premiun.pdf/file",
      epubLink: "https://www.mediafire.com/file/1juh9a1pgl20ujv/Fushisha_no_Deshi_-_V04_%255BMegami_no_Manga%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 9,
      coverImage: "/black9.webp",
      pdfLink: "https://www.mediafire.com/file/uqlqnstqcbtbsgi/Black_Summoner_Volumen_9.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 10,
      coverImage: "/black10.webp",
      pdfLink: "https://www.mediafire.com/file/4ouk0bd4i4vgpc8/Black_Summoner_Volumen_10_Premium.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 11,
      coverImage: "/black11.webp",
      pdfLink: "https://www.mediafire.com/file/zjufqx90s2b4a51/Black_Summoner_Volumen_11_Premiun.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 12,
      coverImage: "/black12.webp",
      pdfLink: "https://www.mediafire.com/file/zbvckf05f3185xr/Black_Summoner_Volumen_12_Premiun.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 13,
      coverImage: "/black13.webp",
      pdfLink: "https://www.mediafire.com/file/zbvckf05f3185xr/Black_Summoner_Volumen_12_Premiun.pdf/file",
      epubLink: "https://www.mediafire.com/file/1juh9a1pgl20ujv/Fushisha_no_Deshi_-_V04_%255BMegami_no_Manga%255D.epub/file",
      available: false,
      status: "coming-soon", // Add this line
    },
  ],
}

export default function MainichiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="mb-4 hover:bg-accent">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retroceder
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Image
              src={novelData.coverImage || "/placeholder.svg"}
              alt={`${novelData.title} Cover`}
              width={350}
              height={500}
              className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">{novelData.title}</h1>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{novelData.synopsis}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-8 p-6 bg-card/50 rounded-lg border">
          <Card className="md:col-span-5">
            <CardHeader>
              <CardTitle className="text-lg">Titulos alternativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {novelData.details.alternativeTitles.map((title, index) => (
                  <p key={index} className="text-m text-muted-foreground">
                    {title}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Autor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">{novelData.details.author}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ilustrador</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">{novelData.details.illustrator}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Año Publicado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">{novelData.details.yearPublished}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Editorial</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">{novelData.details.publisher}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Volumenes totales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">{novelData.details.totalVolumes}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Volumenes traducidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-m text-muted-foreground">
                {novelData.details.translatedVolumes} / {novelData.details.totalVolumes}
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-4">
            <CardHeader>
              <CardTitle className="text-lg">Generos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {novelData.details.genres.map((genre, index) => (
                  <Badge key={index} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Completion Celebration Card (Conditional) */}
        {novelData.isCompleted && (
          <Card className="mb-8 border-green-500 bg-green-950/20 shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-4xl">🎉✨🎊</div>
              <h3 className="text-2xl font-bold text-green-400">Translation Complete!</h3>
              <p className="text-green-200">
                This series has been fully translated! All {novelData.details.totalVolumes} volumes are now available.
              </p>
              <div className="text-2xl">🏆📚🌟</div>
            </CardContent>
          </Card>
        )}

        {/* Ad Warning Card */}
        {novelData.showAdWarning && (
          <Alert className="mb-8 border-yellow-600 bg-yellow-950/20">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-200">
              The download links for the PDF have ad shortlinks so I can continue funding this project.
            </AlertDescription>
          </Alert>
        )}

        {/* Support Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {!novelData.isCompleted && (
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black">
              <Link href={novelData.supportLinks.patreon} target="_blank" rel="noopener noreferrer">
                <Heart className="mr-2 h-4 w-4" />
                Apoya esta traducción via Patreon
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href={novelData.supportLinks.paypal} target="_blank" rel="noopener noreferrer">
              <Heart className="mr-2 h-4 w-4" />
              {novelData.isCompleted ? "Show appreciation through PayPal" : "Dona una sola vez via Ko-Fi"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Volume List Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Volumenes disponibles</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {novelData.volumes.map((volume) => (
              <Card key={volume.number} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Image
                        src={volume.coverImage || "/placeholder.svg"}
                        alt={`Volume ${volume.number} Cover`}
                        width={140}
                        height={200}
                        className={`w-full h-58 object-cover rounded-lg transition-all duration-300 ${
                          !volume.available ? "grayscale opacity-60" : ""
                        }`}
                      />
                      {volume.status === "coming-soon" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                          <Badge variant="secondary" className="bg-gray-600 text-white">
                            Muy pronto
                          </Badge>
                        </div>
                      )}
                      {volume.status === "in-translation" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                          <Badge variant="secondary" className="bg-yellow-600 text-black">
                            En traducción
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Volumen {volume.number}</h3>
                    </div>

                    <div className="space-y-2">
                      {volume.status === "available" ? (
                        <>
                          <Button asChild className="w-full" size="sm">
                            <Link href={volume.pdfLink} target="_blank" rel="noopener noreferrer">
                              <Download className="mr-2 h-4 w-4" />
                              Descargar PDF
                            </Link>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            className="w-full bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10"
                            size="sm"
                          >
                            <Link href={novelData.supportLinks.patreon} target="_blank" rel="noopener noreferrer">
                              <Heart className="mr-2 h-4 w-4" />
                              Apoya esta traducción via Patreon
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button disabled className="w-full" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            PDF no está disponible
                          </Button>

                          <Button disabled variant="outline" className="w-full bg-transparent" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            EPUB no está disponible
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}