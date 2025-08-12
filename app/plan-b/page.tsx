import { BotMessageSquareIcon } from "lucide-react";
import { A, Bullet, Day, Section } from "../components/elements";

export default function PlanPage() {
  return <MyWorkoutPlan />;
}

function MyWorkoutPlan() {
  return (
    <main className="relative min-h-screen text-gray-100 antialiased">
      <div className="mx-auto w-full max-w-3xl pt-4">
        <header className="mb-6 flex flex-col gap-4">
          <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-3xl">
            6-Week Body Recomp Plan
          </h1>
          <h2 className="text-lg text-gray-500 p-0 m-0">Plan B</h2>

          <p className="text-pretty text-sm leading-6 text-gray-400 md:text-base">
            Goal: Flatter waist, stronger shoulders/chest/back, better
            proportions. Approach: 4 gym sessions/week, daily steps, 1-2 HIIT
            sessions, modest calorie deficit, high protein.
          </p>

          <a
            href="https://chatgpt.com/share/689bafb1-a1d0-8001-975d-27233b559dcb"
            target="_blank"
            className="flex gap-2 items-center justify-center py-2 px-4 rounded-md bg-violet-700 hover:bg-violet-600 text-white text-sm w-fit"
          >
            <BotMessageSquareIcon /> Discuss this plan with AI
          </a>
        </header>

        <div className="space-y-4">
          <Section title="Weekly Layout">
            <Day title="Mon — Upper (Chest + Shoulders)">
              <Bullet>
                <A href="/search?q=Dumbbell Bench Press">
                  Dumbbell Bench Press
                </A>{" "}
                — 3x6-10
              </Bullet>
              <Bullet>
                <A href="/search?q=Incline Dumbbell Press">
                  Incline Dumbbell Press
                </A>{" "}
                — 3x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Seated Dumbbell Shoulder Press">
                  Seated Dumbbell Shoulder Press
                </A>{" "}
                — 3x6-10
              </Bullet>
              <Bullet>
                <A href="/search?q=Dumbbell Lateral Raise">
                  Dumbbell Lateral Raise
                </A>{" "}
                — 3x12-20
              </Bullet>
              <Bullet>
                <A href="/search?q=Chest Fly Machine">Machine Chest Fly</A> (or
                cable) — 2x12-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Plank">Plank</A> — 3x40-60s
              </Bullet>
            </Day>

            <Day title="Tue — Lower & Core (Quads bias)">
              <Bullet>
                <A href="/search?q=Leg Press Machine">Leg Press (Machine)</A> —
                3x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Goblet Squat">Goblet Squat (DB)</A> — 3x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Leg Extension Machine">
                  Leg Extension (Machine)
                </A>{" "}
                — 2x12-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Standing Calf Raise Machine">
                  Standing Calf Raise (Machine)
                </A>{" "}
                — 3x10-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Hanging Knee Raise">
                  Hanging Knee Raise / Captain’s Chair
                </A>{" "}
                — 3x10-15
              </Bullet>
            </Day>

            <Day title="Thu — Upper (Back + Arms)">
              <Bullet>
                <A href="/search?q=Lat Pulldown">Lat Pulldown (Machine)</A> —
                3x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Seated Cable Row">
                  Seated Cable/Machine Row
                </A>{" "}
                — 3x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Chest Supported Dumbbell Row">
                  Chest‑Supported DB Row
                </A>{" "}
                — 2x8-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Face Pulls">Face Pulls (Cable)</A> — 2x12-20
              </Bullet>
              <Bullet>
                <A href="/search?q=Dumbbell Curl">DB Curl</A> — 2x10-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Triceps Pushdown">Cable Triceps Pushdown</A>{" "}
                — 2x10-12
              </Bullet>
              <Bullet>
                <A href="/search?q=Side Plank">Side Plank</A> — 2x30-45s/side
              </Bullet>
            </Day>

            <Day title="Fri — Lower & Core (Glutes/Hams bias)">
              <Bullet>
                <A href="/search?q=Dumbbell Romanian Deadlift">
                  DB Romanian Deadlift
                </A>{" "}
                — 3x8-10
              </Bullet>
              <Bullet>
                <A href="/search?q=Bulgarian Split Squat">
                  Bulgarian Split Squat (DB)
                </A>{" "}
                — 2-3x8-12/leg
              </Bullet>
              <Bullet>
                <A href="/search?q=Hamstring Curl Machine">
                  Hamstring Curl (Machine)
                </A>{" "}
                — 3x10-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Seated Calf Raise Machine">
                  Seated Calf Raise (Machine)
                </A>{" "}
                — 3x12-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Back Extension Machine">
                  Back Extension (Machine)
                </A>{" "}
                — 2x12-15
              </Bullet>
              <Bullet>
                <A href="/search?q=Dead Bug Exercise">Dead Bug</A> — 2x8-10/side
                (slow)
              </Bullet>
            </Day>
          </Section>

          {/* Session Rules */}
          <Section title="Session Rules">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>45-60 min. Big lifts rest 90-120s; smaller 60-90s.</li>
              <li>Leave ~2 reps in the tank (RPE 7-8).</li>
              <li>
                Progression: add 1 rep each session; when you hit the top of the
                rep range on all sets, go up to the next DB/pin.
              </li>
            </ul>
          </Section>

          {/* Warm-up & Form Cues */}
          <Section title="Warm‑up">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>5 min brisk walk/bike.</li>
              <li>
                2 warm-up sets on first big lift: ~50% × 8-10, then ~70% × 3-5.
              </li>
            </ul>
          </Section>

          <Section title="Form Cues (Quick)">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Presses: shoulder blades back & down; feet planted.</li>
              <li>
                Rows/Pulldown: lead with elbows; brief squeeze; don’t shrug.
              </li>
              <li>Squat/Goblet: brace; knees track toes; control down.</li>
              <li>RDL: hips back; soft knees; flat back; feel hamstrings.</li>
            </ul>
          </Section>

          {/* Cardio & Steps */}
          <Section title="Cardio & Steps">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Daily steps: 8-12k (brisk). Park walks count.</li>
              <li>
                Easy cardio (Tue/Fri): 20-30 min at conversational pace
                (bike/jog/fast walk).
              </li>
              <li>
                HIIT (Wed or Sat): Warm up 5-8 min → 8-10 rounds of 1 min hard /
                2 min easy → cool down 5 min.
              </li>
            </ul>
          </Section>

          {/* Nutrition */}
          <Section title="Nutrition — Deficit & Macros">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Start calories: Bodyweight (lbs) × 12 per day.</li>
              <li>
                Target loss: 0.5-1.0% bodyweight/week (use 7‑day morning
                average).
              </li>
              <li>
                Adjust weekly: losing too slow → −150-200 kcal; too fast/drained
                → +100-150 kcal.
              </li>
              <li>Protein: 1.8-2.2 g/kg/day (3-4 meals; shakes OK).</li>
              <li>
                Fat: 0.6-0.8 g/kg/day. Carbs: remainder to fuel training/steps.
              </li>
              <li>
                Fiber: 30-40 g/day; veg at most meals. Water: 2-3 L/day.
                Alcohol: 0-2 drinks/week.
              </li>
              <li>
                Supps (optional): Creatine monohydrate 3-5 g/day; Caffeine
                pre‑workout if tolerated.
              </li>
            </ul>
          </Section>

          {/* Meals */}
          <Section title="Meal Templates">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>
                <strong>Breakfasts:</strong> Greek yogurt + whey + berries +
                oats • 3 eggs + 200 g egg whites + spinach + 1-2 slices
                sourdough • Protein oats + banana
              </li>
              <li>
                <strong>Lunches:</strong> Chicken/bean burrito bowl •
                Tuna/ricotta wrap + salad + fruit • Cottage cheese + microwave
                grains + roast veg + olive oil
              </li>
              <li>
                <strong>Dinners:</strong> Salmon + potatoes + greens • 5% beef
                chili + rice • Chicken thigh traybake + couscous + yogurt‑garlic
                sauce
              </li>
              <li>
                <strong>Snacks:</strong> protein shake • jerky • fruit • carrots
                + hummus • rice cakes
              </li>
            </ul>
          </Section>

          {/* Tracking & Progression */}
          <Section title="Tracking & Weekly Adjustments">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Scale: log 7‑day morning average.</li>
              <li>Waist at navel: aim ↓ 4-8 cm over 6 weeks.</li>
              <li>
                Photos: front/side weekly, same light. Log lifts/reps & steps.
              </li>
            </ul>
          </Section>

          <Section title="6‑Week Progression (At a Glance)">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Weeks 1-2: Learn form, live in mid‑rep ranges.</li>
              <li>
                Weeks 3-4: Add a set on big moves if fresh; push toward top of
                ranges.
              </li>
              <li>
                Weeks 5-6: Small load increases; 1 mini rest‑pause set on
                laterals/rear‑delts.
              </li>
            </ul>
          </Section>

          {/* Expected Changes */}
          <Section title="Expected 6‑Week Changes">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Waist: 1-2+ inches smaller (with adherence).</li>
              <li>Shoulders/chest/back: visibly firmer and broader.</li>
              <li>Weight: ~0.5-1.0% bodyweight/week down (mainly fat).</li>
              <li>
                Overall: cleaner shoulder‑to‑waist ratio; posture improved.
              </li>
            </ul>
          </Section>

          {/* Health Note */}
          <Section title="Health Note">
            <p className="text-sm leading-6 text-gray-300">
              If there’s a firm/tender lump behind a nipple or notable
              asymmetry, see a GP to rule out gynecomastia. Otherwise, fat loss
              + incline presses/rows/laterals will address the look.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
