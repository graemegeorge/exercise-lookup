import { getExercise } from "@/app/exercise/actions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const exercise = await getExercise(id);

  if (!exercise?.id) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="capitalize text-xl font-bold">{exercise.name}</h1>

      <div className="flex gap-2">
        <ExerciseTags tags={exercise.bodyParts} />
        <ExerciseTags tags={exercise.targetMuscles} />
        <ExerciseTags tags={exercise.secondaryMuscles} />
      </div>

      <div className="flex gap-8">
        {exercise.gifUrl ? (
          <div className="w-[420px] h-[420px]">
            <Image
              src={exercise.gifUrl}
              alt={exercise.name}
              width={420}
              height={420}
              className="object-cover"
              unoptimized
            />
          </div>
        ) : null}

        {exercise.instructions ? (
          <div className="flex flex-col gap-4">
            <h2 className="capitalize text-lg font-bold">Instructions</h2>

            <ol className="flex flex-col gap-2 list-decimal pl-8">
              {exercise.instructions?.map((instruction, i) => {
                const cleanedStep = instruction.replace(
                  /^Step\s*:?\s*\d+\s*:?\s*/i,
                  ""
                );
                return <li key={i}>{cleanedStep}</li>;
              })}
            </ol>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const ExerciseTags = ({ tags }: { tags?: string[] }) => {
  return (
    tags?.map((tag, i) => {
      return (
        <Link
          href={`/search?q=${tag}`}
          className="py-1 px-2 bg-slate-400 text-slate-950 rounded-md text-sm"
          key={i}
        >
          {tag}
        </Link>
      );
    }) || null
  );
};
