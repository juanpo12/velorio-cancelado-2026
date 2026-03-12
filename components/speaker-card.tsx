"use client"

import { User, Music, Wine } from "lucide-react"

interface Speaker {
  name: string
  role: string
  description: string
  days: string
  time: string
}

interface SpeakerCardProps {
  speaker: Speaker
  index: number
}

const icons = [User, Music, Wine]

export function SpeakerCard({ speaker, index }: SpeakerCardProps) {
  const Icon = icons[index % icons.length]
  
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image placeholder with gradient overlay */}
      <div className="relative h-64 bg-secondary overflow-hidden">
        {/* Circular pattern background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 200 200">
            {[...Array(8)].map((_, i) => (
              <circle 
                key={i} 
                cx="100" 
                cy="100" 
                r={20 + i * 15} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-primary"
              />
            ))}
          </svg>
        </div>
        
        {/* Icon representation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-16 h-16 text-primary" />
          </div>
        </div>
        
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
