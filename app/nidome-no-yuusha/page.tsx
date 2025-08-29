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
  title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu",
  coverImage: "/nidome.webp",
  isCompleted: false,
  synopsis: `Ukei Kaito libró una lucha desesperada para cumplir su papel como héroe invocado. Derrotó al ser conocido como Señor de los Demonios y salvó al mundo, solo para encontrarse con un final lleno de traición. Los compañeros en los que había confiado a lo largo de su viaje lo traicionaron y lo asesinaron clavándole una espada en el pecho.

Fue entonces cuando se juró algo a sí mismo.

Juró que, si se le daba otra oportunidad, ya no se aferraría tan ingenuamente al concepto de “fe”.

Juró que, si le daban otra oportunidad, se dedicaría a realizar los actos de venganza más atroces posibles.

Juró que, si le daban otra oportunidad, haría las cosas bien.

“Mataré a todos y cada uno de ustedes… lo juro…”.

Y así, murió, dejando atrás solo una serie de últimas palabras amenazantes, pero su historia aún no había terminado. Una voz resonó en su cabeza y le informó que había más en su destino que lo que yacía más allá de la tumba.

[Mensaje del sistema: Modo tutorial completado]`,

  details: {
    alternativeTitles: ["二度目の勇者は復讐の道を嗤い歩む", "El héroe ríe mientras recorre el camino de la venganza en su segunda vida", "The Hero is Walking the Second Time on the Path of Vengeance While Laughing"],
    author: "Kizuka Nero",
    illustrator: "Sinsora",
    yearPublished: "2016",
    publisher: "MF Bunko",
    totalVolumes: 5,
    translatedVolumes: 5,
    genres: ["Acción", "Aventura", "Fantasía", "Drama"],
  },

  showAdWarning: false,

  supportLinks: {
    patreon: "https://patreon.com/LegendsNoFansub",
    paypal: "https://ko-fi.com/legendsnofansub",
  },

  volumes: [
    {
      number: 1,
      coverImage: "/nidome.webp",
      pdfLink: "https://www.mediafire.com/file/51ueazbwqdqzeki/Nidome_no_Yuusha_-_Volumen_01_BN_%255BMK_%2526_LnF%255D.pdf/file",
      epubLink: "https://www.mediafire.com/file/o65zgz3z8n752ef/Nidome_no_Yuusha_-_Volumen_01_BN_%255BMK_%2526_LnF%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 2,
      coverImage: "/n/n2.webp",
      pdfLink: "https://www.mediafire.com/file/fk1kiqjm7t5jwae/Nidome_no_Yuusha_-_Volumen_02_BN_%255BMK_%2526_LnF_%2526_AZAZEL%255D.pdf/file",
      epubLink: "https://www.mediafire.com/file/98vupdzps8tqoas/Nidome_no_Yuusha_-_Volumen_02_BN_%255BMK_%2526_LnF_%2526_AZAZEL%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 3,
      coverImage: "/n/n3.webp",
      pdfLink: "https://www.mediafire.com/file/miz500j3fc2knao/Nidome_no_Yuusha_-_Volumen_03_%255BMK_%2526_LnF%255D.pdf/file",
      epubLink: "https://www.mediafire.com/file/o802jcpg9xj5fka/Nidome_no_Yuusha_-_Volumen_03_%255BMK_%2526_LnF%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 4,
      coverImage: "/n/n4.webp",
      pdfLink: "https://www.mediafire.com/file/trhcn00upgysk3s/%255BMK_%2526_LnF%255D_Nidome_no_Yuusha_-_Volumen_4.pdf/file",
      epubLink: "https://www.mediafire.com/file/4vyzscmybg3572f/%255BMK_%2526_LnF%255D_Nidome_no_Yuusha_-_Volumen_4.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 5,
      coverImage: "/n/n5.webp",
      pdfLink: "#",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
  ],
}

export default function NetorarePage() {
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
              <h3 className="text-2xl font-bold text-green-400">¡Novela 100% completada!</h3>
              <p className="text-green-200">
                Esta serie ha sido completamente traducida! Todos los {novelData.details.totalVolumes} volúmenes están ahora disponibles.
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
              {novelData.isCompleted ? "Si te gustó la novela, invitanos un café" : "Dona una sola vez via PayPal"}
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
