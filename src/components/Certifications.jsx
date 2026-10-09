import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CERTIFICATIONS } from "../data/content";
import { AwardIcon, XIcon, ZoomInIcon, ArrowRightIcon } from "./Icons";
import Reveal from "./Reveal";



// renders stuff straight into <body> so the popup sits on top of everything
const popup = (content) => createPortal(content, document.body);

// full screen view of a certificate image when u click it
function Lightbox({ src, alt, onClose }) {
  // close on Escape + stop the page scrolling behind the popup
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return popup(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full border border-warm-border bg-white p-2 text-ink transition hover:bg-paper"
      >
        <XIcon className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        // clicking the image itself shouldnt close it, only the dark bit around it
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-warm-border shadow-2xl"
      />
    </div>
  );
}

function CertificationCard({ certification }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // only let it zoom if theres an image and it actualy loaded
  const canEnlarge = certification.image && !imageFailed;

  return (
    <Reveal>
      <div className="h-full overflow-hidden rounded-2xl border border-warm-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-sage/30">
        <div
          className={`group relative aspect-video w-full bg-paper ${canEnlarge ? "cursor-zoom-in" : ""}`}
          onClick={() => canEnlarge && setLightboxOpen(true)}
        >
          {canEnlarge ? (
            <>
              <img
                src={certification.image}
                alt={certification.title}
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/20">
                <ZoomInIcon className="h-8 w-8 text-white opacity-0 drop-shadow transition group-hover:opacity-100" />
              </div>
            </>
          ) : (
            // no image (or it broke) so just show an award icon insted
            <div className="flex h-full w-full items-center justify-center text-muted">
              <AwardIcon className="h-12 w-12" />
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-ink">
            {certification.title}
          </h3>
          {(certification.issuer || certification.date) && (
            <p className="mt-1 text-sm text-muted">
              {certification.issuer}
              {certification.issuer && certification.date ? " · " : ""}
              {certification.date}
            </p>
          )}
          {certification.link && (
            <a
              href={certification.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sage transition hover:text-[#3a6347]"
            >
              View Code
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          src={certification.image}
          alt={certification.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sage">
          Certifications
        </p>
        <h2 className="text-3xl font-bold text-ink">Credentials I've earned</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATIONS.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </section>
  );
}
