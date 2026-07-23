import { PROJECTS } from "../data/content";
import { ArrowRightIcon, ExternalLinkIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-ink">Things I've built</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="group h-full rounded-2xl border border-warm-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage/30 hover:shadow-md hover:shadow-sage/5">
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sage/20 bg-sage-tint px-3 py-1 text-xs text-sage"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-sage transition hover:text-[#3a6347]"
                >
                  View Code
                  <ArrowRightIcon className="h-4 w-4 transition group-hover/link:translate-x-1" />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
                  >
                    Live Demo
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
