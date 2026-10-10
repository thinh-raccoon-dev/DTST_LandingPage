import { Check, MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Medal from './ui/Medal'
import MiniMap from './ui/MiniMap'
import QrGlyph from './ui/QrGlyph'
import { PASSPORT_BADGES } from '../data/passport'
import { SECTION_IDS } from '../data/navigation'

/* ---- Compact step visuals (decorative, aria-hidden) ------------------- */

function InterestVisual() {
  const chips = [
    { label: 'Thiên nhiên', on: true },
    { label: 'Văn hóa', on: false },
    { label: 'Ẩm thực', on: true },
    { label: 'Gia đình', on: true },
    { label: 'Nhiếp ảnh', on: false },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-4">
      <div className="flex flex-wrap gap-1.5">
        {chips.map(({ label, on }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${
              on ? 'bg-forest text-white' : 'bg-white text-forest ring-1 ring-line'
            }`}
          >
            {on ? <Check className="size-3" strokeWidth={3} /> : null}
            {label}
          </span>
        ))}
      </div>
      <div className="flex gap-1.5 text-[0.66rem] font-semibold">
        <span className="rounded-lg bg-lotus-soft px-2 py-1 text-lotus-deep">2 ngày</span>
        <span className="rounded-lg bg-white px-2 py-1 text-ink ring-1 ring-line">Đi cùng gia đình</span>
      </div>
    </div>
  )
}

function ItineraryVisual() {
  return (
    <div className="flex h-full gap-3 p-3">
      <div className="w-[46%] overflow-hidden rounded-xl ring-1 ring-line">
        <MiniMap className="size-full" />
      </div>
      <ul className="flex flex-1 flex-col justify-center gap-1.5">
        {['Đồng sen', 'Rừng tràm', 'Làng hoa'].map((name, i) => (
          <li key={name} className="flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-[0.66rem] font-semibold text-forest-deep ring-1 ring-line">
            <MapPin className={`size-3 ${i === 2 ? 'text-lotus-deep' : 'text-forest'}`} />
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ScanVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-4">
      <div className="relative size-[88px]">
        <div className="absolute inset-2 rounded-md bg-white p-1.5 ring-1 ring-line">
          <QrGlyph className="size-full text-forest-deep" />
        </div>
        {['top-0 left-0 border-t-2 border-l-2 rounded-tl-lg', 'top-0 right-0 border-t-2 border-r-2 rounded-tr-lg', 'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg', 'bottom-0 right-0 border-r-2 border-b-2 rounded-br-lg'].map((pos) => (
          <span key={pos} className={`absolute size-4 border-forest ${pos}`} />
        ))}
      </div>
      <div className="space-y-1.5">
        <span className="block rounded-lg bg-forest px-2.5 py-1 text-[0.66rem] font-semibold text-white">Mở nhiệm vụ</span>
        <span className="block rounded-lg bg-white px-2.5 py-1 text-[0.66rem] font-semibold text-forest ring-1 ring-line">Đọc câu chuyện</span>
      </div>
    </div>
  )
}

function BadgeVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 p-4">
      <div className="flex -space-x-2">
        {PASSPORT_BADGES.slice(0, 4).map((badge) => (
          <Medal key={badge.id} badge={badge} size={46} locked={!badge.unlocked} />
        ))}
      </div>
      <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-[0.66rem] font-semibold text-[#7a5a1e]">
        +1 huy hiệu mới
      </span>
    </div>
  )
}

const STEPS = [
  {
    title: 'Chọn sở thích của bạn',
    description:
      'Chọn chủ đề yêu thích, thời gian chuyến đi và nhu cầu đồng hành. Hệ thống sử dụng thông tin đó để gợi ý hành trình phù hợp.',
    Visual: InterestVisual,
  },
  {
    title: 'Nhận lịch trình gợi ý',
    description:
      'Khám phá danh sách điểm đến được đề xuất và xem lịch trình tổng quan để chủ động chuẩn bị cho chuyến đi.',
    Visual: ItineraryVisual,
  },
  {
    title: 'Đến nơi, quét mã, khám phá',
    description:
      'Tại điểm đến có hỗ trợ, quét mã QR để đọc thông tin, tham gia nhiệm vụ và ghi nhận trải nghiệm của bạn.',
    Visual: ScanVisual,
  },
  {
    title: 'Nhận huy hiệu, lưu dấu kỷ niệm',
    description:
      'Thu thập huy hiệu theo điều kiện hoàn thành nhiệm vụ và xem lại các dấu mốc đáng nhớ trong Hộ chiếu trải nghiệm số.',
    Visual: BadgeVisual,
  },
]

export default function HowItWorksSection() {
  return (
    <section id={SECTION_IDS.howItWorks} aria-labelledby="how-title" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="how-title"
          eyebrow="CHỈ VỚI 4 BƯỚC"
          title="Từ lên kế hoạch đến lưu dấu hành trình"
          description="Bắt đầu thật đơn giản. Mỗi bước mở ra một điều thú vị mới."
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {/* horizontal connector (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px border-t-2 border-dashed border-leaf/60 lg:block"
          />

          {STEPS.map(({ title, description, Visual }, index) => (
            <li
              key={title}
              className="reveal relative pl-16 sm:pl-0"
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              {/* vertical connector (mobile) */}
              {index < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-14 -bottom-10 left-6 w-px border-l-2 border-dashed border-leaf/60 sm:hidden"
                />
              ) : null}

              <div className="absolute top-0 left-0 sm:relative sm:flex sm:justify-start lg:justify-center">
                <span className="relative grid size-12 place-items-center rounded-full bg-forest text-base font-bold text-white shadow-[0_0_0_6px_var(--color-cream)] tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div
                aria-hidden="true"
                className="mt-0 h-[136px] overflow-hidden rounded-2xl bg-botanical ring-1 ring-line sm:mt-6"
              >
                <Visual />
              </div>

              <h3 className="mt-5 text-lg leading-snug font-bold">
                <span className="sr-only">Bước {index + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/85">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
