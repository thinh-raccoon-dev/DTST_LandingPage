import { Clock3, Images, QrCode, UsersRound } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import wetlandImage from '../assets/images/wetland-boardwalk.webp'
import familyImage from '../assets/images/family-lotus-boat.webp'
import { SECTION_IDS } from '../data/navigation'

const BENEFITS = [
  {
    Icon: Clock3,
    title: 'Không còn mất hàng giờ tìm kiếm',
    description:
      'Giảm công sức tổng hợp thông tin từ nhiều nguồn nhờ gợi ý lịch trình và điểm đến trong cùng một nền tảng.',
  },
  {
    Icon: UsersRound,
    title: 'Trải nghiệm phù hợp với từng người',
    description:
      'Đi một mình, hẹn hò cùng bạn bè hay du lịch gia đình? Khám phá theo sở thích và nhu cầu của nhóm mình.',
  },
  {
    Icon: QrCode,
    title: 'Mỗi điểm đến đều có điều để khám phá',
    description:
      'Tiếp cận thông tin và nhiệm vụ tương tác tại những địa điểm có hỗ trợ QR, thay vì chỉ tham quan và chụp ảnh.',
  },
  {
    Icon: Images,
    title: 'Kỷ niệm không dừng lại khi chuyến đi kết thúc',
    description:
      'Lưu lại dấu mốc đã khám phá, nhìn lại các huy hiệu thu thập được và có thêm động lực cho chuyến đi tiếp theo.',
  },
]

const ROWS = [
  {
    image: wetlandImage,
    alt: 'Hai du khách trẻ đi dạo trên lối gỗ xuyên rừng tràm và đầm sen',
    caption: 'Rừng tràm & đất ngập nước',
    items: [0, 1],
    imageFirst: true,
  },
  {
    image: familyImage,
    alt: 'Gia đình du khách ngồi xuồng giữa đầm sen hồng, người chèo đội nón lá',
    caption: 'Đi xuồng giữa đầm sen',
    items: [2, 3],
    imageFirst: false,
  },
]

function BenefitItem({ benefit, number }) {
  const { Icon, title, description } = benefit
  return (
    <li className="reveal flex gap-5">
      <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-botanical text-forest ring-1 ring-leaf/30">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-lotus-deep tabular-nums">
          {String(number).padStart(2, '0')}
        </p>
        <h3 className="mt-1 text-xl leading-snug font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-ink/85">{description}</p>
      </div>
    </li>
  )
}

export default function BenefitsSection() {
  return (
    <section id={SECTION_IDS.benefits} aria-labelledby="benefits-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="benefits-title"
          eyebrow="ĐIỀU LÀM NÊN KHÁC BIỆT"
          title="Đi du lịch nhẹ đầu hơn, khám phá sâu hơn!"
          description="Ít thời gian lên kế hoạch hơn. Nhiều thời gian tận hưởng hơn."
        />

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
          {ROWS.map((row) => (
            <div key={row.caption} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <figure className={`reveal relative isolate ${row.imageFirst ? '' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] shadow-soft">
                  <img
                    src={row.image}
                    alt={row.alt}
                    width="1200"
                    height="896"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-forest-deep shadow-soft backdrop-blur">
                  {row.caption}
                </figcaption>
                <span
                  aria-hidden="true"
                  className={`absolute -z-10 hidden size-28 rounded-[2rem] bg-lotus-soft lg:block ${
                    row.imageFirst ? '-top-6 -left-6' : '-right-6 -bottom-6'
                  }`}
                />
              </figure>

              <ul className="space-y-10">
                {row.items.map((i) => (
                  <BenefitItem key={BENEFITS[i].title} benefit={BENEFITS[i]} number={i + 1} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
