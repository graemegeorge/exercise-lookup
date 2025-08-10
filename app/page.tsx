import Link from "next/link";
import { SearchForm } from "./components/SearchForm";

export default async function Page() {
  return (
    <main>
      <SearchForm />
      <hr className="my-12" />
      <MyWorkoutPlan />
    </main>
  );
}

function MyWorkoutPlan() {
  return (
    <main className="relative min-h-screen text-gray-100 antialiased">
      <div className="mx-auto w-full max-w-3xl pt-4">
        <header className="mb-6">
          <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-3xl">
            6‑Week Proportion & Trunk Reduction Plan
          </h1>
          <p className="mt-4 text-pretty text-sm leading-6 text-gray-400 md:text-base">
            Goal: Tighten trunk fat while building shoulders, neck, and balanced
            physique. Approach: 4 workouts/week (upper/lower split), 3 cardio
            sessions/week, 500‑calorie deficit, high protein.
          </p>
        </header>

        <div className="space-y-4">
          <Section title="Weekly Layout">
            <Day title="Mon — Upper (Shoulder Focus)">
              <Bullet>
                <A href="/?q=Overhead Press">Overhead Press</A> — 4x6-8
              </Bullet>
              <Bullet>
                <A href="/?q=Incline Dumbbell Press">Incline Dumbbell Press</A>{" "}
                — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Pull ups">Pull‑ups or Lat Pulldown</A> — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Lateral Raises">Lateral Raises</A> — 3x12-15
              </Bullet>
              <Bullet>
                <A href="/?q=Face Pulls">Face Pulls</A> — 3x12-15
              </Bullet>
              <Bullet>
                <A href="/?q=Neck Harness">Neck Harness Extensions</A> — 3x15-20
              </Bullet>
              <Bullet>
                <A href="/?q=Hanging Leg raises">Hanging Leg Raises</A> —
                3x12-15
              </Bullet>
            </Day>

            <Day title="Tue — Lower & Core">
              <Bullet>
                <A href="/?q=Goblet Squats">Goblet Squats</A> — 4x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Romanian Deadlift">Romanian Deadlift</A> — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Step-ups">Step‑ups</A> — 3x10 each leg
              </Bullet>
              <Bullet>
                <A href="/?q=Pallof Press">Pallof Press</A> — 3x10/side
              </Bullet>
              <Bullet>
                <A href="/?q=Ab Wheel Rollouts">Ab Wheel Rollouts</A> — 3x12-15
              </Bullet>
            </Day>

            <Day title="Thu — Upper (Back & Width Focus)">
              <Bullet>
                <A href="/?q=Barbell Row">Barbell Row</A> — 4x6-8
              </Bullet>
              <Bullet>
                <A href="/?q=Flat Dumbbell Press">Flat Dumbbell Press</A> —
                3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Arnold Press">Arnold Press</A> — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Lateral Raises">Lateral Raises</A> — 3x12-15
              </Bullet>
              <Bullet>
                <A href="/?q=Neck Curls">Neck Curls</A> — 3x15-20
              </Bullet>
              <Bullet>
                <A href="/?q=Plank">Plank</A> — 3x60 sec
              </Bullet>
            </Day>

            <Day title="Sat — Lower & Shoulders">
              <Bullet>
                <A href="/?q=Split Squats">Split Squats</A> — 4x8 each leg
              </Bullet>
              <Bullet>
                <A href="/?q=Romanian Deadlift">Romanian Deadlift</A> — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/?q=Overhead Press">Overhead Press</A> — 3x6-8
              </Bullet>
              <Bullet>
                <A href="/?q=Lateral Raises">Lateral Raises (drop set)</A> —
                3x12-15 + 8-10 light reps
              </Bullet>
              <Bullet>
                <A href="/?q=Hanging Leg">Hanging Leg Raises</A> — 3x12-15
              </Bullet>
            </Day>
          </Section>

          {/* Cardio */}
          <Section title="Cardio">
            <p className="text-sm leading-6 text-gray-300">
              Wed, Fri, Sun: 20-30 min brisk walk, incline treadmill, or cycling
              (HR 110-130 bpm).
            </p>
          </Section>

          {/* Nutrition */}
          <Section title="Nutrition">
            <p className="text-sm leading-6 text-gray-300">
              500‑calorie deficit. Protein ~2g/kg bodyweight. Macros: 30-35%
              protein, 40-45% carbs, 20-25% fats. Meals: whole foods, avoid
              regular processed junk & excess sugar.
            </p>
          </Section>

          {/* Expected Changes */}
          <Section title="Expected 6‑Week Changes">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Waist: 1-2 inches smaller</li>
              <li>Shoulders/neck: visibly more developed</li>
              <li>Weight: 0.5-1 kg/week loss (mostly fat)</li>
              <li>Overall: improved shoulder‑to‑waist ratio</li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}

/* ——— UI bits ——— */
function Section({
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

function Day({
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="marker:text-gray-600 flex justify-between">
      <span>{children}</span> <input type="checkbox" className="w-10" />
    </li>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 whitespace-pre-wrap text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
    >
      {children}
    </Link>
  );
}
