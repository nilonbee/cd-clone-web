import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  locations: string[];
  programmingLevels: string[];
  subjects: string[];
  tuitionFees: string[];
  intakes: string[];
  durations: string[];
}

interface Action {
  setLocations: (locations: string[]) => void;
  setProgrammingLevels: (programmingLevels: string[]) => void;
  setSubjects: (subjects: string[]) => void;
  setTuitionFees: (tuitionFees: string[]) => void;
  setIntakes: (intakes: string[]) => void;
  setDurations: (durations: string[]) => void;
}

export const useCourseStore = create<Store & Action>(
  devtools((set) => ({
    locations: [],
    programmingLevels: [],
    subjects: [],
    tuitionFees: [],
    intakes: [],
    durations: [],

    setLocations: (locations) => set({ locations }),
    setProgrammingLevels: (programmingLevels) => set({ programmingLevels }),
    setSubjects: (subjects) => set({ subjects }),
    setTuitionFees: (tuitionFees) => set({ tuitionFees }),
    setIntakes: (intakes) => set({ intakes }),
    setDurations: (durations) => set({ durations }),
  })) as StateCreator<Store & Action, [], []>,
);
