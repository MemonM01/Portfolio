import { EXPERIENCE } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-ink">My journey so far</h2>
      </Reveal>

      <div className="relative mt-12 space-y-8 border-l border-warm-border pl-8">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="relative">
              <span className="absolute -left-[2.45rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-sage/40 bg-white">
                <span className="h-2 w-2 rounded-full bg-sage" />
              </span>

              <div className="rounded-2xl border border-warm-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-sage/20 bg-sage-tint px-3 py-1 text-xs uppercase tracking-wide text-sage">
                    {item.type}
                  </span>
                  <span className="text-sm text-muted">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.place}</p>
                <p className="mt-2 text-sm leading-6 text-body">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
