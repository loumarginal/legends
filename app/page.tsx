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
    coverImage: "/fushisha1.webp",
    genres: ["Acción", "Aventura", "Romance", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/fushisha-no-deshi",
  },
  {
    id: "3",
    title: "Black Summoner",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/black1.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/black-summoner",
  },
  {
    id: "4",
    title: "Sangetsuki, The Moon Over the Mountain",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408824545040662578/Sv-LED-Volumen-2-La-Luna-sobre-la-Montana_001-1-scaled.jpg?ex=68ab259a&is=68a9d41a&hm=fe3e2419dd3aaa6b42881cadeb2d978c31c3989c423d4eef7e4ca954c1f523a7",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "5",
    title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408824280644587611/el_infierno_en_una_botella.jpg?ex=68ab255b&is=68a9d3db&hm=a53494c9da335b50fcf4981aa4b815bdaf74c72ea727883391b24d9cda0317e1",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "6",
    title: "Gekashitsu, The Surgery Room",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408824891695960154/Sv-LED-Volumen-3-La-Sala-de-Cirugia_001-scaled.jpg?ex=68ab25ec&is=68a9d46c&hm=7c5a01567537cd24d647449c2b3ddafd8fc2c6bf942bf37ece947bde7a94395f",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "7",
    title: "Gyofukuki, The Girl Who Became a Fish",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408825210236567774/Portada-Pez-scaled-e1705971940170.jpg?ex=68ab2638&is=68a9d4b8&hm=81b0cc8d05a80258df0e90609032cfb99adee5582529eb046d89375908915194",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "8",
    title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408825398724132874/Sv-LED-Volumen-5-La-Primavera-Llega-Montada-en-un-Carruaje_001-scaled.jpg?ex=68ab2665&is=68a9d4e5&hm=c63d85befa785d425f3669df335edbb28d193d5024a40041f7fa8cc6b7286891",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "9",
    title: "Conocí a un ángel, una chica linda que me cuidó luego de ser engañado por mis 3 novias",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408825888178438144/imagen_2024-07-31_153851100.png?ex=68ab26da&is=68a9d55a&hm=1160bd7c4c275de80eb1afa0fd0dc4caceaf80d222a56974171278a4bbca2097",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "10",
    title: "Buta no Liver wa Kanetsu Shiro",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408826865338024050/Svartalheimer-Dynasty-Translations-Butareba-Vol.1_1-scaled.jpg?ex=68ab27c3&is=68a9d643&hm=5baa62889e3660240aa310bdbbeb699c41c80d340c00c33861d82155d477a7d4",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "11",
    title: "Bokura no Sekai wa Fiction De",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408827183509536768/imagen_2023-10-19_151501581.png?ex=68ab280f&is=68a9d68f&hm=7d065a044f19bfcc9fb52753d86bb76e52119741af89e93000399c72b19b33d7",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "11",
    title: "Doushi Shoujo Yo, Teki Wo Ute",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408827519951437864/Sv-Comrade-Girl-Shoot-the-Enemy_1-scaled.jpg?ex=68ab285f&is=68a9d6df&hm=3a6bea3a3bafafc06baa144af97ed55ebe5e6febe0f7cce7a14317f8d169cb14",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "12",
    title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408829113569116302/Nidome_no_Yuusha_-_Volumen_01_BN_MK__LnF_1.jpg?ex=68ab29db&is=68a9d85b&hm=64ced8d242222a5db780c3c0fd7efdd3500aa008182cd243402662ca9e4407cd",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "13",
    title: "Watashi, Nouryoku wa Heikinchi dette Itta yo ne! Lily’s Miracle",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408829436698034176/imagen_2023-10-23_154644688.png?ex=68ab2a28&is=68a9d8a8&hm=eab3049f5fff535368265c30587a5e4bf61fdd2410082f56aac2cd3c33fbe438",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "14",
    title: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408829865146449932/1735187e4f078a7c42c3e0ee083d2c42fd24236c_s2_n3_y1.png?ex=68ab2a8e&is=68a9d90e&hm=6d86d60b1ffe0bb66510beebf54a338aa5533efb3795d4f6a40a2e9de8744a6f",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "15",
    title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408830725343412294/2.jpg?ex=68ab2b5b&is=68a9d9db&hm=5adfda6068520524eba80c930fc6a87602a39bfbee7ce7f2cc8672805e1a4a59",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "16",
    title: "Hyouka",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408831145574924298/imagen_2023-10-24_152051067.png?ex=68ab2bbf&is=68a9da3f&hm=69016cd3a475c5f1fecc7ab27a280ed43960d61085d87b6b85a1fb224a7dc45b",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "17",
    title: "Shuuen no Hanayome",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "https://cdn.discordapp.com/attachments/1408824138679717912/1408831725991362631/LnF_Shuuen_no_Hanayome_Volumen_1_1.jpg?ex=68ab2c4a&is=68a9daca&hm=33862279c136123842dcef894bf0305a384279d519b37abb3a62749fcd946e1a",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
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
