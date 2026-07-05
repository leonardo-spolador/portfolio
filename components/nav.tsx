import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-black/10">
      <nav className="flex items-center justify-between py-5 page-container">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          LS
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-sm uppercase tracking-wide text-zinc-600 hover:text-zinc-900 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm uppercase tracking-wide text-zinc-600 hover:text-zinc-900 transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
