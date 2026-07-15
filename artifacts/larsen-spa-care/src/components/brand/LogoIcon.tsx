import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Larsen Spa Care isometric hot tub icon (inline SVG).
 * Source master: brand/logo-icon.svg.
 *
 * Uses useId() so the water gradient gets a unique id per instance —
 * the master file's static id ("wA") would collide when the icon is
 * rendered more than once on the same page (e.g. navbar + footer).
 */
export function LogoIcon({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="34 58 212 180"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Larsen Spa Care logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#bff3f1" />
          <stop offset="45%" stopColor="#7ad9d6" />
          <stop offset="100%" stopColor="#3bbfbb" />
        </linearGradient>
      </defs>
      <path d="M140,230 L42,178 L42,160 L140,212 L238,160 L238,178 Z" fill="#0d1319" stroke="#0d1319" strokeWidth="4" strokeLinejoin="round" />
      <path d="M140,212 L42,160 L42,142 L140,194 L238,142 L238,160 Z" fill="#1A202D" stroke="#0d1319" strokeWidth="4" strokeLinejoin="round" />
      <path d="M140,194 L42,142 L42,124 L140,176 L238,124 L238,142 Z" fill="#2a3648" stroke="#0d1319" strokeWidth="4" strokeLinejoin="round" />
      <path d="M140,176 L42,124 L42,112 L140,164 L238,112 L238,124 Z" fill="#f0f2f5" stroke="#0d1319" strokeWidth="4" strokeLinejoin="round" />
      <path d="M140,164 L52,118 L52,112 L140,158 L228,112 L228,118 Z" fill="#1A202D" stroke="#0d1319" strokeWidth="3" strokeLinejoin="round" />
      <path d="M140,158 L52,112 L140,66 L228,112 Z" fill={`url(#${gradientId})`} stroke="#0d1319" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
