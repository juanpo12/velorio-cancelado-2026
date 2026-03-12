import { Facebook, Instagram, Youtube, Heart } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Ministry */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>C</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-80">Ministerio</p>
                <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Cristo la Solución</p>
              </div>
            </div>
          </div>

          {/* Event */}
          <div className="text-center">
            <h3 
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              VELORIO CANCELADO
            </h3>
            <p className="opacity-80">2 al 5 de Abril</p>
            <p className="text-sm opacity-60 mt-2">¡Cristo ha resucitado!</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80 mb-3">Síguenos en redes</p>
            <div className="flex items-center justify-center md:justify-end gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
            <p>© 2025 Cristo la Solución. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 fill-current" /> para la gloria de Dios
            </p>
          </div>
        </div>
      </div>

      {/* Bible verse banner */}
      <div className="bg-accent py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary-foreground italic">
            {"\"No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor.\""}
          </p>
          <p className="text-primary-foreground/80 text-sm mt-1">Mateo 28:6</p>
        </div>
      </div>
    </footer>
  )
}
