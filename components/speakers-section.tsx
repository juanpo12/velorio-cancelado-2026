import { SpeakerCard } from "./speaker-card"
import velorio1 from "@/assets/logos/VELORIO 1.png"
import velorio11 from "@/assets/logos/VELORIO 11.png"
import velorio111 from "@/assets/logos/VELORIO 111.png"

const speakers = [
  {
    name: "Pr. Daniel Simão",
    role: "Pastor",
    description: "Líder, ministro y pastor apasionado por ver a las generaciones alcanzadas y transformadas por el poder del evangelio.",
    days: "Jueves 2 y Viernes 3",
    time: "19:30hs",
    image: velorio1,
    imagePosition: "60% 40%",
  },
  {
    name: "Cultura Music",
    role: "Ministerio de Alabanza",
    description: "Grupo de adoración que busca expresar, a través de canciones que nacen del discipulado, la oración y la transformación, la presencia de Dios.",
    days: "Sábado 4",
    time: "19:30hs",
    image: velorio11,
  },
  {
    name: "Santa Cena",
    role: "Domingo de Resurrección",
    description: "Día de Resurrección celebramos su victoria mediante la Santa Cena, tal como Él nos enseñó: “Hagan esto en memoria de mí”.",
    days: "Domingo 5",
    time: "11:00hs y 19:00hs",
    image: velorio111,
  },
]

export function SpeakersSection() {
  return (
    <section id="oradores" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            INVITADOS
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Será un tiempo especial compartido junto a:
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>

    </section>
  )
}
