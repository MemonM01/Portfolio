export default function Contact() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-zinc-300">
          This is a front-end form for now. Later we can connect it to EmailJS/Formspree.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
          <p className="text-sm text-zinc-400">Email</p>
          <p className="mt-1 font-semibold">your@email.com</p>
          <p className="mt-4 text-sm text-zinc-400">Location</p>
          <p className="mt-1 font-semibold">UK</p>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
        <label className="block text-sm text-zinc-300">Name</label>
        <input className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />

        <label className="mt-4 block text-sm text-zinc-300">Email</label>
        <input className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="you@email.com" />

        <label className="mt-4 block text-sm text-zinc-300">Message</label>
        <textarea rows="5" className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Write your message..." />

        <button className="mt-5 w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}