import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { site } from "../data/site";

export default function Projects() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        subtitle="A curated set of builds that show UI quality, structure, and real features."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {site.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Container>
  );
}