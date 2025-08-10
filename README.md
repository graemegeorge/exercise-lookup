# Exercise Lookup (Next.js 15, Server Actions, Tailwind)

Bare-bones MVP: a single search field that queries ExerciseDB's fuzzy search endpoint and shows:

- exercise name
- example GIF (if available)
- a few helpful fields (body part, target, equipment)

## Stack

- Next.js 15+ (React Server Components)
- Server Actions for API calls
- Native `fetch`
- TypeScript
- Tailwind CSS

## Getting Started

```bash
# 1) Install deps
npm i    # or npm i / yarn

# 2) Configure API base
cp .env.example .env.local
# Default points to exercisedb.dev v1. You can set your own self-host or RapidAPI host.

# 3) Dev
npm dev  # or npm run dev / yarn dev
```

Environment variables:

```
EXERCISEDB_BASE_URL=https://www.exercisedb.dev
# Optional if using RapidAPI-hosted base:
# RAPIDAPI_KEY=your_key
```

## Notes

- The server action calls `/api/v1/exercises/search?q=<term>` on the configured base URL.
- If the response fields differ (e.g., no `gifUrl`), we try `imageUrl` or first `images[]` entry as a fallback.
- This is intentionally minimal: no routing, state management, or caching beyond the default.
