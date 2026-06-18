import Image from "next/image";
import peopleData from "@/content/data/design-cop-people.json";

type Person = { name: string; image: string; note?: string };
type Group = { label: string; caption?: string; people: Person[] };

const data = peopleData as { groups: Group[] };

export default function PeopleGrid() {
  return (
    <div className="not-prose my-10 flex flex-col gap-10">
      {data.groups.map((group) => (
        <div key={group.label}>
          <h4 className="text-sm font-semibold text-zinc-900">{group.label}</h4>
          {group.caption && (
            <p className="mt-1 text-sm text-zinc-500 max-w-md">{group.caption}</p>
          )}
          <ul className="mt-5 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5 md:grid-cols-7">
            {group.people.map((p) => (
              <li key={p.image} className="flex flex-col items-center text-center">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={96}
                  height={96}
                  className={`w-16 h-16 rounded-full object-cover ${
                    p.note ? "ring-2 ring-zinc-400 ring-offset-2" : ""
                  }`}
                />
                <span className="mt-2 text-xs font-medium text-zinc-700 leading-tight">
                  {p.name}
                </span>
                {p.note && (
                  <span className="mt-1 text-[11px] text-zinc-400 leading-tight">
                    {p.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
