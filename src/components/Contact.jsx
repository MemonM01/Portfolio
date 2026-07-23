import { LINKS } from "../data/content";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-warm-border bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-ink">Let's connect</h2>
          <p className="mt-4 text-body">
            Find me on LinkedIn, GitHub, email, or download my CV below.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-warm-border bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-warm-border"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-warm-border bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-warm-border"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <a
              href={LINKS.cv}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-warm-border bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-warm-border"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
