import type { Metadata } from "next";
import "./globals.css";

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
        <div className="text-sm text-right absolute top-4 right-4">{BASE}</div>
        <div className="mx-auto max-w-3xl px-4 py-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Exercise Lookup
            </h1>
            <p className="text-sm text-gray-500">
              Type an exercise name, get a GIF and key details.
            </p>
          </header>
          {children}
          <footer className="mt-10 text-xs text-gray-500">
            Built with Next.js 15, Server Actions, and Tailwind.
          </footer>
        </div>
      </body>
    </html>
  );
}
