import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";
import { ScanHeartIcon } from "lucide-react";
import { SearchForm } from "./components/SearchForm";

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
        <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm">
          <header className="mx-auto max-w-screen-md p-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-0 justify-center">
              <ScanHeartIcon size={42} />
              <h1 className="text-3xl font-semibold p-0 m-0">xersize</h1>
            </Link>

            <nav className="">
              <ul className="flex gap-4 mx-auto p-4">
                <li>
                  <Link href="/plan-a">Plan A</Link>
                </li>
                <li>
                  <Link href="/plan-b">Plan B</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="mx-auto max-w-screen-md px-4 py-8 pb-16">
          <Suspense fallback={null}>{children}</Suspense>
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
