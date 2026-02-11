export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}