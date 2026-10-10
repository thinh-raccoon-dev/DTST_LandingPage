/**
 * Stylised (non-geographic) route map used inside itinerary mockups.
 * Not a real map — decorative only.
 */
export default function MiniMap({ className = '' }) {
  return (
    <svg viewBox="0 0 200 110" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="110" fill="#EAF2E3" />
      {/* field parcels */}
      <g fill="#DCEBD4">
        <rect x="8" y="8" width="44" height="26" rx="5" />
        <rect x="132" y="66" width="56" height="34" rx="5" />
        <rect x="60" y="72" width="34" height="28" rx="5" />
        <rect x="150" y="10" width="40" height="22" rx="5" />
      </g>
      {/* river */}
      <path
        d="M-10 70 C 30 52, 60 88, 100 66 S 160 30, 215 44"
        fill="none"
        stroke="#B9DCCB"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* roads */}
      <path d="M0 22 H200 M118 0 V110" stroke="#FFFFFF" strokeWidth="4" />
      {/* route */}
      <path
        d="M30 88 C 52 60, 70 44, 96 40 S 140 52, 168 24"
        fill="none"
        stroke="#176B50"
        strokeWidth="3"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />
      {/* stops */}
      <g>
        <circle cx="30" cy="88" r="7" fill="#176B50" stroke="#fff" strokeWidth="2.5" />
        <circle cx="96" cy="40" r="7" fill="#176B50" stroke="#fff" strokeWidth="2.5" />
        <circle cx="168" cy="24" r="8" fill="#EFA4B5" stroke="#fff" strokeWidth="2.5" />
        <circle cx="168" cy="24" r="2.6" fill="#fff" />
      </g>
    </svg>
  )
}
