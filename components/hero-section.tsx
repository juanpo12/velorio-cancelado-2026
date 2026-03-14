import { CrownOfThorns } from "./crown-of-thorns"

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d5c3a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Crown of Thorns */}
        <div className="flex justify-center mb-8">
          <CrownOfThorns className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80" />
        </div>

        {/* Main Title */}
        <h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          VELORIO
          <br />
          <span className="text-primary">CANCELADO</span>
        </h1>

        {/* Date */}
        <div className="mt-8 mb-12">
          <div className="inline-block border-t-2 border-b-2 border-primary py-3 px-8">
            <p 
              className="text-xl sm:text-2xl md:text-3xl text-primary font-medium tracking-widest"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              2 AL 5 DE ABRIL
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Celebramos la resurrección de Cristo. La tumba está vacía, 
          la muerte ha sido vencida. ¡Él vive!
        </p>

        {/* CTA Button */}
        <a
          href="#programa"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors text-lg"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          VER PROGRAMA
        </a>
      </div>
    </section>
  )
}
