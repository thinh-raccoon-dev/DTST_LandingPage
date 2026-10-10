/**
 * Beta registration submission service.
 *
 * ── Configuration ────────────────────────────────────────────────────────
 * Set `VITE_BETA_REGISTRATION_ENDPOINT` in `.env.local` (see `.env.example`)
 * to the public HTTPS URL of the real registration API.
 *
 * Expected contract (adjust here once the backend is defined):
 *   POST <endpoint>
 *   Content-Type: application/json
 *   Body: { fullName, email, consent, source, submittedAt }
 *   → any 2xx response = registration accepted by the server.
 *
 * No endpoint is configured in this repository. Without one, the service
 * throws `RegistrationNotConfiguredError` so the UI never claims success.
 * Nothing is persisted locally (no localStorage) and no secrets live here —
 * any VITE_* value is public once bundled.
 * ──────────────────────────────────────────────────────────────────────── */

const ENDPOINT = (import.meta.env.VITE_BETA_REGISTRATION_ENDPOINT ?? '').trim()
const REQUEST_TIMEOUT_MS = 15000

export class RegistrationNotConfiguredError extends Error {
  constructor() {
    super('Beta registration endpoint is not configured (VITE_BETA_REGISTRATION_ENDPOINT).')
    this.name = 'RegistrationNotConfiguredError'
  }
}

export class RegistrationRequestError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'RegistrationRequestError'
    this.status = status
  }
}

export function isRegistrationConfigured() {
  return ENDPOINT.length > 0
}

/**
 * Sends a Beta registration to the configured backend.
 * Resolves only when the server confirms with a 2xx response.
 *
 * @param {{ fullName: string, email: string, consent: boolean }} registration
 */
export async function submitBetaRegistration({ fullName, email, consent }) {
  if (!isRegistrationConfigured()) {
    throw new RegistrationNotConfiguredError()
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        fullName,
        email,
        consent,
        source: 'landing-page-beta',
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new RegistrationRequestError(`Server responded with ${response.status}`, response.status)
    }

    return { ok: true }
  } catch (error) {
    if (error instanceof RegistrationRequestError) throw error
    const reason = error?.name === 'AbortError' ? 'Request timed out' : 'Network error'
    throw new RegistrationRequestError(reason)
  } finally {
    clearTimeout(timeoutId)
  }
}
