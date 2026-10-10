# Đồng Tháp Smart Travel — Landing Page

Landing page cho **Nền tảng Du lịch Thông minh và Hộ chiếu Trải nghiệm số Đồng Tháp** (Dong Thap Smart Travel), phát triển bởi nhóm **GRC490**.

## Stack

- React 19 + Vite 8
- JavaScript (JSX)
- Tailwind CSS 4
- Lucide React
- Oxlint

## Chạy dự án

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Đăng ký Beta

Form validate phía client (họ tên, email, đồng ý liên hệ). Gửi thật chỉ khi cấu hình endpoint:

1. Sao chép `.env.example` → `.env.local`
2. Điền `VITE_BETA_REGISTRATION_ENDPOINT` (HTTPS, nhận `POST application/json`)

Payload:

```json
{
  "fullName": "…",
  "email": "…",
  "consent": true,
  "source": "landing-page-beta",
  "submittedAt": "ISO-8601"
}
```

Nếu endpoint trống, form **không** báo đăng ký thành công — chỉ báo chưa cấu hình máy chủ.

## Cấu trúc chính

```
src/
  App.jsx
  main.jsx
  components/          # Header → Footer + mockups/ui
  data/                # navigation, passport demo
  hooks/               # scroll reveal + active section
  services/            # betaRegistration
  styles/              # design tokens + component classes
  assets/images/       # hero & benefits photography
```
