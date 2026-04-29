export function HeroIllustration() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1", maxWidth: "520px" }}>
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Viola → navy gradient for arcs */}
          <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B59AD4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#E6D4F0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#112240" stopOpacity="0.15" />
          </linearGradient>

          {/* Radial fade for the central glow */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5EDFA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F7F4EA" stopOpacity="0" />
          </radialGradient>

          {/* Basil blob gradient */}
          <linearGradient id="basil-grad" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#C4D4B9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4A7C59" stopOpacity="0.12" />
          </linearGradient>

          {/* Saffron warm glow */}
          <radialGradient id="saffron-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8C26B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E8C26B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle center glow */}
        <circle cx="280" cy="240" r="200" fill="url(#center-glow)" />

        {/* Concentric arcs — the "bridge" motif */}
        <circle cx="280" cy="240" r="180" stroke="url(#arc-grad)" strokeWidth="1" fill="none" opacity="0.7" />
        <circle cx="280" cy="240" r="140" stroke="url(#arc-grad)" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="280" cy="240" r="100" stroke="url(#arc-grad)" strokeWidth="1" fill="none" opacity="0.35" />
        <circle cx="280" cy="240" r="60" stroke="url(#arc-grad)" strokeWidth="1.5" fill="none" opacity="0.25" />

        {/* Partial arc sweeps — the asymmetric gesture */}
        <path
          d="M 280 60 A 180 180 0 0 1 460 240"
          stroke="#B59AD4"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
          strokeLinecap="round"
        />
        <path
          d="M 100 240 A 180 180 0 0 1 280 420"
          stroke="#112240"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
          strokeLinecap="round"
        />
        <path
          d="M 320 108 A 140 140 0 0 1 420 240"
          stroke="#E6D4F0"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />

        {/* Basil organic blob — top-left */}
        <ellipse cx="140" cy="130" rx="70" ry="50" fill="url(#basil-grad)" transform="rotate(-15, 140, 130)" />

        {/* Smaller basil accent */}
        <ellipse cx="380" cy="380" rx="40" ry="28" fill="#C4D4B9" opacity="0.15" transform="rotate(25, 380, 380)" />

        {/* Saffron warm glow — bottom */}
        <circle cx="180" cy="400" r="60" fill="url(#saffron-glow)" />

        {/* Pomodoro focal circle — the tomato mark, abstracted */}
        <circle cx="280" cy="240" r="24" fill="#E8806B" opacity="0.85" />
        <circle cx="280" cy="240" r="24" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.35" />

        {/* Small pomodoro satellite */}
        <circle cx="390" cy="150" r="6" fill="#E8806B" opacity="0.5" />

        {/* Dot grid — data/intelligence texture */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => {
            const x = 120 + col * 40;
            const y = 100 + row * 40;
            const dist = Math.sqrt((x - 280) ** 2 + (y - 240) ** 2);
            // Fade dots near center and far edges
            const opacity = dist < 50 ? 0 : dist > 180 ? 0.06 : 0.12;
            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r="1.5"
                fill="#8A93A4"
                opacity={opacity}
              />
            );
          })
        )}

        {/* Connecting lines — subtle node network */}
        <line x1="280" y1="240" x2="390" y2="150" stroke="#B59AD4" strokeWidth="0.5" opacity="0.2" />
        <line x1="280" y1="240" x2="180" y2="320" stroke="#112240" strokeWidth="0.5" opacity="0.12" />
        <line x1="280" y1="240" x2="360" y2="340" stroke="#8A93A4" strokeWidth="0.5" opacity="0.1" />

        {/* Viola accent node */}
        <circle cx="180" cy="320" r="4" fill="#B59AD4" opacity="0.5" />
        <circle cx="360" cy="340" r="3" fill="#8A93A4" opacity="0.3" />
      </svg>
    </div>
  );
}
