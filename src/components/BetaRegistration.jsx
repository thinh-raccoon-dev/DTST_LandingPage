import { useId, useState } from 'react'
import { ArrowRight, CheckCircle2, LoaderCircle, ShieldCheck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import {
  isRegistrationConfigured,
  RegistrationNotConfiguredError,
  submitBetaRegistration,
} from '../services/betaRegistration'
import { SECTION_IDS } from '../data/navigation'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL = { fullName: '', email: '', consent: false }

function validate(values) {
  const errors = {}
  const name = values.fullName.trim()
  const email = values.email.trim()

  if (!name) errors.fullName = 'Vui lòng nhập họ và tên.'
  else if (name.length < 2) errors.fullName = 'Họ và tên cần ít nhất 2 ký tự.'

  if (!email) errors.email = 'Vui lòng nhập email.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Email chưa đúng định dạng.'

  if (!values.consent) {
    errors.consent = 'Bạn cần đồng ý để chúng tôi liên hệ về chương trình thử nghiệm.'
  }

  return errors
}

export default function BetaRegistration() {
  const formId = useId()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | unconfigured
  const [serverMessage, setServerMessage] = useState('')
  const configured = isRegistrationConfigured()

  const update = (field) => (event) => {
    const next =
      field === 'consent' ? event.target.checked : event.target.value
    setValues((prev) => ({ ...prev, [field]: next }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const rest = { ...prev }
      delete rest[field]
      return rest
    })
    if (status === 'error' || status === 'unconfigured') {
      setStatus('idle')
      setServerMessage('')
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setServerMessage('')

    try {
      await submitBetaRegistration({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        consent: values.consent,
      })
      setStatus('success')
      setValues(INITIAL)
    } catch (error) {
      if (error instanceof RegistrationNotConfiguredError) {
        setStatus('unconfigured')
        setServerMessage(
          'Form đã hợp lệ, nhưng máy chủ đăng ký chưa được cấu hình. Vui lòng liên hệ nhóm GRC490 hoặc thử lại khi endpoint Beta đã sẵn sàng.',
        )
        return
      }
      setStatus('error')
      setServerMessage('Chưa thể gửi đăng ký lúc này. Vui lòng thử lại sau ít phút.')
    }
  }

  if (status === 'success') {
    return (
      <section
        id={SECTION_IDS.beta}
        aria-labelledby="beta-title"
        className="section-y relative overflow-hidden bg-botanical"
      >
        <div className="container-page">
          <div className="reveal mx-auto max-w-xl rounded-[var(--radius-panel)] bg-white p-8 text-center shadow-soft ring-1 ring-line sm:p-12">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-botanical text-forest">
              <CheckCircle2 className="size-8" aria-hidden="true" />
            </span>
            <h2 id="beta-title" className="mt-6 text-2xl font-extrabold sm:text-3xl">
              Đăng ký đã được tiếp nhận
            </h2>
            <p className="mt-4 leading-relaxed text-ink/85">
              Cảm ơn bạn đã quan tâm đến Đồng Tháp Smart Travel! Thông tin đăng ký của bạn đã được
              tiếp nhận.
            </p>
            <button
              type="button"
              className="btn btn-secondary mt-8"
              onClick={() => {
                setStatus('idle')
                setServerMessage('')
              }}
            >
              Đăng ký thêm người khác
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={SECTION_IDS.beta}
      aria-labelledby="beta-title"
      className="section-y relative overflow-hidden bg-botanical"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-8rem] size-[28rem] rounded-full bg-lotus-soft/80 blur-3xl" />
        <div className="absolute bottom-0 left-[-6rem] size-[22rem] rounded-full bg-leaf-soft/70 blur-3xl" />
      </div>

      <div className="container-page relative">
        <SectionHeading
          id="beta-title"
          eyebrow="BETA TESTING"
          title="Đồng Tháp đang chờ bạn khám phá!"
          description="Hãy trở thành một trong những người trải nghiệm đầu tiên nền tảng du lịch thông minh và Hộ chiếu Trải nghiệm số Đồng Tháp. Cùng chúng tôi khám phá một cách du lịch mới mẻ hơn và góp ý để hoàn thiện sản phẩm."
        />

        <p className="reveal mt-6 text-center text-sm font-semibold text-forest">
          Dành cho 20–30 người dùng đầu tiên trong đợt thử nghiệm.
        </p>

        <div className="reveal mx-auto mt-12 max-w-xl rounded-[var(--radius-panel)] bg-white p-6 shadow-soft ring-1 ring-line sm:p-9">
          {!configured ? (
            <p
              role="status"
              className="mb-6 rounded-2xl bg-gold-soft/70 px-4 py-3 text-sm leading-relaxed text-[#7a5a1e] ring-1 ring-gold/40"
            >
              Endpoint đăng ký chưa được cấu hình. Form vẫn kiểm tra dữ liệu; khi gửi, hệ thống sẽ
              thông báo rõ là chưa gửi được lên máy chủ (không giả lập thành công).
            </p>
          ) : null}

          <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-privacy`}>
            <div>
              <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-forest-deep">
                Họ và tên <span className="text-lotus-deep">*</span>
              </label>
              <input
                id={`${formId}-name`}
                name="fullName"
                type="text"
                autoComplete="name"
                value={values.fullName}
                onChange={update('fullName')}
                aria-invalid={errors.fullName ? 'true' : undefined}
                aria-describedby={errors.fullName ? `${formId}-name-error` : undefined}
                disabled={status === 'submitting'}
                className={`mt-2 w-full rounded-2xl border bg-cream px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-muted ${
                  errors.fullName
                    ? 'border-lotus-deep focus:border-lotus-deep'
                    : 'border-line focus:border-forest'
                }`}
                placeholder="Nguyễn Văn A"
              />
              {errors.fullName ? (
                <p id={`${formId}-name-error`} role="alert" className="mt-1.5 text-sm text-lotus-deep">
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-forest-deep">
                Email <span className="text-lotus-deep">*</span>
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={update('email')}
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                disabled={status === 'submitting'}
                className={`mt-2 w-full rounded-2xl border bg-cream px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-muted ${
                  errors.email
                    ? 'border-lotus-deep focus:border-lotus-deep'
                    : 'border-line focus:border-forest'
                }`}
                placeholder="ban@email.com"
              />
              {errors.email ? (
                <p id={`${formId}-email-error`} role="alert" className="mt-1.5 text-sm text-lotus-deep">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  id={`${formId}-consent`}
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={update('consent')}
                  aria-invalid={errors.consent ? 'true' : undefined}
                  aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
                  disabled={status === 'submitting'}
                  className="mt-1 size-5 shrink-0 rounded border-line text-forest accent-forest"
                />
                <span className="text-sm leading-relaxed text-ink/90">
                  Tôi đồng ý để nhóm phát triển liên hệ về chương trình thử nghiệm theo{' '}
                  <a href={`#${SECTION_IDS.privacy}`} className="font-semibold text-forest underline-offset-2 hover:underline">
                    chính sách quyền riêng tư
                  </a>
                  .
                </span>
              </label>
              {errors.consent ? (
                <p id={`${formId}-consent-error`} role="alert" className="mt-1.5 text-sm text-lotus-deep">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            {(status === 'error' || status === 'unconfigured') && serverMessage ? (
              <p
                role="alert"
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ring-1 ${
                  status === 'unconfigured'
                    ? 'bg-gold-soft/70 text-[#7a5a1e] ring-gold/40'
                    : 'bg-lotus-soft text-lotus-deep ring-lotus/40'
                }`}
              >
                {serverMessage}
              </p>
            ) : null}

            <button
              type="submit"
              className="btn btn-primary h-14 w-full text-base"
              disabled={status === 'submitting'}
              aria-busy={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
                  Đang gửi đăng ký…
                </>
              ) : (
                <>
                  Đăng ký trải nghiệm Beta
                  <ArrowRight className="size-5" aria-hidden="true" />
                </>
              )}
            </button>

            <p
              id={`${formId}-privacy`}
              className="flex items-start gap-2 text-center text-xs leading-relaxed text-muted-ink sm:text-left"
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
              Thông tin đăng ký sẽ được sử dụng để liên hệ và hướng dẫn bạn tham gia chương trình thử
              nghiệm.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
