import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/Button";
import { site } from "../data/site";

export default function Contact() {
  return (
    <Container className="py-12">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Send a message below. Later we can connect this to EmailJS/Formspree."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur">
          <p className="text-sm text-zinc-400">Email</p>
          <p className="mt-1 font-semibold">{site.email}</p>

          <p className="mt-6 text-sm text-zinc-400">Links</p>
          <div className="mt-2 flex flex-col gap-2">
            <a className="text-zinc-200 hover:text-white" href={site.links.github}>GitHub</a>
            <a className="text-zinc-200 hover:text-white" href={site.links.linkedin}>LinkedIn</a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur"
        >
          <label className="block text-sm text-zinc-300">Name</label>
          <input
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Your name"
          />

          <label className="mt-4 block text-sm text-zinc-300">Email</label>
          <input
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="you@email.com"
          />

          <label className="mt-4 block text-sm text-zinc-300">Message</label>
          <textarea
            rows="5"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Write your message..."
          />

          <div className="mt-5">
            <Button variant="primary" className="w-full">Send Message</Button>
          </div>
        </form>
      </div>
    </Container>
  );
}