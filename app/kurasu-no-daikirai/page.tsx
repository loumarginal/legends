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
  title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta",
  coverImage: "/kurasu.webp",
  isCompleted: true,
  synopsis: `El estudiante de instituto Hojo Saito está a punto de heredar la gran empresa de su abuelo. Para ello debe casarse con Akane Sakuramori, la chica a la que más detesta y que a su vez le detesta a él. 
  
  Los dos están decididos a ocultar su imprevisto matrimonio a sus compañeros de clase, pero al comenzar su nueva vida como pareja, la distancia que los separa comienza a reducirse.`,

  details: {
    alternativeTitles: ["Class no Daikirai na Joshi to Kekkon Suru Koto ni Natta", "I Ended up Marrying the Girl I Hate in my Class","Kurakon", "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta", "クラスの大嫌いな女子と結婚することになった。", "我和班上最討厭的女生結婚了。", "Estoy casado con una chica de mi clase a la que odio"],
    author: "Amano Seiju",
    illustrator: "Narumi Nanami",
    yearPublished: "2020",
    publisher: "MF Bunko",
    totalVolumes: 10,
    translatedVolumes: 10,
    genres: ["Comedia", "Recuentos de la vida", "Romance", "Vida escolar"],
  },

  showAdWarning: false,

  supportLinks: {
    patreon: "https://patreon.com/LegendsNoFansub",
    paypal: "https://ko-fi.com/legendsnofansub",
  },

  volumes: [
    {
      number: 1,
      coverImage: "/class/class1.webp",
      pdfLink: "https://www.mediafire.com/file/df836dq4el52pw7/%255BLnF%255D_Kurasu_no_Daikiraina_-_Volumen_01.pdf/file",
      epubLink: "https://www.mediafire.com/file/nngig5xkbgqyobl/%255BLnF%255D_Kurasu_no_Daikiraina_-_Volumen_01.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 2,
      coverImage: "/class/class2.webp",
      pdfLink: "https://www.mediafire.com/file/htsb59zhrmb8r8k/%255BLnF_%2526_ShinomiyaT%255D_Kurasu_no_Daikiraina_-_Volumen_02.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 3,
      coverImage: "/class/class3.webp",
      pdfLink: "https://www.mediafire.com/file/3dfp5uht3dwbdm6/%255BLnF_%2526_ShinomiyaT%255D_Kurasu_no_Daikiraina_-_Volumen_03.pdf/file",
      epubLink: "https://www.mediafire.com/file/bfoanb1k4sna6uk/%255BLnF_%2526_ShinomiyaT%255D_Kurasu_no_Daikiraina_-_Volumen_03.epub/file",
      available: true,
      status: "available", // Add this line
  
    },
    {
      number: 4,
      coverImage: "/class/class4.webp",
      pdfLink: "https://www.mediafire.com/file/gyg2wgrijsdu3vd/Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_-_Volumen_4.pdf/file",
      epubLink: "https://www.mediafire.com/file/jz8cuzrqfvfh330/Kurasu_-_V04_%255BAkira_x_Underword_x_Legends%255D.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 5,
      coverImage: "/class/class5.webp",
      pdfLink: "https://www.mediafire.com/file/j0rx0xd9e3e2ysn/Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_Volumen_05_-_LNF_X_UNL_X_AKTL.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 6,
      coverImage: "/class/class6.webp",
      pdfLink: "https://www.mediafire.com/file/es9mt9w3a276djc/Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_Volumen_06_-_LNF_X_UNL.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 7,
      coverImage: "/class/class7.webp",
      pdfLink: "https://www.mediafire.com/file/jpf2cp08pbbr85m/Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_Volumen_07_-_LNF_X_UNL.pdf/file",
      epubLink: "#",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 8,
      coverImage: "/class/class8.webp",
      pdfLink: "https://www.mediafire.com/file/q4bttnbdjpe5t8s/LNF_x_MK_x_DT_-_Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_-_Volumen_8.pdf/file",
      epubLink: "https://www.mediafire.com/file/w0pp147hsj8yb2t/LNF_x_MK_x_DT_-_Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta_-_Volumen_8.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 9,
      coverImage: "/class/class9.webp",
      pdfLink: "https://www.mediafire.com/file/wfgqgholkv7p9n9/LNF_%2526_DT._Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta._Volumen_9.pdf/file",
      epubLink: "https://www.mediafire.com/file/weuqyb4kvwryuy2/LNF_%2526_DT._Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta._Volumen_9.epub/file",
      available: true,
      status: "available", // Add this line
    },
    {
      number: 10,
      coverImage: "/class/class10.webp",
      pdfLink: "https://www.mediafire.com/file/9ntjk7rkju3ivbe/LNF_%2526_DT._Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta._Volumen_10.pdf/file",
      epubLink: "https://www.mediafire.com/file/jjljbuh2bk94o77/LNF_%2526_DT._Kurasu_no_Daikiraina_Joshi_to_Kekkon_Suru_Koto_ni_Natta._Volumen_10.epub/file",
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
