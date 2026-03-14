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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7526004077745!2d-58.56511212445445!3d-34.68619297292483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc623af501339%3A0xc605a8a195d8ce69!2sAv.%20Brig.%20Gral.%20Juan%20Manuel%20de%20Rosas%204357%2C%20B1754FVB%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1757106329998!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Cristo La Solución"
            />
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
                  Juan Manuel de Rosas 4357<br />
                  San Justo, Buenos Aires
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
                <p className="text-muted-foreground">+54 9 11 2864-8642</p>
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
                <p className="text-muted-foreground">oficinasclsj@gmail.com</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.google.com/maps/dir//Av.+Brig.+Gral.+Juan+Manuel+de+Rosas+4357,+B1754FVB+San+Justo,+Provincia+de+Buenos+Aires,+Argentina"
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
