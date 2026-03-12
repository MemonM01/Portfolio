export default function App() {
  const links = {
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    github: "https://github.com/MemonM01",
    email: "shafaymemon26@gmail.com",
    cv: "/cv.pdf",
  };

  const projects = [
    {
      title: "Full-Stack Project",
      description:
        "A modern web app built with clean UI, strong functionality, and a user-focused experience.",
      stack: ["React", "TypeScript", "Node.js"],
      link: "#",
    },
    {
      title: "Frontend UI Build",
      description:
        "A polished and responsive interface focused on accessibility, smooth layout, and modern design.",
      stack: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      title: "Software Engineering Project",
      description:
        "A practical project showing problem-solving, coding structure, and software engineering skills.",
      stack: ["GitHub", "APIs", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_20%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_25%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Shafay<span className="text-cyan-400">.</span>
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex justify-center">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home" className="relative z-10">
        <section className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Upcoming Software Engineer
            </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Hello!
            <span className="block text-emerald-400">
              I'm Shafay
            </span>
          </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              I’m an aspiring software engineer passionate about creating
              fast, interactive, and visually polished web experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href={links.cv}
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href={links.email}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 font-mono text-sm text-slate-300">
                <p>
                  <span className="text-cyan-400">const</span> developer = {"{"}
                </p>
                <p>
                  {"  "}name: <span className="text-emerald-300">"Shafay"</span>,
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
                  <span className="text-emerald-300">"Problem Solving"</span>]
                </p>
                <p>
                  {"  "}skills: [
                  <span className="text-emerald-300">"HTML"</span>,{" "}
                  <span className="text-emerald-300">"CSS"</span>,{" "}
                  <span className="text-emerald-300">"Python"</span>,{" "}
                  <span className="text-emerald-300">"JavaScript"</span>,{" "}
                  <span className="text-emerald-300">"C#"</span>,{" "}
                  <span className="text-emerald-300">"React"</span>,{" "}
                  <span className="text-emerald-300">"C+"</span>]
                </p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">
              About Me
            </p>
            <h2 className="text-3xl font-bold">
              A future software engineer who loves building things
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              I enjoy learning how software works and turning ideas into real
              projects. I’m focused on improving my coding skills, building
              strong portfolio projects, and growing into a software engineer who
              creates useful and modern solutions.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">
            Projects
          </p>
          <h2 className="text-3xl font-bold">Things I’ve built</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="mt-6 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold">Let’s connect</h2>
            <p className="mt-4 text-slate-300">
              Find me on LinkedIn, GitHub, email, or download my CV below.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                GitHub
              </a>
              <a
                href={links.email}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Email
              </a>
              <a
                href={links.cv}
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}