import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  currentStep: number;
}

interface Action {
  setCurrentStep: (step: number) => void;
}

export const useApplicationStore = create<Store & Action>(
  persist(
    devtools((set) => ({
      currentStep: 1,
      setCurrentStep: (step) => set({ currentStep: step }),
    })),
    {
      name: "CD-APPLICATION-STORE",
    },
  ) as StateCreator<Store & Action, [], []>,
);
