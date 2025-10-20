import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export default function Logo({ className = "", width = 200, height = 60, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 60"
        className="fill-current max-w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bridge Icon */}
        <g>
          {/* Bridge Arches */}
          <path
            d="M20 45 Q35 25 50 45 Q65 25 80 45"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-blue-600"
          />
          
          {/* Bridge Supports */}
          <line x1="35" y1="45" x2="35" y2="50" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
          <line x1="65" y1="45" x2="65" y2="50" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
          
          {/* Bridge Base */}
          <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="3" className="text-blue-600" />
          
          {/* Heart Symbol (representing care) */}
          <path
            d="M45 30 C45 27, 48 25, 50 27 C52 25, 55 27, 55 30 C55 33, 50 38, 50 38 C50 38, 45 33, 45 30 Z"
            fill="currentColor"
            className="text-red-500"
          />
          
          {/* Golden accent on bridge */}
          <circle cx="50" cy="42" r="2" fill="currentColor" className="text-yellow-500" />
        </g>
        
        {/* Company Text */}
        {showText && (
          <g>
            <text
              x="100"
              y="25"
              fontSize="18"
              fontWeight="bold"
              fill="currentColor"
              fontFamily="Arial, sans-serif"
            >
              GoldenBridge
            </text>
            <text
              x="100"
              y="45"
              fontSize="14"
              fill="currentColor"
              fontFamily="Arial, sans-serif"
            >
              Care Services
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

// Icon-only version for smaller spaces
export function LogoIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bridge Icon */}
      <g transform="translate(5, 5)">
        {/* Bridge Arches */}
        <path
          d="M5 35 Q17.5 15 30 35 Q42.5 15 55 35"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-blue-600"
        />
        
        {/* Bridge Supports */}
        <line x1="17.5" y1="35" x2="17.5" y2="42" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
        <line x1="42.5" y1="35" x2="42.5" y2="42" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
        
        {/* Bridge Base */}
        <line x1="0" y1="42" x2="60" y2="42" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
        
        {/* Heart Symbol */}
        <path
          d="M25 20 C25 17.5, 27.5 15, 30 17 C32.5 15, 35 17.5, 35 20 C35 22.5, 30 27.5, 30 27.5 C30 27.5, 25 22.5, 25 20 Z"
          fill="currentColor"
          className="text-red-500"
        />
        
        {/* Golden accent */}
        <circle cx="30" cy="32" r="1.5" fill="currentColor" className="text-yellow-500" />
      </g>
    </svg>
  );
}