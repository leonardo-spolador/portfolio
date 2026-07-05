import Image from "next/image";
import Link from "next/link";

type Case = {
  company: string;
  title: string;
  tags: string;
  description: string;
  image: string;
  href: string;
  coming_soon?: boolean;
};

export default function CaseTile({
  item,
  comingSoonLabel = "Coming soon",
}: {
  item: Case;
  comingSoonLabel?: string;
}) {
  const inner = (
    <div className="page-container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:gap-12">
      <div className="flex flex-col gap-2 sm:flex-1">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
          {item.company}
        </span>
        <h3 className="font-heading text-2xl font-semibold leading-snug text-zinc-900">
          {item.title}
        </h3>
        <p className="text-xs text-zinc-400">{item.tags}</p>
        <p className="text-sm text-zinc-500 leading-relaxed mt-1">{item.description}</p>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-50 sm:w-1/2">
        {item.coming_soon ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              {comingSoonLabel}
            </span>
          </div>
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:transition-none"
          />
        )}
      </div>
    </div>
  );

  if (item.coming_soon) {
    return <div className="border-t border-black/10 first:border-t-0">{inner}</div>;
  }

  return (
    <Link
      href={item.href}
      className="group block border-t border-black/10 first:border-t-0 transition-colors duration-200 hover:bg-white focus-visible:bg-white motion-reduce:transition-none"
    >
      {inner}
    </Link>
  );
}
