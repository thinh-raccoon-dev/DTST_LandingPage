import BrandLogo from './ui/BrandLogo'
import LotusIcon from './ui/LotusIcon'
import { SECTION_IDS } from '../data/navigation'

const FOOTER_LINKS = [
  { label: 'Giới thiệu', id: SECTION_IDS.hero },
  { label: 'Tính năng', id: SECTION_IDS.features },
  { label: 'Đăng ký Beta', id: SECTION_IDS.beta },
  { label: 'Quyền riêng tư', id: SECTION_IDS.privacy },
]

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-forest-deep text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LotusIcon className="absolute -right-16 -bottom-20 size-[22rem] text-white/[0.04]" />
        <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-lotus/40 to-transparent" />
      </div>

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <BrandLogo onDark />
            <p className="mt-5 text-lg font-semibold text-lotus">Khám phá theo cách của bạn.</p>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-cream/75">
              Nền tảng Du lịch Thông minh và Hộ chiếu Trải nghiệm số Đồng Tháp — kết nối công nghệ với
              những giá trị văn hóa, thiên nhiên và trải nghiệm địa phương.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Liên kết chân trang">
              <p className="text-xs font-bold tracking-[0.18em] text-lotus uppercase">Khám phá</p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm font-medium text-cream/80 transition-colors hover:text-lotus"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-lotus uppercase">Liên hệ</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/80">
                <li>
                  <span className="block font-semibold text-cream">Đơn vị phát triển</span>
                  Nhóm GRC490
                </li>
                <li>
                  <span className="block font-semibold text-cream">Email</span>
                  <span className="text-cream/65">[Bổ sung email liên hệ chính thức]</span>
                </li>
                <li className="text-cream/55">
                  Mạng xã hội sẽ được bổ sung khi có tài khoản chính thức.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nhóm GRC490. Bảo lưu mọi quyền.</p>
          <p>Đồng Tháp Smart Travel · GRC490</p>
        </div>
      </div>
    </footer>
  )
}
