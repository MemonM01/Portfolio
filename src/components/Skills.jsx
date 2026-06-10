import { SKILLS } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">
          Skills
        </p>
        <h2 className="text-3xl font-bold">What I work with</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal key={group.category} delay={i * 100}>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">
              <h3 className="text-lg font-semibold text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
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
