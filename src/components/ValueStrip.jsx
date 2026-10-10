import { BookMarked, Route, ScanLine } from 'lucide-react'

const VALUES = [
  {
    Icon: Route,
    title: 'Lịch trình theo sở thích',
    detail: 'Gợi ý theo chủ đề, thời gian và người đồng hành',
  },
  {
    Icon: ScanLine,
    title: 'Khám phá qua QR',
    detail: 'Thông tin và nhiệm vụ tại các điểm tham gia',
  },
  {
    Icon: BookMarked,
    title: 'Hộ chiếu trải nghiệm số',
    detail: 'Huy hiệu và dấu mốc của riêng bạn',
  },
]

export default function ValueStrip() {
  return (
    <section aria-label="Giá trị cốt lõi" className="relative pb-6 lg:pb-10">
      <div className="container-page">
        <ul className="reveal grid divide-y divide-line rounded-[1.5rem] border border-line bg-white shadow-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {VALUES.map(({ Icon, title, detail }) => (
            <li key={title} className="flex items-center gap-4 px-6 py-5 lg:px-8 lg:py-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-botanical text-forest ring-1 ring-leaf/30">
                <Icon className="size-[22px]" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-forest-deep">{title}</span>
                <span className="mt-0.5 block text-sm leading-snug text-muted-ink">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
