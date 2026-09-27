 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkouts() {
      const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
      );

      const data = await res.json();

      setWorkouts(data);
      setLoading(false);
    }

    fetchWorkouts();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#171716] px-6 py-12 text-white">
        <p className="text-center text-gray-400">
          Loading workouts...
        </p>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="bg-[#171716] px-6 py-12 text-white"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="mt-2 text-3xl font-bold">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-gray-400">
         Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {workouts.map((workout) => (
          <Link
            key={workout.id}
            href={`/workouts/${workout.id}`}
            className="overflow-hidden rounded-md border border-[#292c34] bg-[#111318] transition hover:border-[#ccff00]"
          >
            {/* Image */}
            <img
              src={workout.image}
              alt={workout.name}
              className="h-70 w-full object-cover"
            ></img>

            {/* Content */}
            <div className="p-4">

              {/* Tags */}
              <div className="mb-3 flex gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="font-bold">
                {workout.name}
              </h3>

              {/* Equipment */}
              <p className="mt-1 text-xs text-gray-400">
                {workout.equipment}
              </p>

              {/* Stats */}
              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>{workout.duration} min</span>
                <span>{workout.caloriesBurned} kcal</span>
                <span>★ {workout.rating}</span>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
