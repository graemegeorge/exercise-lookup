"use server";

import { Exercise } from "@/app/actions";

const BASE = (
  process.env.EXERCISEDB_BASE_URL || "https://www.exercisedb.dev"
).replace(/\/$/, "");
const RAPID_KEY = process.env.RAPIDAPI_KEY;

export async function getExercise(id: string): Promise<Exercise | null> {
  if (!id) return null;

  const url = `${BASE}/api/v1/exercises/${encodeURIComponent(id)}`;

  const headers: HeadersInit = {};
  if (RAPID_KEY) {
    headers["X-RapidAPI-Key"] = RAPID_KEY;
    try {
      headers["X-RapidAPI-Host"] = new URL(BASE).host;
    } catch {}
  }

  const response = await fetch(url, { headers, cache: "no-store" });
  if (!response.ok) throw new Error(`Upstream error ${response.status}`);

  const json = await response.json();

  return { id: crypto.randomUUID(), ...json.data };
}
