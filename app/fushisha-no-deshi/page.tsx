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
  title: "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan",
  coverImage: "/fushisha4.webp",
  isCompleted: false,
  synopsis: `Cuando Kanbara Kanata es sacado de su vida cotidiana para llevarlo a un mundo de aventuras, sin darse cuenta ofende al ser todopoderoso que lo trajo allí. 

Como castigo, ¡es enviado al fondo de la mazmorra más peligrosa sin un solo poder o habilidad especial! Está seguro de que está perdido hasta que conoce a una chica lich llamada Lunaère, una poderosa no muerta que odia a los humanos, pero que a regañadientes decide ayudarlo de todos modos. 

¡Con la ayuda de Lunaère, Kanata podría convertirse en alguien realmente increíble!`,

  details: {
    alternativeTitles: ["不死者の弟子 ～邪神の不興を買って奈落に落とされた俺の英雄譚～", "Discípulo del Lich ¡O Cómo fui Maldecido por los Dioses y Arrojado al Abismo!", "Disciple of the Lich: Or How I Was Cursed By the Gods and Dropped into the Abyss, The Disciple of Lich Disciple of Immortal", "The Disciple of Lich: This is Heroic Tale of Mine That I Incurred Evil God’s Displeasure and Dropped to the Abyss"],
    author: "Nekoko",
    illustrator: "Yoh Hihara",
    yearPublished: "2020",
    publisher: "OVERLAP",
    totalVolumes: 7,
    translatedVolumes: 4,
    genres: ["Acción", "Aventura", "Comedia", "Drama", "Fantasía", "Romance"],
  },

  showAdWarning: false,

  supportLinks: {
    patreon: "https://patreon.com/LegendsNoFansub",
    paypal: "https://ko-fi.com/legendsnofansub",
  },

  volumes: [
    {
      number: 1,
      coverImage: "/fushisha1.webp",
      pdfLink: "https://www.mediafire.com/file/asm1rl2b5byi5ad/%255BMNM_%2526_LNF%255D_Disc%25C3%25ADpulo_del_Lich_-_Volumen_01.pdf/file",
      epubLink: "https://www.mediafire.com/file/71o9qe2xg1n409f/%255BMNM_%2526_LNF%255D_Disc%25C3%25ADpulo_del_Lich_-_Volumen_01.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 2,
      coverImage: "/fushisha2.webp",
      pdfLink: "https://www.mediafire.com/file/k8i1qh7ifgmhuur/%255BMNM_%2526_LNF%255D_Disc%25C3%25ADpulo_del_Lich_-_Volumen_02.pdf/file",
      epubLink: "https://www.mediafire.com/file/ofd731z07l14xq2/Fushisha_no_Deshi_-_V02_%255BMegami_no_Manga_x_Legends_no_Fansub%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 3,
      coverImage: "/fushisha3.webp",
      pdfLink: "https://www.mediafire.com/file/gy70g3mgl3rnsjs/%255BMNM_%2526_LNF%255D_Disc%25C3%25ADpulo_del_Lich_-_Volumen_03.pdf/file",
      epubLink: "https://www.mediafire.com/file/9b4dkgvl6dpr1lm/Fushisha_no_Deshi_-_V03_%255BMegami_no_Manga%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 4,
      coverImage: "/fushisha4.webp",
      pdfLink: "https://www.mediafire.com/file/8imjgdyy8lnd60c/%255BMNM_%2526_LNF%255D_Disc%25C3%25ADpulo_del_Lich_-_Volumen_04.pdf/file",
      epubLink: "https://www.mediafire.com/file/1juh9a1pgl20ujv/Fushisha_no_Deshi_-_V04_%255BMegami_no_Manga%255D.epub/file",
      available: true,
      status: "available", // Add this line
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

                          <Button asChild variant="outline" className="w-full bg-transparent" size="sm">
                            <Link href={volume.epubLink} target="_blank" rel="noopener noreferrer">
                              <Download className="mr-2 h-4 w-4" />
                              Descargar EPUB
                            </Link>
                          </Button>
                        </>
                      ) : volume.status === "in-translation" ? (
                        <>
                          <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700 text-black" size="sm">
                            <Link href={volume.previewLink} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2 h-4 w-4" />
                               Lee el Prólogo
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