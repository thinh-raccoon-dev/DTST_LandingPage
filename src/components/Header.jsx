import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import BrandLogo from './ui/BrandLogo'
import { NAV_LINKS, SECTION_IDS } from '../data/navigation'

export default function Header({ activeId }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape and when resizing up to desktop.
  useEffect(() => {
    if (!isMenuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = (event) => event.matches && setIsMenuOpen(false)
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onChange)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const elevated = isScrolled || isMenuOpen

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        elevated
          ? 'border-b border-line/80 bg-cream/90 shadow-[0_6px_24px_-18px_rgb(21_63_50/0.45)] backdrop-blur-md'
          : 'border-b border-transparent bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <a
        href="#noi-dung"
        className="sr-only rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
      >
        Bỏ qua đến nội dung chính
      </a>

      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <a href={`#${SECTION_IDS.top}`} aria-label="Đồng Tháp Smart Travel — về đầu trang" onClick={closeMenu}>
          <BrandLogo />
        </a>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive ? 'text-forest' : 'text-ink/80 hover:text-forest'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-lotus transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`#${SECTION_IDS.beta}`} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Trải nghiệm Beta
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-white text-forest-deep transition-colors hover:border-forest/40 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-line/80 bg-cream lg:hidden"
      >
        <nav aria-label="Điều hướng di động" className="container-page py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-3 text-base font-medium transition-colors hover:bg-botanical ${
                    activeId === link.id ? 'text-forest' : 'text-forest-deep'
                  }`}
                >
                  {link.label}
                  <ArrowRight className="size-4 text-muted" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a href={`#${SECTION_IDS.beta}`} onClick={closeMenu} className="btn btn-primary mt-4 w-full">
            Trải nghiệm Beta
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
