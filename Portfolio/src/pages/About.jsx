import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { site } from "../data/site";

export default function About() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        subtitle="Short, clear, and professional. You can replace this text with your story."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur lg:col-span-2">
          <p className="text-zinc-300 leading-relaxed">
            I’m {site.name}. I enjoy building modern web apps with clean UI and smooth UX.
            I focus on responsive layouts, polished components, and reliable structure.
            I’m always improving through projects and learning.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur">
          <p className="text-sm text-zinc-400">Location</p>
          <p className="mt-1 font-semibold">{site.location}</p>
          <p className="mt-4 text-sm text-zinc-400">Email</p>
          <p className="mt-1 font-semibold">{site.email}</p>
          <p className="mt-4 text-sm text-zinc-400">Links</p>
          <div className="mt-2 flex flex-col gap-2">
            <a className="text-zinc-200 hover:text-white" href={site.links.github}>GitHub</a>
            <a className="text-zinc-200 hover:text-white" href={site.links.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SectionHeading eyebrow="Experience" title="Timeline" />
        <div className="space-y-4">
          {site.experience.map((e) => (
            <div key={e.title} className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{e.when}</p>
              <p className="mt-2 text-lg font-semibold">{e.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}