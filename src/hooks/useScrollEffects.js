import { useEffect, useState } from 'react'

/**
 * Adds `is-visible` to every `.reveal` element as it enters the viewport.
 * Content is only hidden after this hook opts in (`.reveal-ready` on <html>),
 * so the page stays fully readable if JS or IntersectionObserver is missing.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}

/**
 * Returns the id of the section currently in the reading area (scroll-spy).
 * @param {string[]} ids
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)
  const key = ids.join('|')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // A thin band ~40% from the top of the viewport decides the active section.
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
