"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFitLog } from "../../context/FitLogContext";

export default function WorkoutDetails() {
 const { addToPlan, saveWorkout } = useFitLog();
  const { id } = useParams();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkout() {
      const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
      );

      const data = await res.json();

      setWorkout(data);
      setLoading(false);
    }

    fetchWorkout();
  }, [id]);

  if (loading) {
    return (
      <div className=" min-h-screen bg-[#171716] flex items-center justify-center text-white">
        <p className="text-gray-400">Loading workout...</p>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#171716] flex items-center justify-center text-white">
        <p>Workout not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#171716] px-6 py-12 text-white">
      
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

        {/* Left - Image */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="pt-5 h-full max-h-[550px] w-full rounded-md object-cover"
          />
        </div>

        {/* Right - Details */}
        <div>

          {/* Muscle Groups */}
          <div className="pt-5 mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-400">
            {workout.description}
          </p>

          {/* Workout Specs */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            <div>
              <p className="text-xs text-gray-500">Equipment</p>
              <p className="mt-1">{workout.equipment}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className="mt-1">{workout.difficulty}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Sets</p>
              <p className="mt-1">{workout.sets}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Reps</p>
              <p className="mt-1">{workout.reps}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="mt-1">{workout.duration} min</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Calories</p>
              <p className="mt-1">{workout.caloriesBurned} kcal</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Rating</p>
              <p className="mt-1">★ {workout.rating}</p>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">
              Instructions
            </h2>

            <div className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <span className="font-bold text-[#ccff00]">
                    {index + 1}.
                  </span>

                  <p className="text-sm text-gray-400">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
        {/* Buttons */}
<div className="mt-8 flex flex-wrap gap-3">
<button
  type="button"
  onClick={() => addToPlan(workout)}
  className="rounded-md bg-[#ccff00] px-5 py-3 font-bold text-black"
>
  Add to today's plan
</button>

 <button
  type="button"
  onClick={() => saveWorkout(workout)}
  className="rounded-md border px-5 py-3 font-bold text-[#ccff00]"
>
  Save for later
</button>
</div>
</div>
</div>
</main>
 );
}