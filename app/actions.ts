"use server";

export type Exercise = {
  id: string;
  name: string;
  gifUrl?: string;
  imageUrl?: string;
  bodyPart?: string;
  target?: string;
  equipment?: string;
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

export async function searchExercises(
  prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const q = String(formData.get("q") || "").trim();
  if (!q) {
    return { query: "", exercises: [], error: "Enter a search term." };
  }

  const url = `${BASE}/api/v1/exercises/search?q=${encodeURIComponent(q)}`;

  const headers: HeadersInit = {};
  if (RAPID_KEY) {
    headers["X-RapidAPI-Key"] = RAPID_KEY;
    try {
      const host = new URL(BASE).host;
      headers["X-RapidAPI-Host"] = host;
    } catch {}
  }

  try {
    const res = await fetch(url, { headers, cache: "no-store" });

    if (!res.ok) {
      return { query: q, exercises: [], error: `Upstream error ${res.status}` };
    }

    const json = await res.json();

    const normalized: Exercise[] = Array.isArray(json.data)
      ? json.data.map((e: any) => ({
          id: String(e.id ?? e.exerciseId ?? e._id ?? crypto.randomUUID()),
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

    return { query: q, exercises: normalized.slice(0, 12) };
  } catch (err: any) {
    return { query: q, exercises: [], error: err?.message || "Request failed" };
  }
}
