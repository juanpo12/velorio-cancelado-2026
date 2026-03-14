"use client"

import Image, { StaticImageData } from "next/image"

interface Speaker {
  name: string
  role: string
  description: string
  days: string
  time: string
  image: StaticImageData
  imagePosition?: string
}

interface SpeakerCardProps {
  speaker: Speaker
  index: number
}

export function SpeakerCard({ speaker, index }: SpeakerCardProps) {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Speaker image */}
      <div className="relative h-120 bg-secondary overflow-hidden">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: speaker.imagePosition || '' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-2xl font-bold text-foreground mb-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {speaker.name}
        </h3>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
          {speaker.role}
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          {speaker.description}
        </p>

        {/* Schedule info */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-lg font-semibold text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {speaker.days}
              </p>
              <p className="text-sm text-muted-foreground">{speaker.time}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                {index + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
