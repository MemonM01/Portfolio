import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-xl px-3 py-2 text-sm transition ${
      isActive
        ? "bg-zinc-800/70 text-white"
        : "text-zinc-300 hover:bg-zinc-900/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group flex items-center gap-2 rounded-2xl px-2 py-1 hover:bg-zinc-900/50"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Shafay</p>
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300">
              Portfolio
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href="#"
            className="ml-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-zinc-200 hover:bg-zinc-900/60 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800/60 bg-zinc-950/90 backdrop-blur">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
              <a
                href="#"
                className="mt-2 rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-950 hover:opacity-90"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}