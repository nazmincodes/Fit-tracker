
"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

function addToPlan(workout) {
  const alreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  if (alreadyAdded) {
    setToast("Already added to today's plan");

    setTimeout(() => {
      setToast("");
    }, 2000);

    return;
  }

  setPlan((currentPlan) => [...currentPlan, workout]);

  setToast("Added to today's plan");

  setTimeout(() => {
    setToast("");
  }, 2000);
}

function saveWorkout(workout) {
  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  if (alreadySaved) {
    setToast("Already saved for later");

    setTimeout(() => {
      setToast("");
    }, 2000);

    return;
  }

  setSaved((currentSaved) => [...currentSaved, workout]);

  setToast("Saved for later");

  setTimeout(() => {
    setToast("");
  }, 2000);
}
  function removeFromPlan(id) {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );

    setToast("Removed from today's plan");

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function removeFromSaved(id) {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );

    setToast("Removed from saved");

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function markAsDone(workout) {
    setToast(`${workout.name} marked as done`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        toast,
      }}
    >
      {children}

      {toast && (
        <div className="fixed bottom-5 right-5 z-50 rounded-md bg-[#ccff00] px-4 py-3 font-bold text-black">
          {toast}
        </div>
      )}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}

