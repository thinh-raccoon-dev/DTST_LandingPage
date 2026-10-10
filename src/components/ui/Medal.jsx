import { Lock } from 'lucide-react'

/**
 * Collectible passport badge. Visual styling lives in `.medal` (components.css);
 * each badge supplies its own gradient + ink colors.
 */
export default function Medal({ badge, size = 64, locked = false, className = '' }) {
  const { Icon, colors } = badge
  return (
    <span className={`relative inline-grid shrink-0 ${className}`} style={{ width: size, height: size }}>
      <span
        className={`medal ${locked ? 'medal--locked' : ''}`}
        style={{ '--medal-a': colors.a, '--medal-b': colors.b, '--medal-ink': colors.ink }}
        aria-hidden="true"
      >
        <Icon strokeWidth={2} />
      </span>
      {locked ? (
        <span className="absolute -right-0.5 -bottom-0.5 grid size-[38%] max-h-7 max-w-7 place-items-center rounded-full bg-forest-deep text-cream ring-2 ring-cream">
          <Lock className="size-[55%]" strokeWidth={2.5} aria-hidden="true" />
        </span>
      ) : null}
    </span>
  )
}
