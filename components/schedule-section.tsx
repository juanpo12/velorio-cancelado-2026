import { Calendar, Clock, MapPin } from "lucide-react"

const schedule = [
  {
    day: "Jueves 2",
    events: [
      { time: "19:30hs", title: "Noche de restauración", speaker: "Pr. Daniel Simão" }
    ]
  },
  {
    day: "Viernes 3",
    events: [
      { time: "19:30hs", title: "Noche de ministración", speaker: "Pr. Daniel Simão" }
    ]
  },
  {
    day: "Sábado 4",
    events: [
      { time: "19:30hs", title: "Noche de adoración", speaker: "Cultura Music" }
    ]
  },
  {
    day: "Domingo 5",
    events: [
      { time: "11:00hs", title: "Celebración de la resurrección", speaker: "Santa Cena" },
    ]
  }
]

export function ScheduleSection() {
  return (
    <section id="programa" className="py-20 md:py-32 bg-background relative">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d5c3a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            PROGRAMA
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuatro días de encuentro con Dios celebrando la Pascua y la Resurrección
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          {/* Schedule Items */}
          <div className="space-y-8">
            {schedule.map((daySchedule, dayIndex) => (
              <div key={daySchedule.day} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${dayIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10 top-2" />
                
                {/* Day label */}
                <div className={`md:w-1/2 ${dayIndex % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span 
                      className="text-xl font-bold text-primary"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {daySchedule.day}
                    </span>
                  </div>
                </div>

                {/* Events */}
                <div className={`md:w-1/2 ${dayIndex % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0 space-y-4`}>
                  {daySchedule.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <h3 
                        className="text-xl font-bold text-foreground mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">{event.speaker}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
