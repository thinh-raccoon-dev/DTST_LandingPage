import { useId, useState } from 'react'
import { CheckCircle2, Lock, MapPinCheck, Sparkles, Stamp } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import LotusIcon from './ui/LotusIcon'
import Medal from './ui/Medal'
import { PASSPORT_BADGES, SAMPLE_VISITED } from '../data/passport'
import { SECTION_IDS } from '../data/navigation'

const unlockedCount = PASSPORT_BADGES.filter((b) => b.unlocked).length
const progressPercent = Math.round((unlockedCount / PASSPORT_BADGES.length) * 100)

export default function PassportShowcase() {
  const [selectedId, setSelectedId] = useState(PASSPORT_BADGES[0].id)
  const selected = PASSPORT_BADGES.find((b) => b.id === selectedId) ?? PASSPORT_BADGES[0]
  const detailId = useId()

  return (
    <section
      id={SECTION_IDS.passport}
      aria-labelledby="passport-title"
      className="section-y on-dark relative overflow-hidden bg-forest-deep"
    >
      {/* decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <LotusIcon className="absolute -bottom-24 -left-24 size-[26rem] text-white/[0.03]" />
        <div className="absolute top-1/3 right-[-10rem] size-[28rem] rounded-full bg-lotus/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <SectionHeading
          id="passport-title"
          onDark
          eyebrow="NHỮNG DẤU ẤN CỦA RIÊNG BẠN"
          title="Mỗi dấu chân, một huy hiệu. Mỗi hành trình, một kỷ niệm."
          description="Hộ chiếu trải nghiệm số giúp bạn lưu lại những dấu mốc khám phá Đồng Tháp, sưu tập huy hiệu và nhìn lại câu chuyện của chính mình qua từng chuyến đi."
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          {/* ---------- Passport booklet ---------- */}
          <div className="reveal rounded-[var(--radius-panel)] bg-cream p-3 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] ring-1 ring-gold/40 sm:p-4">
            <div className="rounded-[1.6rem] border border-dashed border-gold/60 p-5 sm:p-7">
              {/* header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-forest-deep">
                    <LotusIcon variant="color" className="size-8" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[0.65rem] font-bold tracking-[0.22em] text-[#8a6a2a]">HỘ CHIẾU TRẢI NGHIỆM SỐ</p>
                    <p className="text-xl font-extrabold text-forest-deep">Đồng Tháp</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-lotus-soft px-3 py-1 text-[0.68rem] font-bold tracking-wide text-lotus-deep uppercase">
                  <Sparkles className="size-3" aria-hidden="true" />
                  Bản xem trước · Demo
                </span>
              </div>

              {/* holder + progress */}
              <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-gold/25 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gold-soft text-sm font-bold text-[#7a5a1e]">
                    NL
                  </span>
                  <div className="leading-tight">
                    <p className="font-bold text-forest-deep">Nhà lữ hành</p>
                    <p className="text-xs text-muted-ink">Hồ sơ mẫu · Hành trình #01</p>
                  </div>
                </div>
                <div className="sm:w-56">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-forest-deep">Huy hiệu đã mở</span>
                    <span className="text-forest tabular-nums">
                      {unlockedCount}/{PASSPORT_BADGES.length}
                    </span>
                  </div>
                  <div
                    className="mt-1.5 h-2 overflow-hidden rounded-full bg-gold-soft"
                    role="progressbar"
                    aria-label="Tiến độ sưu tập huy hiệu (mẫu)"
                    aria-valuemin={0}
                    aria-valuemax={PASSPORT_BADGES.length}
                    aria-valuenow={unlockedCount}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-forest to-leaf"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* badge grid */}
              <p id={`${detailId}-hint`} className="mt-7 text-sm font-medium text-muted-ink">
                Chọn một huy hiệu để xem mô tả
              </p>
              <ul className="mt-4 grid grid-cols-3 gap-x-2 gap-y-5 sm:gap-x-4">
                {PASSPORT_BADGES.map((badge) => {
                  const isSelected = badge.id === selectedId
                  return (
                    <li key={badge.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(badge.id)}
                        aria-pressed={isSelected}
                        aria-controls={detailId}
                        aria-label={`${badge.name}${badge.unlocked ? '' : ' (chưa mở khóa)'}`}
                        className={`group flex w-full flex-col items-center gap-2.5 rounded-2xl px-1 py-3 transition-colors ${
                          isSelected ? 'bg-white ring-2 ring-forest/70' : 'hover:bg-white/70'
                        }`}
                      >
                        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                          <Medal badge={badge} size={68} locked={!badge.unlocked} className="max-sm:!size-14" />
                        </span>
                        <span
                          className={`text-center text-[0.72rem] leading-tight font-semibold sm:text-xs ${
                            badge.unlocked ? 'text-forest-deep' : 'text-muted-ink'
                          }`}
                        >
                          {badge.name}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>

              {/* detail */}
              <div
                id={detailId}
                aria-live="polite"
                className="mt-6 flex flex-col gap-4 rounded-2xl bg-forest-deep p-5 text-white sm:flex-row sm:items-start"
              >
                <Medal badge={selected} size={64} locked={!selected.unlocked} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{selected.name}</h3>
                    {selected.unlocked ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-leaf/20 px-2 py-0.5 text-[0.68rem] font-semibold text-leaf">
                        <CheckCircle2 className="size-3" aria-hidden="true" /> Đã mở khóa (mẫu)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.68rem] font-semibold text-white/80">
                        <Lock className="size-3" aria-hidden="true" /> Chưa mở khóa (mẫu)
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{selected.description}</p>
                  <p className="mt-3 text-xs leading-relaxed text-lotus">
                    <span className="font-semibold">Điều kiện đề xuất:</span> {selected.condition}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Side cards ---------- */}
          <div className="flex flex-col gap-6">
            <div className="reveal rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur sm:p-7" style={{ '--reveal-delay': '100ms' }}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <MapPinCheck className="size-5 text-lotus" aria-hidden="true" />
                  Điểm đến đã ghi dấu
                </h3>
                <span className="text-[0.68rem] font-semibold tracking-wide text-white/60 uppercase">Minh họa</span>
              </div>
              <ol className="mt-5 space-y-3">
                {SAMPLE_VISITED.map((place) => (
                  <li key={place.name} className="flex items-center gap-3.5 rounded-2xl bg-white/[0.06] p-3.5 ring-1 ring-white/10">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-dashed border-lotus/60 text-lotus">
                      <Stamp className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-white">{place.name}</span>
                      <span className="block truncate text-xs text-white/65">
                        {place.area}
                        {place.badge ? ` · ${place.badge}` : ''}
                      </span>
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-white/60 tabular-nums">{place.date}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="reveal relative overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-lotus-soft to-cream p-6 sm:p-7" style={{ '--reveal-delay': '180ms' }}>
              <LotusIcon aria-hidden="true" className="absolute -right-6 -bottom-6 size-36 text-lotus/25" />
              <p className="text-xs font-bold tracking-[0.16em] text-lotus-deep uppercase">Huy hiệu tiếp theo</p>
              <div className="relative mt-4 flex items-center gap-4">
                <Medal badge={PASSPORT_BADGES[3]} size={60} locked />
                <div>
                  <p className="font-bold text-forest-deep">{PASSPORT_BADGES[3].name}</p>
                  <p className="mt-0.5 text-sm text-ink/80">Còn 2 điểm đến nữa để mở khóa</p>
                </div>
              </div>
              <div className="relative mt-5 flex gap-1.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((step) => (
                  <span key={step} className={`h-1.5 flex-1 rounded-full ${step <= 3 ? 'bg-forest' : 'bg-forest/15'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Tên huy hiệu, điều kiện và dữ liệu trong phần này là ý tưởng đề xuất cho giai đoạn thử nghiệm,
          chưa phải phần thưởng đang vận hành.
        </p>
      </div>
    </section>
  )
}
