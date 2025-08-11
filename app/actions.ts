"use server";

export type Exercise = {
  id: string;
  exerciseId: string;
  name: string;
  gifUrl?: string;
  imageUrl?: string;
  bodyPart?: string;
  bodyParts?: string[];
  target?: string;
  targetMuscles?: string[];
  secondaryMuscles?: string[];
  equipment?: string;
  instructions?: string[];
};

export type SearchState = {
  query: string;
  exercises: Exercise[];
  error?: string;
};

const BASE = (
  process.env.EXERCISEDB_BASE_URL || "https://www.exercisedb.dev"
).replace(/\/$/, "");
const RAPID_KEY = process.env.RAPIDAPI_KEY;

async function fetchAndNormalize(query: string): Promise<Exercise[]> {
  const url = `${BASE}/api/v1/exercises/search?q=${encodeURIComponent(query)}`;

  const headers: HeadersInit = {};
  if (RAPID_KEY) {
    headers["X-RapidAPI-Key"] = RAPID_KEY;
    try {
      const host = new URL(BASE).host;
      headers["X-RapidAPI-Host"] = host;
    } catch {}
  }

  const res = await fetch(url, { headers, cache: "no-store" });
  if (!res.ok) throw new Error(`Upstream error ${res.status}`);

  const json = await res.json();
  const normalized: Exercise[] = Array.isArray(json.data)
    ? json.data.map((e: any) => ({
        id: String(e.id ?? e._id ?? crypto.randomUUID()),
        exerciseId: e?.exerciseId,
        name: String(e.name ?? "Unknown"),
        gifUrl:
          e.gifUrl ??
          e.imageUrl ??
          (Array.isArray(e.images) ? e.images[0] : undefined),
        imageUrl: e.imageUrl ?? undefined,
        bodyPart:
          e.bodyPart ??
          (Array.isArray(e.bodyParts) ? e.bodyParts[0] : undefined),
        target:
          e.target ??
          (Array.isArray(e.targetMuscles) ? e.targetMuscles[0] : undefined),
        equipment:
          e.equipment ??
          (Array.isArray(e.equipments) ? e.equipments[0] : undefined),
      }))
    : [];

  return normalized.slice(0, 12);
}

/** Server-side search (used by page.tsx for deep link + SSR). */
export async function runSearch(q: string): Promise<SearchState> {
  const query = (q ?? "").trim();
  if (!query) return { query: "", exercises: [] }; // no error on initial/empty view

  try {
    const exercises = await fetchAndNormalize(query);
    return { query, exercises };
  } catch (err: any) {
    return {
      query,
      exercises: [],
      error: err?.message || "Request failed",
    };
  }
}

/** Server Action for the client form. */
export async function searchExercises(
  _prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const q = String(formData.get("q") || "").trim();
  if (!q) {
    return { query: "", exercises: [], error: "Enter a search term." };
  }

  try {
    const exercises = await fetchAndNormalize(q);
    return { query: q, exercises };
  } catch (err: any) {
    return {
      query: q,
      exercises: [],
      error: err?.message || "Request failed",
    };
  }
}
