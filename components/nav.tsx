import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
      <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
        LS
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
          Projects
        </Link>
        <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
          About
        </Link>
      </div>
    </nav>
  );
}
