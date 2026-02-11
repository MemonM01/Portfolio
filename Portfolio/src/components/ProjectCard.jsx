import Badge from "./Badge";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link || "#"}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur hover:border-zinc-700/90"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">{project.title}</p>
          <p className="mt-2 text-sm text-zinc-300">{project.desc}</p>
        </div>
        <ExternalLink className="mt-1 opacity-60 transition group-hover:opacity-100" size={18} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </motion.a>
  );
}