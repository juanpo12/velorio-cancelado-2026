interface CrownOfThornsProps {
  className?: string
}

export function CrownOfThorns({ className }: CrownOfThornsProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      aria-label="Corona de espinas con flores"
    >
      {/* Crown of Thorns */}
      <defs>
        <linearGradient id="thornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#6B5344" />
          <stop offset="100%" stopColor="#4A3728" />
        </linearGradient>
      </defs>
      
      {/* Main crown circle - made of intertwined branches */}
      <g fill="none" stroke="url(#thornGradient)" strokeWidth="3" strokeLinecap="round">
        {/* Outer circle branches */}
        <path d="M100,30 Q130,25 150,50 T170,100 T150,150 T100,170 T50,150 T30,100 T50,50 T100,30" />
        <path d="M95,35 Q125,30 145,55 T165,100 T145,145 T95,165 T55,145 T35,100 T55,55 T95,35" />
        <path d="M105,33 Q135,28 155,53 T175,100 T155,147 T105,167 T55,147 T33,100 T53,53 T105,33" />
        
        {/* Thorns pointing outward */}
        <line x1="100" y1="30" x2="100" y2="18" strokeWidth="2" />
        <line x1="150" y1="50" x2="160" y2="40" strokeWidth="2" />
        <line x1="170" y1="100" x2="182" y2="100" strokeWidth="2" />
        <line x1="150" y1="150" x2="160" y2="160" strokeWidth="2" />
        <line x1="100" y1="170" x2="100" y2="182" strokeWidth="2" />
        <line x1="50" y1="150" x2="40" y2="160" strokeWidth="2" />
        <line x1="30" y1="100" x2="18" y2="100" strokeWidth="2" />
        <line x1="50" y1="50" x2="40" y2="40" strokeWidth="2" />
        
        {/* Additional thorns */}
        <line x1="125" y1="35" x2="130" y2="22" strokeWidth="2" />
        <line x1="165" y1="75" x2="178" y2="70" strokeWidth="2" />
        <line x1="165" y1="125" x2="178" y2="130" strokeWidth="2" />
        <line x1="125" y1="165" x2="130" y2="178" strokeWidth="2" />
        <line x1="75" y1="165" x2="70" y2="178" strokeWidth="2" />
        <line x1="35" y1="125" x2="22" y2="130" strokeWidth="2" />
        <line x1="35" y1="75" x2="22" y2="70" strokeWidth="2" />
        <line x1="75" y1="35" x2="70" y2="22" strokeWidth="2" />
      </g>
      
      {/* Intertwined inner details */}
      <g fill="none" stroke="#5A4535" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <path d="M70,45 Q85,60 75,80" />
        <path d="M130,45 Q115,60 125,80" />
        <path d="M155,70 Q140,85 160,95" />
        <path d="M155,130 Q140,115 160,105" />
        <path d="M130,155 Q115,140 125,120" />
        <path d="M70,155 Q85,140 75,120" />
        <path d="M45,130 Q60,115 40,105" />
        <path d="M45,70 Q60,85 40,95" />
      </g>

      {/* Leaves/Vines */}
      <g fill="#4a6b47">
        {/* Top leaves */}
        <ellipse cx="100" cy="25" rx="8" ry="4" transform="rotate(-20 100 25)" />
        <ellipse cx="90" cy="28" rx="6" ry="3" transform="rotate(15 90 28)" />
        
        {/* Right side leaves */}
        <ellipse cx="165" cy="85" rx="8" ry="4" transform="rotate(60 165 85)" />
        <ellipse cx="168" cy="115" rx="6" ry="3" transform="rotate(-45 168 115)" />
        
        {/* Bottom leaves */}
        <ellipse cx="115" cy="168" rx="7" ry="3" transform="rotate(25 115 168)" />
        <ellipse cx="85" cy="165" rx="6" ry="3" transform="rotate(-15 85 165)" />
        
        {/* Left side leaves */}
        <ellipse cx="35" cy="90" rx="7" ry="3" transform="rotate(-60 35 90)" />
        <ellipse cx="38" cy="120" rx="5" ry="2.5" transform="rotate(50 38 120)" />
      </g>

      {/* White Flowers */}
      <g>
        {/* Flower 1 - Top right */}
        <g transform="translate(135, 40)">
          <circle cx="0" cy="0" r="3" fill="#3d5c3a" />
          <ellipse cx="0" cy="-8" rx="4" ry="7" fill="white" />
          <ellipse cx="7" cy="-4" rx="4" ry="7" fill="white" transform="rotate(72)" />
          <ellipse cx="5" cy="6" rx="4" ry="7" fill="white" transform="rotate(144)" />
          <ellipse cx="-5" cy="6" rx="4" ry="7" fill="white" transform="rotate(216)" />
          <ellipse cx="-7" cy="-4" rx="4" ry="7" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="4" fill="#FFE066" />
        </g>
        
        {/* Flower 2 - Right */}
        <g transform="translate(172, 95)">
          <circle cx="0" cy="0" r="2.5" fill="#3d5c3a" />
          <ellipse cx="0" cy="-6" rx="3" ry="5" fill="white" />
          <ellipse cx="5" cy="-3" rx="3" ry="5" fill="white" transform="rotate(72)" />
          <ellipse cx="4" cy="5" rx="3" ry="5" fill="white" transform="rotate(144)" />
          <ellipse cx="-4" cy="5" rx="3" ry="5" fill="white" transform="rotate(216)" />
          <ellipse cx="-5" cy="-3" rx="3" ry="5" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="3" fill="#FFE066" />
        </g>
        
        {/* Flower 3 - Bottom right */}
        <g transform="translate(145, 155)">
          <circle cx="0" cy="0" r="2" fill="#3d5c3a" />
          <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="white" />
          <ellipse cx="4" cy="-2" rx="2.5" ry="4" fill="white" transform="rotate(72)" />
          <ellipse cx="3" cy="4" rx="2.5" ry="4" fill="white" transform="rotate(144)" />
          <ellipse cx="-3" cy="4" rx="2.5" ry="4" fill="white" transform="rotate(216)" />
          <ellipse cx="-4" cy="-2" rx="2.5" ry="4" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2.5" fill="#FFE066" />
        </g>
        
        {/* Flower 4 - Bottom */}
        <g transform="translate(100, 175)">
          <circle cx="0" cy="0" r="3" fill="#3d5c3a" />
          <ellipse cx="0" cy="-7" rx="3.5" ry="6" fill="white" />
          <ellipse cx="6" cy="-3" rx="3.5" ry="6" fill="white" transform="rotate(72)" />
          <ellipse cx="4" cy="5" rx="3.5" ry="6" fill="white" transform="rotate(144)" />
          <ellipse cx="-4" cy="5" rx="3.5" ry="6" fill="white" transform="rotate(216)" />
          <ellipse cx="-6" cy="-3" rx="3.5" ry="6" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="3.5" fill="#FFE066" />
        </g>
        
        {/* Flower 5 - Left */}
        <g transform="translate(28, 100)">
          <circle cx="0" cy="0" r="2.5" fill="#3d5c3a" />
          <ellipse cx="0" cy="-6" rx="3" ry="5" fill="white" />
          <ellipse cx="5" cy="-3" rx="3" ry="5" fill="white" transform="rotate(72)" />
          <ellipse cx="4" cy="5" rx="3" ry="5" fill="white" transform="rotate(144)" />
          <ellipse cx="-4" cy="5" rx="3" ry="5" fill="white" transform="rotate(216)" />
          <ellipse cx="-5" cy="-3" rx="3" ry="5" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="3" fill="#FFE066" />
        </g>
        
        {/* Flower 6 - Top left */}
        <g transform="translate(55, 45)">
          <circle cx="0" cy="0" r="2" fill="#3d5c3a" />
          <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="white" />
          <ellipse cx="4" cy="-2" rx="2.5" ry="4" fill="white" transform="rotate(72)" />
          <ellipse cx="3" cy="4" rx="2.5" ry="4" fill="white" transform="rotate(144)" />
          <ellipse cx="-3" cy="4" rx="2.5" ry="4" fill="white" transform="rotate(216)" />
          <ellipse cx="-4" cy="-2" rx="2.5" ry="4" fill="white" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2.5" fill="#FFE066" />
        </g>
      </g>
    </svg>
  )
}
