import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '32px',
        }}
      >
        {/* Bridge and heart logo */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bridge arch */}
          <path
            d="M20 90 Q60 40 100 90"
            stroke="white"
            strokeWidth="8"
            fill="none"
          />
          {/* Bridge supports */}
          <line x1="40" y1="90" x2="40" y2="100" stroke="white" strokeWidth="6" />
          <line x1="80" y1="90" x2="80" y2="100" stroke="white" strokeWidth="6" />
          {/* Bridge base */}
          <line x1="10" y1="100" x2="110" y2="100" stroke="white" strokeWidth="8" />
          {/* Heart symbol for care */}
          <path
            d="M50 60 C50 50, 55 45, 60 50 C65 45, 70 50, 70 60 C70 70, 60 80, 60 80 C60 80, 50 70, 50 60 Z"
            fill="white"
          />
          {/* Golden accent dots */}
          <circle cx="60" cy="25" r="4" fill="#fbbf24" />
          <circle cx="30" cy="75" r="3" fill="#fbbf24" />
          <circle cx="90" cy="75" r="3" fill="#fbbf24" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}