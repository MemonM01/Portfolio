import { useState } from "react";
import { CERTIFICATIONS } from "../data/content";
import { AwardIcon } from "./Icons";
import Reveal from "./Reveal";

function CertificationCard({ certification, delay }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">
        <div className="aspect-video w-full bg-slate-900/60">
          {certification.image && !imageFailed ? (
            <img
              src={certification.image}
              alt={certification.title}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-600">
              <AwardIcon className="h-12 w-12" />
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            {certification.title}
          </h3>
          {(certification.issuer || certification.date) && (
            <p className="mt-1 text-sm text-slate-400">
              {certification.issuer}
              {certification.issuer && certification.date ? " · " : ""}
              {certification.date}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">
          Certifications
        </p>
        <h2 className="text-3xl font-bold">Credentials I've earned</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATIONS.map((certification, i) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}
