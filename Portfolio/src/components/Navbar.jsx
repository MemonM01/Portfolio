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

  const navClass = ({ isActive }) =>
    isActive ? "navLink navLinkActive" : "navLink";

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbarRow">
          <NavLink to="/" className="brand">
            <div className="logo" />
            <div className="brandText">
              <div className="brandName">Shafay</div>
              <div className="brandSub">Portfolio</div>
            </div>
          </NavLink>

          <nav className="navLinks">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={navClass}>
                {l.label}
              </NavLink>
            ))}
            <a className="ctaBtn" href="#">
              Download CV
            </a>
          </nav>

          <button className="iconBtn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobileMenu">
          <div className="container">
            <div className="mobileMenuInner">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="mobileLink">
                  {l.label}
                </NavLink>
              ))}
              <a className="mobileLink" href="#">
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}