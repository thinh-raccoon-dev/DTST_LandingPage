import { BookOpen, Check, Flag, MapPinCheck } from 'lucide-react'
import wetlandImage from '../../assets/images/wetland-boardwalk.webp'
import QrGlyph from '../ui/QrGlyph'

const MISSIONS = [
  { label: 'Khám phá câu chuyện địa phương', Icon: BookOpen, state: 'done' },
  { label: 'Hoàn thành thử thách', Icon: Flag, state: 'active' },
  { label: 'Ghi dấu điểm đến', Icon: MapPinCheck, state: 'todo' },
]

/** Phone scanning a QR code at a destination + sample mission card. */
export default function QrScanPhone({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="phone relative h-[400px] w-[212px]">
        <img
          src={wetlandImage}
          alt=""
          loading="lazy"
          decoding="async"
          width="1200"
          height="896"
          className="absolute inset-0 size-full object-cover object-[48%_center]"
        />
        <div className="absolute inset-0 bg-forest-ink/45" />

        <p className="absolute inset-x-0 top-9 text-center text-[0.68rem] font-semibold text-white">
          Đưa mã QR vào khung để quét
        </p>

        {/* scan frame */}
        <div className="absolute top-[74px] left-1/2 size-[132px] -translate-x-1/2">
          <div className="absolute inset-3 rounded-lg bg-white p-2 shadow-lg">
            <QrGlyph className="size-full text-forest-deep" />
          </div>
          {['top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-xl', 'top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-xl', 'bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-xl', 'bottom-0 right-0 border-r-[3px] border-b-[3px] rounded-br-xl'].map((pos) => (
            <span key={pos} className={`absolute size-6 border-lotus ${pos}`} />
          ))}
          <span
            className="absolute inset-x-2 top-2 h-0.5 animate-scan rounded-full bg-lotus shadow-[0_0_12px_2px_rgb(239_164_181/0.8)]"
            style={{ '--scan-distance': '112px' }}
          />
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 p-2.5 backdrop-blur">
          <p className="text-[0.56rem] font-semibold tracking-wide text-lotus-deep uppercase">Điểm tham gia · mẫu</p>
          <p className="text-[0.7rem] font-bold text-forest-deep">Lối đi rừng tràm</p>
        </div>
      </div>

      {/* Sample mission card */}
      <div className="absolute -right-24 bottom-10 w-[188px] rounded-2xl bg-white p-3.5 shadow-float ring-1 ring-line/70 sm:-right-28">
        <div className="flex items-center justify-between">
          <p className="text-[0.72rem] font-bold text-forest-deep">Nhiệm vụ</p>
          <span className="rounded-full bg-lotus-soft px-1.5 py-0.5 text-[0.52rem] font-bold tracking-wide text-lotus-deep uppercase">
            Mẫu
          </span>
        </div>
        <ul className="mt-2.5 space-y-2">
          {MISSIONS.map(({ label, Icon, state }) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full ${
                  state === 'done'
                    ? 'bg-forest text-white'
                    : state === 'active'
                      ? 'bg-lotus-soft text-lotus-deep ring-1 ring-lotus'
                      : 'bg-botanical text-muted'
                }`}
              >
                {state === 'done' ? <Check className="size-3" strokeWidth={3} /> : <Icon className="size-2.5" />}
              </span>
              <span className={`text-[0.62rem] leading-tight ${state === 'todo' ? 'text-muted-ink' : 'font-semibold text-forest-deep'}`}>
                {label}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-botanical">
          <div className="h-full w-1/3 rounded-full bg-forest" />
        </div>
      </div>
    </div>
  )
}
