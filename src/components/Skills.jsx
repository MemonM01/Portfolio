import { SKILLS } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
          Skills
        </p>
        <h2 className="text-3xl font-bold text-ink">What I work with</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal key={group.category} delay={i * 100}>
            <div className="h-full rounded-2xl border border-warm-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage/30">
              <h3 className="text-lg font-semibold text-ink">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-warm-border bg-paper px-3 py-1.5 text-sm text-body transition hover:border-sage/40 hover:text-sage"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
