/**
 * Decorative QR-style glyph (NOT a scannable code — purely illustrative).
 * Pattern is generated once from a fixed seed so it is stable between renders.
 */
const SIZE = 21

function buildPath() {
  let seed = 7
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }

  const inFinder = (x, y) => {
    const corners = [
      [0, 0],
      [SIZE - 7, 0],
      [0, SIZE - 7],
    ]
    return corners.some(([cx, cy]) => x >= cx - 1 && x <= cx + 7 && y >= cy - 1 && y <= cy + 7)
  }

  let d = ''
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      if (!inFinder(x, y) && rand() > 0.52) d += `M${x} ${y}h1v1h-1z`
    }
  }
  return d
}

const DATA_PATH = buildPath()
const FINDERS = [
  [0, 0],
  [SIZE - 7, 0],
  [0, SIZE - 7],
]

export default function QrGlyph({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`} className={className} aria-hidden="true" shapeRendering="crispEdges">
      <path d={DATA_PATH} fill={color} />
      {FINDERS.map(([x, y]) => (
        <g key={`${x}-${y}`} fill="none" stroke={color}>
          <rect x={x + 0.5} y={y + 0.5} width="6" height="6" strokeWidth="1" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill={color} stroke="none" />
        </g>
      ))}
    </svg>
  )
}
