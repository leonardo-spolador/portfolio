import type { ReactNode } from "react";

// Tabler-based outline icons (https://tabler.io/icons), thin 1px stroke.
const icons: Record<string, ReactNode> = {
  bolt: <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />,
  users: (
    <>
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </>
  ),
  code: (
    <>
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </>
  ),
};

export default function ThreadIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name] ?? null}
    </svg>
  );
}
