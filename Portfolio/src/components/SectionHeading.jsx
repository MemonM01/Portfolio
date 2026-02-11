export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}