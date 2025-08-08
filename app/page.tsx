"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

// Types for our data
interface Novel {
  id: string
  title: string
  description: string
  coverImage: string
  genres: string[]
  status: "not-started" | "in-progress" | "completed"
  isClickable?: boolean
  link?: string
}

interface LatestVolume {
  title: string
  description: string
  volumeNumber: number
  coverImage: string
  downloadUrl: string
}

// Sample data - easily modifiable
const latestVolume: LatestVolume = {
  title: "Netorare yuusha o TS shoujo ga sukū hanashi. Hiroin ni isekai tensei shite anata to shiawase ni narimashita",
  description:
    "Invadido por el temor de ser traicionado nuevamente, Trust rapta a Filia y la encierra en una mansión con el objetivo de apoderarse de su cuerpo, su mente, y sus sentimientos. Obligandola a que ella lo ame a toda costa... ¡Explora la ruta alternativa donde el Héroe rapta al Héroina!",
  volumeNumber: 3,
  coverImage: "/netorare-ex.webp",
  downloadUrl: "https://gashaworld.club/netorare-yuusha-o-ts",
}

const novels: Novel[] = [
  {
    id: "1",
    title: "Arslan Senki",
    description: "Después de una pérdida inesperada y devastadora en la Batalla de Atropátene, el Príncipe Heredero de Pars debe recuperar nuevas fuerzas y hacer nuevos aliados para recuperar su reino perdido. Arslan, de 14 años...",
    coverImage: "/arslan1.webp",
    genres: ["Acción", "Aventura", "Drama", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/arslan-senki",
  },
  {
    id: "2",
    title: "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan",
    description: "Cuando Kanbara Kanata es sacado de su vida cotidiana para llevarlo a un mundo de aventuras, sin darse cuenta ofende al ser todopoderoso que lo trajo allí...",
    coverImage: "/fushisha.webp",
    genres: ["Acción", "Aventura", "Romance", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/mainichi-ie-ni-kuru-gal",
  },
]

function getStatusBadge(status: Novel["status"]) {
  switch (status) {
    case "completed":
      return (
        <Badge variant="default" className="bg-green-600 hover:bg-green-700">
          Completado
        </Badge>
      )
    case "in-progress":
      return (
        <Badge variant="default" className="bg-yellow-600 hover:bg-yellow-700">
          En Traducción
        </Badge>
      )
    case "not-started":
      return <Badge variant="secondary">En planes de traducción</Badge>
    default:
      return null
  }
}

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <Image
                src={latestVolume.coverImage || "/placeholder.svg"}
                alt={`${latestVolume.title} Volume ${latestVolume.volumeNumber} Cover`}
                width={1500}
                height={2200}
                className="mx-auto rounded-lg shadow-2xl"
              />
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-slate-400 to-slate-600 text-black font-semibold">
                Actualización reciente
              </Badge>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{latestVolume.title}</h1>
                <p className="text-xl text-muted-foreground">Volumen {latestVolume.volumeNumber}</p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">{latestVolume.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href={latestVolume.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar volumen
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Series Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mis traducciones</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Colección de Legends no Fansub
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {novels.map((novel) => (
                <Card
                  key={novel.id}
                  className={`group transition-all duration-300 hover:shadow-lg ${
                    novel.isClickable ? "cursor-pointer hover:scale-105" : ""
                  }`}
                  onClick={() => {
                    if (novel.isClickable && novel.link) {
                      window.location.href = novel.link
                    }
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="relative">
                      <Image
                        src={novel.coverImage || "/placeholder.svg"}
                        alt={`${novel.title} Cover`}
                        width={200}
                        height={300}
                        className="w-full h-54 object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3">{getStatusBadge(novel.status)}</div>
                    </div>

                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {novel.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{novel.description}</CardDescription>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {novel.genres.map((genre, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
