import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-10 text-center">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="mt-2 text-zinc-300">That route doesn’t exist.</p>
      <NavLink
        to="/"
        className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
      >
        Go Home
      </NavLink>
    </div>
  );
}