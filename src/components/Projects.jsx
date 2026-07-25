import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PROJECTS } from "../data/content";
import { ArrowRightIcon, ExternalLinkIcon, FileTextIcon, XIcon } from "./Icons";
import Reveal from "./Reveal";

const popup = (content) => createPortal(content, document.body);

function WriteupViewer({ src, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return popup(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm">
      <div className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-warm-border bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-warm-border px-5 py-3">
          <p className="text-sm font-semibold text-ink">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-warm-border bg-white p-2 text-ink transition hover:bg-paper"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <iframe src={src} title={title} className="h-full w-full flex-1" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeWriteup, setActiveWriteup] = useState(null);

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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-sage transition hover:text-[#3a6347]"
                  >
                    View Code
                    <ArrowRightIcon className="h-4 w-4 transition group-hover/link:translate-x-1" />
                  </a>
                )}

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

                {project.writeup && (
                  <button
                    type="button"
                    onClick={() => setActiveWriteup(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
                  >
                    Read Write-up
                    <FileTextIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {activeWriteup && (
        <WriteupViewer
          src={activeWriteup.writeup}
          title={activeWriteup.title}
          onClose={() => setActiveWriteup(null)}
        />
      )}
    </section>
  );
}
