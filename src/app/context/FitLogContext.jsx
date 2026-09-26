"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

function addToPlan(workout) {
    setPlan([...plan, workout]);

    setToast("Added to today's plan");

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function saveWorkout(workout) {
    setSaved([...saved, workout]);

    setToast("Saved for later");

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