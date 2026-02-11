import { NavLink } from "react-router-dom";

export function Button({ children, href, to, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "bg-white text-zinc-950 hover:opacity-90"
      : "border border-zinc-800 bg-zinc-950/40 text-white hover:bg-zinc-900/60";

  const cls = `${base} ${styles} ${className}`;

  if (to) return <NavLink to={to} className={cls}>{children}</NavLink>;
  return <a href={href || "#"} className={cls}>{children}</a>;
}