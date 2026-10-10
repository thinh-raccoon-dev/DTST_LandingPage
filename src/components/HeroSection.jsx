import { ArrowRight, Compass, MapPin, ScanLine, Sparkles } from 'lucide-react'
import heroImage from '../assets/images/hero-lotus-lake.webp'
import Medal from './ui/Medal'
import MiniMap from './ui/MiniMap'
import QrGlyph from './ui/QrGlyph'
import { PASSPORT_BADGES } from '../data/passport'
import { SECTION_IDS } from '../data/navigation'

const SAMPLE_STOPS = [
  { time: '06:00', place: 'Ngắm bình minh trên đồng sen' },
  { time: '09:30', place: 'Đi xuồng xuyên rừng tràm' },
  { time: '15:00', place: 'Dạo làng hoa ven sông' },
]

const lotusBadge = PASSPORT_BADGES[0]

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Soft botanical backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 size-[34rem] rounded-full bg-leaf-soft/60 blur-3xl" />
        <div className="absolute top-20 right-[-12rem] size-[30rem] rounded-full bg-lotus-soft/70 blur-3xl" />
        <div className="bg-dots absolute top-8 right-0 h-64 w-1/2 [mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>

      <div className="container-page relative grid items-center gap-14 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1.02fr_1fr] lg:gap-12 lg:pt-14 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="eyebrow hero-enter">MỖI CHUYẾN ĐI, MỘT CÂU CHUYỆN</p>

          <h1
            id="hero-title"
            className="hero-enter mt-5 text-[2.55rem] leading-[1.08] font-extrabold tracking-tight sm:text-[3.6rem] lg:text-[4rem]"
            style={{ '--enter-delay': '80ms' }}
          >
            Khám phá{' '}
            <span className="relative inline-block whitespace-nowrap text-forest">
              Đồng Tháp
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-lotus"
              >
                <path
                  d="M3 9.5C45 4 110 2.5 217 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            theo cách của bạn!
          </h1>

          <p
            className="hero-enter mt-7 text-lg leading-relaxed text-ink/90 sm:text-xl"
            style={{ '--enter-delay': '160ms' }}
          >
            Lịch trình thông minh, nhiệm vụ khám phá tại điểm đến và hộ chiếu số lưu giữ từng dấu
            chân. Đồng Tháp đang chờ bạn trải nghiệm!
          </p>

          <div
            className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ '--enter-delay': '240ms' }}
          >
            <a href={`#${SECTION_IDS.beta}`} className="btn btn-primary h-14 px-7 text-base">
              Tạo lịch trình ngay
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a href={`#${SECTION_IDS.howItWorks}`} className="btn btn-secondary h-14 px-7 text-base">
              <Compass className="size-5 text-forest" aria-hidden="true" />
              Khám phá cách hoạt động
            </a>
          </div>

          <p
            className="hero-enter mt-6 text-sm font-medium text-muted-ink"
            style={{ '--enter-delay': '320ms' }}
          >
            Khám phá theo sở thích <span aria-hidden="true" className="mx-1 text-lotus">·</span> Tích
            lũy huy hiệu <span aria-hidden="true" className="mx-1 text-lotus">·</span> Lưu giữ kỷ niệm
          </p>
        </div>

        {/* Visual */}
        <div className="hero-enter relative mx-auto w-full max-w-[560px] lg:max-w-none" style={{ '--enter-delay': '200ms' }}>
          {/* drifting petals (decorative, max two) */}
          <span
            aria-hidden="true"
            className="absolute -top-3 left-[18%] z-20 hidden h-5 w-3 animate-drift rounded-[999px_0_999px_0] bg-lotus/80 sm:block"
            style={{ '--r': '35deg' }}
          />
          <span
            aria-hidden="true"
            className="absolute right-[10%] -bottom-4 z-20 hidden h-4 w-2.5 animate-drift rounded-[999px_0_999px_0] bg-lotus/60 sm:block"
            style={{ '--r': '-20deg', animationDelay: '-4s' }}
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgb(15_47_37/0.55)] ring-1 ring-forest-deep/5 sm:aspect-[5/4.4] lg:aspect-[4/4.7]">
            <img
              src={heroImage}
              alt="Bình minh trên hồ sen hồng ở Đồng Tháp, một chiếc xuồng nhỏ lướt giữa những lá sen xanh"
              width="1200"
              height="896"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[62%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/35 via-transparent to-transparent" />

            <span className="sample-tag absolute top-4 left-4">
              <Sparkles className="size-3" aria-hidden="true" />
              Giao diện minh họa
            </span>

            {/* QR chip — sits near the boat as a "participating point" */}
            <div className="absolute top-[42%] right-4 hidden items-center gap-2.5 rounded-2xl bg-forest-deep/85 py-2 pr-3.5 pl-2 text-white shadow-float backdrop-blur-md sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-white p-1.5">
                <QrGlyph className="size-full text-forest-deep" />
              </span>
              <span className="leading-tight">
                <span className="flex items-center gap-1 text-[0.7rem] font-medium text-lotus">
                  <ScanLine className="size-3" aria-hidden="true" />
                  Điểm có hỗ trợ QR
                </span>
                <span className="text-sm font-semibold">Quét để mở nhiệm vụ</span>
              </span>
            </div>
          </div>

          {/* Badge — overlaps the top-right edge */}
          <div className="absolute top-14 -right-2 flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 pr-4 shadow-float ring-1 ring-line/70 backdrop-blur sm:-right-6 lg:top-16">
            <Medal badge={lotusBadge} size={48} />
            <span className="leading-tight">
              <span className="block text-[0.7rem] font-medium text-muted-ink">Huy hiệu mới mở khóa</span>
              <span className="block text-sm font-bold text-forest-deep">Dấu ấn Hoa Sen</span>
            </span>
          </div>

          {/* Itinerary card with mini map — overlaps the bottom-left edge */}
          <div className="absolute -bottom-8 left-3 w-[min(78%,280px)] overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-line/70 sm:-left-6 lg:-left-10">
            <div className="relative h-20">
              <MiniMap className="size-full" />
              <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[0.65rem] font-semibold text-forest">
                Ngày 1 · 3 điểm dừng
              </span>
            </div>
            <div className="p-4 pt-3">
              <p className="text-[0.7rem] font-semibold tracking-wide text-lotus-deep uppercase">Lịch trình gợi ý</p>
              <p className="mt-0.5 text-[0.95rem] font-bold text-forest-deep">Sen hồng &amp; rừng tràm</p>
              <ol className="mt-3 space-y-2">
                {SAMPLE_STOPS.map((stop, index) => (
                  <li key={stop.time} className="flex items-center gap-2.5 text-[0.8rem]">
                    <span
                      className={`grid size-5 shrink-0 place-items-center rounded-full ${
                        index === 0 ? 'bg-forest text-white' : 'bg-botanical text-forest'
                      }`}
                    >
                      <MapPin className="size-3" aria-hidden="true" />
                    </span>
                    <span className="w-10 shrink-0 font-semibold text-forest-deep tabular-nums">{stop.time}</span>
                    <span className="truncate text-ink">{stop.place}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
