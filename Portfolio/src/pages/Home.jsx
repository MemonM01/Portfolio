import { NavLink } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-300">
          <Sparkles size={14} />
          React • Tailwind • Responsive Portfolio
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            Shafay
          </span>
          .
          <br />
          I build modern web experiences.
        </h1>

        <p className="mt-4 max-w-xl text-zinc-300">
          Mobile-first layouts (vertical on phones) and clean grids on desktop,
          plus a hamburger menu for navigation.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <NavLink
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
          >
            View Projects <ArrowRight size={18} />
          </NavLink>

          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900/60"
          >
            Contact Me
          </NavLink>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-5">
          <p className="text-sm text-zinc-400">Focus</p>
          <p className="mt-1 text-lg font-semibold">Frontend</p>
          <p className="mt-2 text-sm text-zinc-300">
            React components, responsive UI, clean design.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-5">
          <p className="text-sm text-zinc-400">Strength</p>
          <p className="mt-1 text-lg font-semibold">UX polish</p>
          <p className="mt-2 text-sm text-zinc-300">
            Smooth layouts and clear content structure.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-5 sm:col-span-2">
          <p className="text-sm text-zinc-400">Currently</p>
          <p className="mt-1 text-lg font-semibold">Open to opportunities</p>
          <p className="mt-2 text-sm text-zinc-300">
            Internships • freelance • collaborations
          </p>
        </div>
      </div>
    </div>
  );
}