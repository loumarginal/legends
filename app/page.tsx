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
    coverImage: "/sangetsuki.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "5",
    title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/binzume.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "6",
    title: "Gekashitsu, The Surgery Room",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/gekashitsu.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "7",
    title: "Gyofukuki, The Girl Who Became a Fish",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/gyofukuki.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "8",
    title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/haru.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "9",
    title: "Conocí a un ángel, una chica linda que me cuidó luego de ser engañado por mis 3 novias",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/sannin.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "10",
    title: "Buta no Liver wa Kanetsu Shiro",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/buta.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "11",
    title: "Bokura no Sekai wa Fiction De",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/bokura.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "11",
    title: "Doushi Shoujo Yo, Teki Wo Ute",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/doushi.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "12",
    title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/nidome.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "13",
    title: "Watashi, Nouryoku wa Heikinchi dette Itta yo ne! Lily’s Miracle",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/watashi.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "14",
    title: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/sakurako.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "15",
    title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/natsunagi.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "16",
    title: "Hyouka",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/hyouka.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "17",
    title: "Shuuen no Hanayome",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/shuuen.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "18",
    title: "Totsuzen Papa ni Natta Saikyou Dragon no Kosodate Nikki: Kawaii Musume",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/dragon.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "19",
    title: "Las crónicas militares de una niña",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/military.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "20",
    title: "Kanojo wo Ubatta Ikemen Bishōjo ga Nazeka Ore Made Neratte Kuru",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/kanojo.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "21",
    title: "Kono Subarashii Sekai ni Shukufuku wo! Yorimichi!",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/konosuba.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "22",
    title: "Konyaku Haki kara Hajimaru Akuyaku Reijou no Kangoku Slow Life",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/konyaku.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "23",
    title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/kurasu.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/kurasu-no-daikirai",
  },
  {
    id: "24",
    title: "Majutsu no Hate wo Motomeru Daimajutsushi: Madou wo Kiwameta Ore ga Sanbyakunengo no Gijutsu Kakushin wo Kitai shite Tensei shitara, Kanashiku Naruhodo Taika shiteita…",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/majo.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "25",
    title: "Omiai Shitakunakattanode, Muri Nandai na Jouken wo Tsuketara Doukyuusei ga Kita Ken ni Tsuite",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/mago.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "26",
    title: "Shinigami ni Sodaterareta Shoujo wa Shikkoku no Ken wo Mune ni Idaku",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/shinigami.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "27",
    title: "Tantei wa Mou, Shindeiru",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/tantei.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "28",
    title: "Tensei Reijou wa Boukensya wo Kokorozasu",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/tensei.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "29",
    title: "Usotsuki Rippu wa Koi de Kuzureru",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/usotsuki.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "30",
    title: "VTuber nanda ga Haishin Kiri Wasuretara Densetsu ni Natteta",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/vTuber.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "31",
    title: "Shigoto Kaeri, Dokushin no Bijin Joushi ni Tanomarete",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/shigoto.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "32",
    title: "Shouwaru Tensai Osananajimi to no Shoubu ni Makete Hatsutaiken wo Zenbu Ubawareru Hanashi",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/shouwaru.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "33",
    title: "Las heroínas principales están tratando de matarme",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/heroinas.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "34",
    title: "Hahaoya ga Ero-Ranobe Taishou Jushou Shite Jinsei",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/Hahaoya.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "35",
    title: "Tachibana-san Chi no Dansei Jijou",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/tachibana.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "36",
    title: "Shinyuu Mob no Ore ni Shujinkou no Imouto ga Horeru Wake ga Nai",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/mob.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "37",
    title: "Sokushi Cheat ga Saikyou Sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/cheat.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "38",
    title: "Me convertí en el villano con el que la héroe está obsesionada",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/hero.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: false,
    link: "/black-summoner",
  },
  {
    id: "39",
    title: "Sannin no Kanojo ni Uwaki Sareta Boku o Kawaii Gatte Kureta Tenshi ni Deaimashita",
    description: "Al despertar en un lugar nuevo y extraño sin ningún recuerdo de su vida pasada, Kelvin se entera de que ha intercambiado esos mismos recuerdos a cambio de nuevas y poderosas habilidades durante su reciente transmigración.",
    coverImage: "/watalma.webp",
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
