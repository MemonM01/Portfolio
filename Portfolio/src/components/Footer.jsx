export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Shafay. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href="#">GitHub</a>
          <a className="hover:text-white" href="#">LinkedIn</a>
          <a className="hover:text-white" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}