import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            UBICACIÓN
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en nuestra iglesia para vivir juntos esta experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="relative h-80 lg:h-96 bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-primary/5">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
                {/* Grid lines */}
                {[...Array(10)].map((_, i) => (
                  <line 
                    key={`v-${i}`}
                    x1={i * 40} y1="0" x2={i * 40} y2="300" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-primary"
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <line 
                    key={`h-${i}`}
                    x1="0" y1={i * 40} x2="400" y2={i * 40} 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-primary"
                  />
                ))}
                {/* Roads */}
                <path d="M0,150 L400,150" stroke="currentColor" strokeWidth="8" className="text-primary/30" />
                <path d="M200,0 L200,300" stroke="currentColor" strokeWidth="8" className="text-primary/30" />
              </svg>
            </div>
            
            {/* Location marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45" />
              </div>
            </div>

            {/* Church label */}
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <p 
                className="font-bold text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Cristo la Solución
              </p>
              <p className="text-sm text-muted-foreground">Ministerio</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 
                  className="text-xl font-bold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Dirección
                </h3>
                <p className="text-muted-foreground">
                  Av. Principal 1234<br />
                  Ciudad, País
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 
                  className="text-xl font-bold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Teléfono
                </h3>
                <p className="text-muted-foreground">+54 9 11 1234-5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 
                  className="text-xl font-bold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Email
                </h3>
                <p className="text-muted-foreground">info@cristolasolucion.com</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Navigation className="w-5 h-5" />
              CÓMO LLEGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
