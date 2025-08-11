"use client";

import { startTransition, useActionState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  searchExercises,
  type SearchState,
  type Exercise,
} from "@/app/actions";
import Link from "next/link";

const EMPTY: SearchState = { query: "", exercises: [] };

export function SearchForm({
  initialState = EMPTY,
}: {
  initialState?: SearchState;
}) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const qInUrl = searchParams.get("q") ?? "";

  const [state, formAction, isPending] = useActionState(
    searchExercises,
    initialState
  );

  // React to URL changes (deep link on hydrate, back/forward, manual edits)
  useEffect(() => {
    if (qInUrl !== state.query) {
      const fd = new FormData();
      fd.append("q", qInUrl);
      startTransition(() => formAction(fd));
    }
  }, [qInUrl, state.query, formAction]);

  return (
    <div className="space-y-6">
      <form
        action={formAction}
        onSubmit={(e) => {
          // keep the URL shareable without blocking the action
          const fd = new FormData(e.currentTarget);
          const q = String(fd.get("q") ?? "").trim();
          router.replace(q ? `/search?q=${encodeURIComponent(q)}` : "?", {
            scroll: false,
          });
        }}
        className="flex gap-2"
      >
        <input
          key={state.query} // remount so defaultValue updates when state.query changes
          name="q"
          type="text"
          placeholder="e.g. incline dumbbell press"
          defaultValue={state.query}
          className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-gray-400 focus:ring-0 dark:border-gray-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-black"
          disabled={isPending}
        >
          {isPending ? "Searching…" : "Search"}
        </button>
      </form>

      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300">
          {state.error}
        </div>
      )}

      {state.exercises.length > 0 && (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {state.exercises.map((ex: Exercise) => {
            const img = ex.gifUrl || ex.imageUrl;
            return (
              <li
                key={ex.id}
                className="rounded-xl border border-gray-200 p-3 dark:border-gray-800"
              >
                <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-zinc-900">
                  {img ? (
                    <Image
                      src={img}
                      alt={ex.name}
                      width={334}
                      height={334}
                      className="w-full object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-gray-400">
                      No image available
                    </div>
                  )}
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="text-sm font-semibold">
                    <Link href={`/exercise/${ex.exerciseId}`}>{ex.name}</Link>
                  </h3>
                  <p className="text-xs text-gray-500">
                    {ex.bodyPart ? <span>Body: {ex.bodyPart}</span> : null}
                    {ex.target ? (
                      <span>
                        {ex.bodyPart ? " • " : ""}Target: {ex.target}
                      </span>
                    ) : null}
                    {ex.equipment ? (
                      <span>
                        {ex.bodyPart || ex.target ? " • " : ""}Equipment:{" "}
                        {ex.equipment}
                      </span>
                    ) : null}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {!state.exercises.length && !state.error && (
        <p className="text-sm text-gray-500">
          Try terms like “bench press”, “pull up”, or “lateral raise”.
        </p>
      )}
    </div>
  );
}
