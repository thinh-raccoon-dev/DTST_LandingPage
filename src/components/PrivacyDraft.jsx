import { SECTION_IDS } from '../data/navigation'

/** Draft privacy notice for review — not a verified legal policy. */
export default function PrivacyDraft() {
  return (
    <section
      id={SECTION_IDS.privacy}
      aria-labelledby="privacy-title"
      className="border-t border-line bg-white py-14 sm:py-16"
    >
      <div className="container-page max-w-3xl">
        <p className="eyebrow">BẢN NHÁP · CẦN RÀ SOÁT</p>
        <h2 id="privacy-title" className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Quyền riêng tư
        </h2>
        <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink/85">
          <p>
            Khi bạn đăng ký trải nghiệm Beta, nhóm GRC490 chỉ thu thập họ tên và email để liên hệ,
            hướng dẫn tham gia thử nghiệm và ghi nhận phản hồi sản phẩm.
          </p>
          <p>
            Thông tin không được dùng để quảng cáo bên thứ ba trong phạm vi đợt thử nghiệm này. Dữ
            liệu chỉ được gửi tới máy chủ đăng ký khi endpoint đã được cấu hình; trang này không lưu
            thông tin cá nhân vào trình duyệt (localStorage).
          </p>
          <p className="rounded-2xl bg-botanical px-4 py-3 text-sm text-muted-ink ring-1 ring-line">
            Đây là bản nháp để hỗ trợ trải nghiệm đăng ký trên landing page. Nội dung pháp lý chính
            thức cần được nhóm dự án rà soát và cập nhật trước khi triển khai công khai rộng.
          </p>
        </div>
      </div>
    </section>
  )
}
