export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
        <p className="text-zinc-300">
          Write a short bio here. Keep it clear: who you are, what you do, and what you're aiming for.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-4">
            <p className="text-sm text-zinc-400">Tech</p>
            <p className="mt-1 font-semibold">React • Tailwind • JavaScript</p>
          </div>
          <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-4">
            <p className="text-sm text-zinc-400">Interests</p>
            <p className="mt-1 font-semibold">UI • UX • Building products</p>
          </div>
        </div>
      </div>
    </div>
  );
}