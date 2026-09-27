"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../context/FitLogContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const workouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  function handleRemove(id) {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-[#171716] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold">
          MY PLAN
        </h1>

        <p className="mt-2 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <div className="rounded-md bg-[#242423] p-5">
            <p className="text-sm text-gray-400">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-bold">
              {plan.length}
            </p>
          </div>

          <div className="rounded-md bg-[#242423] p-5">
            <p className="text-sm text-gray-400">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-bold">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-md bg-[#242423] p-5">
            <p className="text-sm text-gray-400">
              Calories
            </p>

            <p className="mt-2 text-3xl font-bold">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-full px-5 py-2 font-bold ${
                activeTab === "plan"
                  ? "bg-[#ccff00] text-black"
                  : "border border-gray-600 text-gray-300"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-full px-5 py-2 font-bold ${
                activeTab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "border border-gray-600 text-gray-300"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-gray-600 bg-[#242423] px-3 py-2 text-white"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        {/* Empty State */}
        {workouts.length === 0 && (
          <div className="mt-16 text-center">

            <h2 className="text-2xl font-bold">
              NOTHING HERE YET
            </h2>

            <p className="mt-3 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 font-bold text-black"
            >
              Go to workouts
            </Link>

          </div>
        )}

        {/* Workout List */}
        {workouts.length > 0 && (
          <div className="mt-8 space-y-4">

            {sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-md bg-[#242423] p-4 md:flex-row"
              >

                {/* Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-32 w-full rounded-md object-cover md:w-48"
                />

                {/* Information */}
                <div className="flex-1">

                  <h2 className="text-xl font-bold">
                    {workout.name}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-300">

                    <span>
                      ⏱ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
                    </span>

                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {/* View Details */}
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-md border border-gray-600 px-4 py-2 text-sm"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    <button
                      type="button"
                      onClick={() => markAsDone(workout)}
                      className="rounded-md bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
                    >
                      Mark as Done
                    </button>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => handleRemove(workout.id)}
                      className="rounded-md border border-red-500 px-4 py-2 text-sm text-red-400"
                    >
                      X
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}