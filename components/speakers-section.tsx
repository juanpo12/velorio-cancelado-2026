import { SpeakerCard } from "./speaker-card"

const speakers = [
  {
    name: "Pr. Daniel Simão",
    role: "Pastor y Conferencista",
    description: "Predicador apasionado por la Palabra de Dios, con más de 20 años de ministerio.",
    days: "Jueves 2 y Viernes 3",
    time: "19:30hs",
  },
  {
    name: "Cultura Music",
    role: "Ministerio de Alabanza",
    description: "Grupo de adoración que lleva el corazón de la iglesia a través de la música.",
    days: "Sábado 4",
    time: "19:30hs",
  },
  {
    name: "Santa Cena",
    role: "Domingo de Resurrección",
    description: "Celebración especial recordando el sacrificio y la victoria de Cristo.",
    days: "Domingo 5",
    time: "11:00hs y 19:00hs",
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
            ORADORES
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Hombres y mujeres de Dios que compartirán la Palabra en este evento especial
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative wave pattern */}
      <div className="absolute left-0 right-0 h-32 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,0 C150,90 350,0 500,50 C650,100 700,0 900,50 C1100,100 1200,0 1200,0 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
