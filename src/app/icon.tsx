import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        {/* Bridge symbol */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'white' }}
        >
          {/* Bridge arch */}
          <path
            d="M4 18 Q12 8 20 18"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Bridge supports */}
          <line x1="8" y1="18" x2="8" y2="20" stroke="white" strokeWidth="2" />
          <line x1="16" y1="18" x2="16" y2="20" stroke="white" strokeWidth="2" />
          {/* Bridge base */}
          <line x1="2" y1="20" x2="22" y2="20" stroke="white" strokeWidth="2" />
          {/* Heart symbol for care */}
          <path
            d="M10 12 C10 10, 11.5 9, 12 10 C12.5 9, 14 10, 14 12 C14 14, 12 16, 12 16 C12 16, 10 14, 10 12 Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}