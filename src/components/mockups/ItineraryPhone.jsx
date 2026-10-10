import { Camera, Clock3, Flower2, Leaf, MapPin, Trees, Users } from 'lucide-react'
import MiniMap from '../ui/MiniMap'

const STOPS = [
  { time: '06:30', place: 'Đồng sen Tháp Mười', meta: 'Ngắm sen · 1,5 giờ', Icon: Flower2 },
  { time: '10:00', place: 'Vườn quốc gia Tràm Chim', meta: 'Sinh thái · 3 giờ', Icon: Trees },
  { time: '15:30', place: 'Làng hoa Sa Đéc', meta: 'Văn hóa · 2 giờ', Icon: Camera },
]

/** Mobile itinerary interface — illustrative sample data only. */
export default function ItineraryPhone({ className = '' }) {
  return (
    <div className={`phone w-[232px] ${className}`} aria-hidden="true">
      <div className="bg-cream px-4 pt-8 pb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] font-medium text-muted-ink">Lịch trình của bạn</p>
            <p className="text-[0.9rem] font-bold text-forest-deep">2 ngày ở Đồng Tháp</p>
          </div>
          <span className="grid size-7 place-items-center rounded-full bg-forest text-white">
            <Users className="size-3.5" />
          </span>
        </div>

        <div className="mt-3 flex gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-forest px-2 py-0.5 text-[0.58rem] font-semibold text-white">
            <Leaf className="size-2.5" /> Thiên nhiên
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[0.58rem] font-semibold text-forest ring-1 ring-line">
            Gia đình
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[0.58rem] font-semibold text-forest ring-1 ring-line">
            Nhiếp ảnh
          </span>
        </div>

        <div className="mt-3 h-[84px] overflow-hidden rounded-xl ring-1 ring-line">
          <MiniMap className="size-full" />
        </div>

        <div className="mt-3 flex rounded-full bg-botanical p-0.5 text-[0.6rem] font-semibold">
          <span className="flex-1 rounded-full bg-white py-1 text-center text-forest shadow-sm">Ngày 1</span>
          <span className="flex-1 py-1 text-center text-muted-ink">Ngày 2</span>
        </div>

        <ol className="relative mt-3 space-y-2">
          <span className="absolute top-3 bottom-3 left-[13px] w-px bg-leaf/50" />
          {STOPS.map(({ time, place, meta, Icon }, index) => (
            <li key={time} className="relative flex items-start gap-2.5 rounded-xl bg-white p-2 ring-1 ring-line/80">
              <span
                className={`relative grid size-[18px] shrink-0 place-items-center rounded-full ${
                  index === 0 ? 'bg-lotus text-white' : 'bg-forest text-white'
                }`}
              >
                <Icon className="size-2.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-1">
                  <span className="truncate text-[0.66rem] font-bold text-forest-deep">{place}</span>
                  <span className="text-[0.58rem] font-semibold text-forest tabular-nums">{time}</span>
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-[0.56rem] text-muted-ink">
                  <Clock3 className="size-2.5" /> {meta}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-3 flex items-center gap-1.5 text-[0.56rem] text-muted-ink">
          <MapPin className="size-2.5 text-forest" /> Dữ liệu minh họa, không phải gợi ý thực tế
        </div>
      </div>
    </div>
  )
}
