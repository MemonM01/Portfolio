import { LINKS, SKILLS } from "../data/content";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./Icons";

export default function Hero() {
  const languages = SKILLS[0].items;

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24"
    >
      <div>
        <div className="mb-4 inline-flex items-center rounded-full border border-sage/30 bg-sage-tint px-4 py-1 text-sm text-sage">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-sage" />
          Upcoming Software Engineer
        </div>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl text-ink">
          Hello!
          <span className="block text-sage">I'm Shafay</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-body sm:text-lg">
          Currently a 2nd Year CS student at the University of Leeds, 
          I've been pulling computers apart and writing code since I was 13, 
          and I never really stopped, these days I'm doing a CS degree at Leeds and building things with 
          TypeScript, React, Vue and Python. Most of what's on here started as me wanting to figure out 
          how something worked.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-2xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10"
          >
            View Projects
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>

          <a
            href={LINKS.cv}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-warm-border bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-paper"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-white px-4 py-2 text-muted transition hover:-translate-y-0.5 hover:border-sage/40 hover:text-sage"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-white px-4 py-2 text-muted transition hover:-translate-y-0.5 hover:border-sage/40 hover:text-sage"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-white px-4 py-2 text-muted transition hover:-translate-y-0.5 hover:border-sage/40 hover:text-sage"
          >
            <MailIcon className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative animate-float rounded-[2rem] border border-warm-border bg-white p-6 shadow-xl">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-warm-border" />
            <span className="h-3 w-3 rounded-full bg-warm-border" />
            <span className="h-3 w-3 rounded-full bg-warm-border" />
            <span className="ml-3 text-xs text-muted">about-me.ts</span>
          </div>

          <div className="rounded-2xl border border-warm-border bg-paper p-4 font-mono text-sm leading-7 text-body">
            <p>
              <span className="text-muted">const</span>{" "}
              <span className="text-sage">developer</span> = {"{"}
            </p>
            <p>
              {"  "}name:{" "}
              <span className="text-[#2d6a4f]">"Shafay Memon"</span>,
            </p>
            <p>
              {"  "}role:{" "}
              <span className="text-[#2d6a4f]">
                "Upcoming Software Engineer"
              </span>
              ,
            </p>
            <p>
              {"  "}focus: [
              <span className="text-[#2d6a4f]">"Web"</span>,{" "}
              <span className="text-[#2d6a4f]">"UI"</span>,{" "}
              <span className="text-[#2d6a4f]">"AI"</span>,{" "}
              <span className="text-[#2d6a4f]">"Problem Solving"</span>],
            </p>
            <p>
              {"  "}languages: [
              {languages.map((lang, i) => (
                <span key={lang}>
                  <span className="text-[#2d6a4f]">"{lang}"</span>
                  {i < languages.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </p>
            <p>
              {"  "}currentlyLearning:{" "}
              <span className="text-sage">true</span>,
            </p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
