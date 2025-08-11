import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Exercise Lookup",
  description: "Search an exercise by name and see an example GIF",
};

const BASE = process.env.EXERCISEDB_BASE_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <div className="mx-auto max-w-3xl px-4 py-8 pb-16">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              <Link href="/">Exercise Lookup</Link>
            </h1>
            <p className="text-sm text-gray-500">
              Type an exercise name, get a GIF and key details.
            </p>
          </header>
          <Suspense fallback={null}>{children}</Suspense>
          <footer className="mt-10 text-xs text-gray-500">
            Built with Next.js 15, Server Actions, and Tailwind.
          </footer>
        </div>

        <div className="text-sm text-center p-4 bg-[#0b0b0b] bg-opacity-75 fixed bottom-0 right-0 left-0">
          <a href={BASE} target="_blank">
            {BASE}
          </a>
        </div>
      </body>
    </html>
  );
}
