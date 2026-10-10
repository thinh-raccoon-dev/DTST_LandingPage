import { CalendarRange, QrCode, Stamp } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import ItineraryPhone from './mockups/ItineraryPhone'
import QrScanPhone from './mockups/QrScanPhone'
import PassportMini from './mockups/PassportMini'
import { SECTION_IDS } from '../data/navigation'

const FEATURES = [
  {
    id: 'smart-itinerary',
    label: '01 / SMART ITINERARY',
    title: 'Lịch trình riêng, hành trình chất',
    description:
      'Thích khám phá thiên nhiên, tìm hiểu văn hóa hay vi vu cùng gia đình? Chọn điều bạn yêu thích để xây dựng lịch trình phù hợp, giúp tiết kiệm thời gian lên kế hoạch.',
    Icon: CalendarRange,
    theme: 'light',
    Visual: () => <ItineraryPhone className="absolute top-10 left-1/2 -translate-x-1/2" />,
  },
  {
    id: 'qr-discovery',
    label: '02 / QR DISCOVERY',
    title: 'Quét QR, mở khóa khám phá',
    description:
      'Quét mã QR tại các điểm tham gia để khám phá thông tin, thực hiện nhiệm vụ và ghi dấu những trải nghiệm thú vị trong chuyến đi.',
    Icon: QrCode,
    theme: 'dark',
    Visual: () => <QrScanPhone className="absolute top-10 left-1/2 -translate-x-[78%]" />,
  },
  {
    id: 'digital-passport',
    label: '03 / DIGITAL PASSPORT',
    title: 'Sưu tập dấu ấn, lưu giữ hành trình',
    description:
      'Lưu lại những điểm đến đã khám phá trong Hộ chiếu trải nghiệm số. Hoàn thành các nhiệm vụ đủ điều kiện để mở khóa huy hiệu mang dấu ấn Đồng Tháp và nhìn lại hành trình của bạn.',
    Icon: Stamp,
    theme: 'pink',
    Visual: () => (
      <div className="absolute inset-0 grid place-items-center pt-4">
        <PassportMini className="-rotate-2" />
      </div>
    ),
  },
]

const THEMES = {
  light: {
    card: 'bg-white ring-1 ring-line',
    stage: 'bg-gradient-to-b from-botanical to-white',
    label: 'text-forest',
    title: 'text-forest-deep',
    body: 'text-ink/85',
    icon: 'bg-botanical text-forest',
  },
  dark: {
    card: 'bg-forest-deep ring-1 ring-forest-deep on-dark',
    stage: 'bg-[radial-gradient(circle_at_50%_30%,#1f5a46,transparent_70%)]',
    label: 'text-lotus',
    title: 'text-white',
    body: 'text-white/75',
    icon: 'bg-white/10 text-lotus',
  },
  pink: {
    card: 'bg-lotus-soft ring-1 ring-lotus/30',
    stage: 'bg-[radial-gradient(circle_at_50%_40%,#fff6f8,transparent_70%)]',
    label: 'text-lotus-deep',
    title: 'text-forest-deep',
    body: 'text-ink/85',
    icon: 'bg-white text-lotus-deep',
  },
}

export default function FeaturesSection() {
  return (
    <section
      id={SECTION_IDS.features}
      aria-labelledby="features-title"
      className="section-y bg-botanical"
    >
      <div className="container-page">
        <SectionHeading
          id="features-title"
          eyebrow="TRẢI NGHIỆM NỔI BẬT"
          title="Một hành trình. Ba trải nghiệm khác biệt."
          description="Không chỉ là một chuyến đi, mà là hành trình khám phá được thiết kế quanh những điều bạn yêu thích."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {FEATURES.map(({ id, label, title, description, Icon, theme, Visual }, index) => {
            const t = THEMES[theme]
            return (
              <article
                key={id}
                aria-labelledby={`${id}-title`}
                className={`reveal card-lift group flex flex-col overflow-hidden rounded-[var(--radius-card)] shadow-soft ${t.card} ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <div className={`relative h-[320px] overflow-hidden ${t.stage}`}>
                  <Visual />
                  <span className="sample-tag absolute top-4 right-4 z-10">Minh họa</span>
                </div>

                <div className="flex flex-1 flex-col p-7 pt-6 lg:p-8 lg:pt-7">
                  <div className="flex items-center gap-3">
                    <span className={`grid size-11 place-items-center rounded-xl ${t.icon}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className={`text-xs font-bold tracking-[0.16em] ${t.label}`}>{label}</p>
                  </div>
                  <h3 id={`${id}-title`} className={`mt-5 text-[1.4rem] leading-snug font-bold ${t.title}`}>
                    {title}
                  </h3>
                  <p className={`mt-3 leading-relaxed ${t.body}`}>{description}</p>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-ink">
          Giao diện và dữ liệu trong các thẻ chỉ mang tính minh họa. Tính năng QR áp dụng tại những
          điểm đến có tham gia chương trình.
        </p>
      </div>
    </section>
  )
}
