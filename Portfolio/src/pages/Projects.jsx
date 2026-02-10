const PROJECTS = [
  { title: "Portfolio Website", desc: "Multi-page React + Tailwind site with a mobile hamburger menu.", tags: ["React","Tailwind","Router"] },
  { title: "Event Map App", desc: "Events discovery app with map view and clean UI components.", tags: ["React","Supabase","Maps"] },
  { title: "Tutoring Website", desc: "Service-based site with pricing, testimonials, and contact flow.", tags: ["UI/UX","Responsive","SEO"] },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-1 text-zinc-400">Add links + screenshots later.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
            <p className="text-lg font-semibold">{p.title}</p>
            <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}