export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.8rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
