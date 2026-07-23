import Reveal from "./Reveal";

const STATS = [
  { value: "5+", label: "Languages & Frameworks" },
  { value: "3+", label: "Projects Built" },
  { value: "100%", label: "Eager to Learn" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="rounded-2xl border border-warm-border bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-ink">
            A future software engineer who loves building things
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-body">
            I enjoy learning how software works and turning ideas into real
            projects. I'm focused on improving my coding skills, building
            strong portfolio projects, and growing into a software engineer
            who creates useful and modern solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-warm-border bg-paper p-5 text-center transition hover:-translate-y-1 hover:border-sage/40"
              >
                <p className="text-3xl font-extrabold text-sage">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
