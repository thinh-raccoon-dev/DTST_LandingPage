import LotusIcon from '../ui/LotusIcon'
import Medal from '../ui/Medal'
import { PASSPORT_BADGES } from '../../data/passport'

/** Compact passport page used inside the feature card. Illustrative only. */
export default function PassportMini({ className = '' }) {
  const shown = PASSPORT_BADGES.slice(0, 6)
  return (
    <div
      aria-hidden="true"
      className={`relative w-[272px] rounded-[1.5rem] bg-cream p-4 shadow-float ring-1 ring-gold/40 ${className}`}
    >
      <div className="rounded-[1.1rem] border border-dashed border-gold/60 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LotusIcon variant="color" className="size-6" />
            <div className="leading-tight">
              <p className="text-[0.52rem] font-bold tracking-[0.2em] text-gold">HỘ CHIẾU SỐ</p>
              <p className="text-[0.78rem] font-extrabold text-forest-deep">Đồng Tháp</p>
            </div>
          </div>
          <span className="rounded-full bg-lotus-soft px-2 py-0.5 text-[0.52rem] font-bold tracking-wide text-lotus-deep uppercase">
            Bản mẫu
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {shown.map((badge) => (
            <div key={badge.id} className="flex justify-center">
              <Medal badge={badge} size={54} locked={!badge.unlocked} />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-[0.6rem] font-semibold">
            <span className="text-forest-deep">Tiến độ sưu tập</span>
            <span className="text-forest tabular-nums">4/6</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gold-soft">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-forest to-leaf" />
          </div>
        </div>
      </div>

      {/* stamp */}
      <span className="absolute -top-3 -right-3 grid size-16 rotate-12 place-items-center rounded-full border-2 border-dashed border-lotus-deep/70 bg-cream text-center text-[0.5rem] leading-tight font-extrabold tracking-wider text-lotus-deep">
        ĐÃ
        <br />
        GHI DẤU
      </span>
    </div>
  )
}
