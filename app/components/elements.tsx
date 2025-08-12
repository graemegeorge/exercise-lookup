"use client";

import Link from "next/link";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] md:p-7">
      <h2 className="mb-3 text-base font-semibold text-white/90 md:text-lg">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Day({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium text-gray-300 md:text-base">
        {title}
      </h3>
      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
        {children}
      </ul>
    </div>
  );
}

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="marker:text-gray-600 flex justify-between">
      <span>{children}</span> <input type="checkbox" className="w-10" />
    </li>
  );
}

export function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 whitespace-pre-wrap text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
    >
      {children}
    </Link>
  );
}
