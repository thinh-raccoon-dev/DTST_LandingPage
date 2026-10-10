import LotusIcon from './LotusIcon'

/** Brand lockup: lotus mark + "ĐỒNG THÁP / SMART TRAVEL" wordmark. */
export default function BrandLogo({ onDark = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl ${
          onDark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-forest shadow-[0_6px_16px_-8px_rgb(23_107_80/0.8)]'
        }`}
      >
        <LotusIcon variant="color" className="size-7" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-extrabold tracking-[0.02em] ${
            onDark ? 'text-cream' : 'text-forest-deep'
          }`}
        >
          ĐỒNG THÁP
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold tracking-[0.34em] ${
            onDark ? 'text-lotus' : 'text-forest'
          }`}
        >
          SMART TRAVEL
        </span>
      </span>
    </span>
  )
}
