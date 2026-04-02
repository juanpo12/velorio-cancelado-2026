import { MessageCircle } from "lucide-react"

export function ConfessionSection() {
  return (
    <section id="confesion" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4 uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Confesión de Fe
        </h2>
        <div className="w-24 h-1 bg-primary/30 mx-auto mb-8" />

        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          ¿Querés aceptar a Jesús en tu corazón?
        </h3>

        <div className="bg-secondary/30 rounded-2xl p-8 max-w-3xl mx-auto mb-10 border border-border shadow-sm">
          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed text-justify md:text-center">
            "Señor Jesús, me acerco a ti reconociendo que te necesito. Dejo atrás todo lo que arrastraba y confío en que vos me salvaste en la cruz. Te entrego mi corazón y creo que Jesucristo es el Hijo de Dios, que entregó su vida y murió en la cruz por mí, y que resucitó al tercer día para darme salvación y vida eterna. Señor Jesús, te pido que entres en mi corazón; te recibo hoy como mi único Salvador y te reconozco como mi Señor. Anota mi nombre en el libro de la vida. Te lo pido en el nombre de Jesús. Amén."
          </p>
        </div>

        <a
          href="https://wa.me/5491156600422?text=Hola,%20hice%20la%20confesi%C3%B3n%20de%20fe%20y%20quiero%20contactarme%20con%20alguien"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-lg">CONOCE MÁS</span>
        </a>
      </div>
    </section>
  )
}
