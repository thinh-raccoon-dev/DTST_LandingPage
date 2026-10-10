/** Eyebrow + H2 + supporting copy, shared by every content section. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  className = '',
}) {
  const centered = align === 'center'
  return (
    <div className={`reveal ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      <p className={`eyebrow ${onDark ? 'eyebrow--on-dark' : ''}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 text-[2rem] leading-[1.15] font-extrabold tracking-tight sm:text-[2.6rem] lg:text-[2.9rem] ${
          onDark ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            centered ? 'mx-auto max-w-2xl' : ''
          } ${onDark ? 'text-white/75' : 'text-ink/85'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
