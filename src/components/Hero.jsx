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
      <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-72 w-72 animate-blob rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-72 w-72 animate-blob rounded-full bg-purple-500/20 blur-3xl [animation-delay:2s]" />

      <div>
        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Upcoming Software Engineer
        </div>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Hello!
          <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent">
            I'm Shafay
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          I'm an aspiring software engineer passionate about creating fast,
          interactive, and visually polished web experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
          >
            View Projects
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>

          <a
            href={LINKS.cv}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative animate-float rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-slate-400">about-me.ts</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 font-mono text-sm leading-7 text-slate-300">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-300">developer</span> = {"{"}
            </p>
            <p>
              {"  "}name:{" "}
              <span className="text-emerald-300">"Shafay Memon"</span>,
            </p>
            <p>
              {"  "}role:{" "}
              <span className="text-emerald-300">
                "Upcoming Software Engineer"
              </span>
              ,
            </p>
            <p>
              {"  "}focus: [
              <span className="text-emerald-300">"Web"</span>,{" "}
              <span className="text-emerald-300">"UI"</span>,{" "}
              <span className="text-emerald-300">"AI"</span>,{" "}
              <span className="text-emerald-300">"Problem Solving"</span>],
            </p>
            <p>
              {"  "}languages: [
              {languages.map((lang, i) => (
                <span key={lang}>
                  <span className="text-emerald-300">"{lang}"</span>
                  {i < languages.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </p>
            <p>
              {"  "}currentlyLearning:{" "}
              <span className="text-amber-300">true</span>,
            </p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
