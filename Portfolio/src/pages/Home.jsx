import { NavLink } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="pill">
                <Sparkles size={14} />
                Student - Computer Science - Uni of Leeds
              </div>

              <h1 className="h1">
                Muhammad Shafay Memon <br></br>
                <span className="gradText"> Upcoming Software Engineer</span>
              </h1>

              <p className="lead">
                Hi, my name is Shafay Memon. I am currently  a Student at the University of Leeds doing a degree in Computer Science, 
                aspiring to pursue a career in software engineering. I am academically driven, consistently striving for excellence. 
                I work well in team environments, have strong communication skills, and am deeply passionate about computer science.
              </p>

              <div className="actions">
                <NavLink className="btn btnPrimary" to="/projects">
                  View Projects <ArrowRight size={18} />
                </NavLink>
                <NavLink className="btn btnSecondary" to="/contact">
                  Contact Me
                </NavLink>
              </div>

              <div className="tags" style={{ marginTop: 16 }}>
                {["React", "CSS", "JavaScript", "TypeScript", "Node.js", "Supabase", "Python", "HTML"].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="cardGrid">
              <div className="card">
                <div className="cardTitle">Clean UI</div>
                <div className="cardDesc">
                  Modern layouts with strong spacing and readable typography.
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">Responsive</div>
                <div className="cardDesc">
                  Mobile-first design: vertical on phones, grid on desktop.
                </div>
              </div>
              <div className="card" style={{ gridColumn: "1 / -1" }}>
                <div className="cardTitle">Fast Builds</div>
                <div className="cardDesc">
                  React + Vite with clean CSS for quick iteration and a premium feel.
                </div>
              </div>
              <div className="card" style={{ gridColumn: "1 / -1" }}>
                <div className="cardTitle">Now</div>
                <div className="cardDesc">
                  Open to internships & freelance — let’s build something cool.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle">Featured Projects</div>
          <div className="sectionSub">
            A few projects that show real UI quality and structure.
          </div>

          <div className="projectsGrid">
            {[
              { title: "Event Discovery Map", desc: "Find events on a map and filter by tags.", tags: ["React","Supabase","Maps", "Tailwind"] }, { title: "Tutors 4 U", desc: "Tutoring website with pricing + contact flow.", tags: ["React","CSS","UX"] },
              { title: "Portfolio v1", desc: "Multi-page portfolio with mobile hamburger menu.", tags: ["React Router","CSS","Design"] },
              { title: "Hackathon Build", desc: "Team project with fast prototyping and delivery.", tags: ["React","APIs","Teamwork"] },
            ].map((p) => (
              <div className="projectCard" key={p.title}>
                <div className="cardTitle">{p.title}</div>
                <div className="cardDesc">{p.desc}</div>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <NavLink className="btn btnSecondary" to="/projects">
              See all projects
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}