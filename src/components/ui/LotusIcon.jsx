/**
 * Lotus glyph used for the brand mark, badges and decoration.
 * `variant="color"` renders brand colors; `"mono"` inherits currentColor.
 */
export default function LotusIcon({ variant = 'mono', className = '', title, ...props }) {
  const isColor = variant === 'color'
  const center = isColor ? '#EFA4B5' : 'currentColor'
  const side = isColor ? '#F7CBD5' : 'currentColor'
  const water = isColor ? '#8EBF83' : 'currentColor'

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M24 5c6 7 8.5 14 8.5 21S28.5 37.5 24 39.5C19.5 37.5 15.5 33 15.5 26S18 12 24 5Z"
        fill={center}
      />
      <path
        d="M20.5 39.5C12 37.6 5 31.5 3.8 21.5c8.4 0 14.2 4.3 17.6 10.5Z"
        fill={side}
        opacity={isColor ? 1 : 0.78}
      />
      <path
        d="M27.5 39.5c8.5-1.9 15.5-8 16.7-18-8.4 0-14.2 4.3-17.6 10.5Z"
        fill={side}
        opacity={isColor ? 1 : 0.78}
      />
      <path
        d="M7 42.5c9 4.6 25 4.6 34 0"
        fill="none"
        stroke={water}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
