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
  title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta",
  description:
    "El estudiante de instituto Hojo Saito está a punto de heredar la gran empresa de su abuelo. Para ello debe casarse con Akane Sakuramori, la chica a la que más detesta y que a su vez le detesta a él.Los dos están decididos a ocultar su imprevisto matrimonio a sus compañeros de clase, pero al comenzar su nueva vida como pareja, la distancia que los separa comienza a reducirse.",
  volumeNumber: 10,
  coverImage: "/kurasu.webp",
  downloadUrl: "/kurasu-no-daikirai",
}

const novels: Novel[] = [
  {
    id: "1",
    title: "Arslan Senki",
    description: "Después de una pérdida inesperada y devastadora en la Batalla de Atropátene, el Príncipe Heredero de Pars debe recuperar nuevas fuerzas y hacer nuevos aliados para recuperar su reino perdido. Arslan, de 14 años...",
    coverImage: "/arslan1.webp",
    genres: ["Acción", "Aventura", "Drama", "Fantasía"],
    status: "completed",
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
    title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle",
    description: "Dos jóvenes hermanos abandonados a su suerte en una isla desierta, a la espera de un rescate que quizá nunca llegue. Encuentran la alegría en las maravillas de su Edén personal, hasta que “el demonio” sacude su fe y los lleva por el camino de la tentación…",
    coverImage: "/binzume.webp",
    genres: ["Fantasía", "Tragedia"],
    status: "completed",
    isClickable: true,
    link: "/binzume-jigoku-otome-no-hondana",
  },
  {
    id: "5",
    title: "Sangetsuki, The Moon Over the Mountain",
    description: "En el transcurso de un viaje de rutina, el inspector del gobierno Yuan Can se encuentra con su viejo amigo Li Zheng, pero no como lo recuerda. Transformado por su obsesión en una bestia espantosa, Li Zheng cuenta su historia trágica y finalmente le presenta a su confidente una petición singular.",
    coverImage: "/sangetsuki.webp",
    genres: ["Fantasía", "Tragedia"],
    status: "completed",
    isClickable: true,
    link: "/sangetsuki",
  },
  {
    id: "6",
    title: "Gekashitsu, The Surgery Room",
    description: "Un misterioso encuentro en la sala de cirugía nos lleva por los caminos de los recuerdos después de que una dama rechaza la anestesia para proteger su secreto…",
    coverImage: "/gekashitsu.webp",
    genres: ["Fantasía", "Tragedia"],
    status: "completed",
    isClickable: true,
    link: "/gekashitsu",
  },
  {
    id: "7",
    title: "Gyofukuki, The Girl Who Became a Fish",
    description: "Suwa y su padre viven solos en las laderas de la Montaña del caballo y se ganan la vida a duras penas. Durante los meses más cálidos, la hermosa cascada atrae a algunos turistas, pero cuando llega el invierno sólo hay soledad.",
    coverImage: "/gyofukuki.webp",
    genres: ["Fantasía", "Tragedia"],
    status: "completed",
    isClickable: true,
    link: "/gyofukuki",
  },
  {
    id: "8",
    title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage",
    description: "Confinada en un lecho de enfermedad junto al mar, una mujer espera la muerte mientras su marido la cuida. Sin embargo, este no es un idilio trágico; el espacio entre ellos está lleno de antagonismo, miedo, sospecha, dolor….",
    coverImage: "/haru.webp",
    genres: ["Fantasía", "Tragedia"],
    status: "completed",
    isClickable: true,
    link: "/haru-wa-basha-ni-notte",
  },
  {
    id: "9",
    title: "Conocí a un ángel, una chica linda que me cuidó luego de ser engañado por mis 3 novias",
    description: "Yusuke Takahiro, a dos años de estar viviendo solo en su apartamento lejos de su ciudad natal, vive atormentado por su pasado debido a que fue víctima de infidelidad, debido a eso está sufriendo un estrés postraumático.",
    coverImage: "/sannin.webp",
    genres: ["Drama", "Recuentos de la vida", "Romance"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "10",
    title: "Buta no Liver wa Kanetsu Shiro",
    description: "Un otaku poco atractivo despierta en el cuerpo de un cerdo después de desmayarse mientras come hígado de cerdo crudo. El cerdo se encuentra en compañía de Jess, una chica inocente que puede leer la mente de las personas...",
    coverImage: "/buta.webp",
    genres: ["Fantasía", "Recuentos de la vida", "Seinen"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "11",
    title: "Bokura no Sekai wa Fiction De",
    description: "¿Los personajes de sus propias novelas en el mundo real? ¡Protege a su heroína ideal con el conocimiento del autor! La vida en el instituto es muy ajetreada para el solucionador de casos escolares Sasanuki Bunshi...",
    coverImage: "/bokura.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "11",
    title: "Doushi Shoujo Yo, Teki Wo Ute",
    description: "En 1942, durante la guerra entre Alemania y la Unión Soviética, la vida cotidiana de Serafina, una joven que vive en un pueblo agrícola cerca de Moscú, le fue arrebatada repentinamente. Su madre, y otros aldeanos fueron masacrados por las tropas alemanas que se abalanzaron sobre ellos.",
    coverImage: "/doushi.webp",
    genres: ["Acción", "Maduro", "Seinen"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "12",
    title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu",
    description: "Ukei Kaito libró una lucha desesperada para cumplir su papel como héroe invocado. Derrotó al ser conocido como Señor de los Demonios y salvó al mundo, solo para encontrarse con un final lleno de traición.",
    coverImage: "/nidome.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "in-progress",
    isClickable: true,
    link: "/nidome-no-yuusha",
  },
  {
    id: "13",
    title: "Watashi, Nouryoku wa Heikinchi dette Itta yo ne! Lily’s Miracle",
    description: "Al nacer sorda, la pequeña Lily fue escondida del mundo durante sus primeros 9 años de vida por su padre, el Margrave. Pero su vida, vida cambio para siempre cuál el legendario grupo de cazadores conocidos como “Crimson Vow» (Pacto Carmesí) la salva luego que su hogar fuera atacado por un grupo de bandidos.",
    coverImage: "/watashi.webp",
    genres: ["Acción", "Aventura", "Comedia"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "14",
    title: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru",
    description: "Sakurako Kujo es una belleza genial de veintitantos años cuya vida se centra en una sola cosa: los huesos. Con poca tolerancia hacia los demás, estaría completamente aislada en su estudio lleno de esqueletos si no fuera por el chico de secundaria, Shotarou, su nuevo asistente y compañero constante.",
    coverImage: "/sakurako.webp",
    genres: ["Detective", "Drama", "Tragedia"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "15",
    title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case",
    description: "Quería ser una chica normal de instituto. Porque esta “vida” deseaba ser una chica de instituto. Soy Nagisa. Nagisa Natsunagi. Seguramente solo soy una chica de instituto que aún no se ha convertido en nada.",
    coverImage: "/natsunagi.webp",
    genres: ["Comedia", "Vida escolar", "Drama", "Misterio"],
    status: "in-progress",
    isClickable: true,
    link: "/natsunagi-nagisa-wa-mada",
  },
  {
    id: "16",
    title: "Hyouka",
    description: "Hōtarō Oreki es un estudiante de secundaria cuya vida se basa en la ley del mínimo esfuerzo. Pensaba que todo continuaría así, pero al unirse al Club de Literatura Clásica por petición de su hermana, su vida se verá alterada.",
    coverImage: "/hyouka.webp",
    genres: ["Drama", "Misterio", "Romance"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "17",
    title: "Shuuen no Hanayome",
    description: "¡Un voto (juramento) que no puede ser quebrantado! Han pasado años desde que los Kihei aparecieron repentinamente e invadieron el mundo. Para combatir esta amenaza, la humanidad estableció la Academia Twilight, para entrenar a los estudiantes como soldados, aunque la mayoría muere antes de graduarse.",
    coverImage: "/shuuen.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "18",
    title: "Totsuzen Papa ni Natta Saikyou Dragon no Kosodate Nikki: Kawaii Musume",
    description: "¡Papá!» El dragón parpadeó cuando la pequeña humana lo llamó. ¿A él? ¿»Papá»? Un ser tan poderoso como para ser venerado por la humanidad, pero tan cariñoso e incluso un poco tonto, el dragón pronto se encuentra criando y mimando a la precoz Olivia como si fuera realmente su hija en esta conmovedora historia.",
    coverImage: "/dragon.webp",
    genres: ["Fantasía", "Recuentos de la vida"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "19",
    title: "Youjo Senki",
    description: "La historia sigue a una joven llamada Tanya Degurechaff, quien es un oficial militar en un mundo alternativo donde la magia existe. Tanya, antes conocida como un joven prodigio, es reencarnado en un cuerpo de niña, y se ve obligada a luchar en una guerra interminable.",
    coverImage: "/military.webp",
    genres: ["Acción", "Seinen", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "20",
    title: "Kanojo wo Ubatta Ikemen Bishōjo ga Nazeka Ore Made Neratte Kuru",
    description: "Sakuhara Souta, un chico aburrido y un nerd de las películas, milagrosamente consiguió su primera novia cuando estaba en tercer año de secundaria. Parecía haber encontrado la felicidad pero…",
    coverImage: "/kanojo.webp",
    genres: ["Comedia", "Romance", "Vida escolar"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "21",
    title: "Kono Subarashii Sekai ni Shukufuku wo! Yorimichi!",
    description: "Konosuba: Yorimichi es la colección de cuentos cortos lanzada por Akatsuki Natsume después del volumen 17, que presenta un conjunto de ocho nuevos cuentos.",
    coverImage: "/konosuba.webp",
    genres: ["Comedia", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "22",
    title: "Konyaku Haki kara Hajimaru Akuyaku Reijou no Kangoku Slow Life",
    description: "¡Prepárate para una comedia carcelaria llena de energía! El príncipe Eliot está comprometido con Rachel, la hija de un duque, pero tiene los ojos puestos en otra persona. Decide romper su compromiso acusando a Rachel de un crimen que no cometió y arrojándola en prisión.",
    coverImage: "/konyaku.webp",
    genres: ["Comedia", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "23",
    title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta",
    description: "El estudiante de instituto Hojo Saito está a punto de heredar la gran empresa de su abuelo. Para ello debe casarse con Akane Sakuramori, la chica a la que más detesta y que a su vez le detesta a él.",
    coverImage: "/kurasu.webp",
    genres: ["Comedia", "Romance", "Vida escolar"],
    status: "completed",
    isClickable: true,
    link: "/kurasu-no-daikirai",
  },
  {
    id: "24",
    title: "Majutsu no Hate wo Motomeru Daimajutsushi: Madou wo Kiwameta Ore ga Sanbyakunengo no Gijutsu Kakushin wo Kitai shite Tensei shitara, Kanashiku Naruhodo Taika shiteita…",
    description: "No hay nada en este mundo más peligroso que una bruja. Son la personificación del miedo y el terror, y pueden convocar inundaciones a su antojo, conjurar bolas de fuego en el aire o incluso destruir países enteros de la noche a la mañana. Si provocan su ira, nadie está a salvo.",
    coverImage: "/majo.webp",
    genres: ["Acción", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "25",
    title: "Omiai Shitakunakattanode, Muri Nandai na Jouken wo Tsuketara Doukyuusei ga Kita Ken ni Tsuite",
    description: "Un día, Yuzuru Takasegawa, un estudiante de primer año de Preparatoria, es instado por su abuelo a acudir a un encuentro matrimonial concertado, insistiendo en que quiere ver a su bisnieto antes de morir. Sin embargo, al no querer soportar el peso de una prometida a la tierna edad de un estudiante de primer año de Preparatoria...",
    coverImage: "/omiai.webp",
    genres: ["Comedia", "Drama", "Romance"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "26",
    title: "Shinigami ni Sodaterareta Shoujo wa Shikkoku no Ken wo Mune ni Idaku",
    description: "Olivia era solo una bebé cuando el misterioso Z la encontró en un templo en las profundidades del bosque. A partir de ese día, el templo se convierte en su hogar y Z en su familia. Z, un dios de la muerte, la educa en las costumbres del mundo, en el combate y en las artes de la magia, olvidadas hace mucho tiempo, hasta el día en que Z desaparece.",
    coverImage: "/shinigami.webp",
    genres: ["Acción", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "27",
    title: "Tantei wa Mou, Shindeiru",
    description: "La historia se centra en Kimihiko Kimizuka, una estudiante de tercer año de secundaria y ex asistente de un detective llamado Siesta. Conoció a Siesta hace tres años, a 10.000 metros sobre el suelo, en un avión secuestrado. Los dos se embarcaron en una aventura desafiando a la muerte una tras otra durante tres años que finalmente terminó con la prematura muerte de Siesta.",
    coverImage: "/tantei.webp",
    genres: ["Comedia", "Drama", "Misterio"],
    status: "in-progress",
    isClickable: true,
    link: "/tantei-wa-mou",
  },
  {
    id: "28",
    title: "Tensei Reijou wa Boukensya wo Kokorozasu",
    description: "Serephione Granzeus es una niña normal y corriente de tres años… o eso cree, hasta que conoce a Lou, el superguapo Tigre Blanco Guardián. Los recuerdos de su vida pasada como empresaria japonesa le invaden, y se da cuenta de que forma parte de un libro de fantasía que leyó antes, pero como villana.",
    coverImage: "/tensei.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
     status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "29",
    title: "Usotsuki Rippu wa Koi de Kuzureru",
    description: "La historia de… Sagara Sohei, un estudiante universitario que insiste en vivir solo, y Nanase Haruko, una chica hermosa y brillante. Una estrella universitaria que vivía al lado. En su lindo apartamento.",
    coverImage: "/usotsuki.webp",
    genres: ["Romance", "Vida Escolar"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "30",
    title: "VTuber nanda ga Haishin Kiri Wasuretara Densetsu ni Natteta",
    description: "Yuki Tanaka es una VTuber en Live-On, una de las mayores empresas de VTuber de Japón, en el papel de la educada y refinada Awayuki Kokorone. Un día, se olvida de terminar el streaming, y sus espectadores ven su verdadera personalidad: irreverente, incorrecta y propensa a emborracharse después de un largo día.",
    coverImage: "/vTuber.webp",
    genres: ["Comedia", "Recuento de la vida"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "31",
    title: "Shigoto Kaeri, Dokushin no Bijin Joushi ni Tanomarete",
    description: "El joven empleado Haruhiko Sanezawa es abordado por Yuiko Monou, a la que llaman la “Reina” en el lugar de trabajo y es conocida por ser severa y temida. Haruhiko se confunde cuando ella le invita a un hotel tras una noche de copas.",
    coverImage: "/shigoto.webp",
    genres: ["Comedia", "Ecchi", "Romance"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "32",
    title: "Shouwaru Tensai Osananajimi to no Shoubu ni Makete Hatsutaiken wo Zenbu Ubawareru Hanashi",
    description: "La amiga de la infancia de Yoshizawa Wakaba, Umezono Komaki, encarnaba el concepto de “perfección”. Es educada, inteligente y destaca en los deportes. Al menos esa era la impresión que daba frente a los demás.",
    coverImage: "/shouwaru.webp",
    genres: ["Drama", "Ecchi", "Maduro"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "33",
    title: "Las heroínas principales están tratando de matarme",
    description: "Para salvar el desesperanzado Mundo de Fantasía Oscura, contuve mis lágrimas y destruí el mundo, luego maté al Rey Demonio y regresé. Ahora, estoy tratando de salvar el mundo usando el ‘Sistema’ que obtuve como el ‘Privilegio del Regresor’… pero las Heroínas Principales también han despertado sus recuerdos de la línea de tiempo anterior.",
    coverImage: "/heroinas.webp",
    genres: ["Acción", "Ecchi", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "34",
    title: "Hahaoya ga Ero-Ranobe Taishou Jushou Shite Jinsei",
    description: "¡Mi vida está en modo difícil por culpa de mi madre que me quiere tanto! ¿Una Ero-Novela de incesto madre-hijo escrita por una madre, Mirei, pudo de alguna manera ganar el gran premio, pero por alguna razón, su hijo fue el que asistió y recibió la recompensa? ¡Eso es ridículo! No importa, quiero decir que es un cliché.",
    coverImage: "/Hahaoya.webp",
    genres: ["Comedia", "Harem", "Romance"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "35",
    title: "Tachibana-san Chi no Dansei Jijou",
    description: "Después de la hospitalización de mi abuelo, fui llevado a la casa de las Tachibanas. La viuda profesional Kyouka-san, La hermosa belleza, la universitaria Yuika-nee-san, La gentil y femenina Koharu-nee-chan…",
    coverImage: "/tachibana.webp",
    genres: ["+18", "Netorare"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "36",
    title: "Shinyuu Mob no Ore ni Shujinkou no Imouto ga Horeru Wake ga Nai",
    description: "Entonces: Kunugi Kou libraba una sangrienta guerra como héroe en otro mundo. Ahora: Es un estudiante de secundaria perfectamente normal con un mejor amigo perfectamente excepcional: Ayase Kaito.",
    coverImage: "/mob.webp",
    genres: ["Drama", "Romance", "Comedia"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "37",
    title: "Sokushi Cheat ga Saikyou Sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.",
    description: "Al despertarse en medio de un caos absoluto y una carnicería durante una excursión escolar, Yogiri Takatou descubre que todos los de su clase han sido transportados a otro mundo.",
    coverImage: "/cheat.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "38",
    title: "Me convertí en el villano con el que la héroe está obsesionada",
    description: "Me convertí en el villano de la historia de un héroe. Así que estaba a punto de abandonar después de luchar contra el personaje principal. Pero ella está obsesionada conmigo. ¿Por qué…?",
    coverImage: "/hero.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "39",
    title: "Sannin no Kanojo ni Uwaki Sareta Boku o Kawaii Gatte Kureta Tenshi ni Deaimashita",
    description: "Yusuke Takahiro, a dos años de estar viviendo solo en su apartamento lejos de su ciudad natal, vive atormentado por su pasado debido a que fue víctima de infidelidad, debido a eso está sufriendo un estrés postraumático.",
    coverImage: "/watalma.webp",
    genres: ["Acción", "Aventura", "Fantasía"],
    status: "not-started",
    isClickable: false,
    link: "#",
  },
  {
    id: "40",
    title: "Majutsu no Hate wo Motomeru Daimajutsushi: Madou wo Kiwameta Ore ga Sanbyakunengo no Gijutsu Kakushin wo Kitai shite Tensei shitara, Kanashiku Naruhodo Taika shiteita",
    description: "Tras un reinado cruel y calculado, Kai Lekius, el Rey Sanguinario, trajo la estabilidad y la paz a su antaño fragmentada tierra. Así comenzó su letargo mortal mientras esperaba el surgimiento de la magia, dejando el resto en las capaces manos de su hermano.",
    coverImage: "/mago.webp",
    genres: ["Acción", "Aventura", "Harem"],
    status: "not-started",
    isClickable: false,
    link: "#",
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
      return <Badge variant="secondary">No disponible aún</Badge>
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
