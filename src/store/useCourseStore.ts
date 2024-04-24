import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  selectedCourseId: string;
  isCourse: boolean;
  locations: string[];
  programmingLevels: string[];
  subjects: string[];
  tuitionFees: string[];
  intakes: string[];
  durations: string[];
}

interface Action {
  setSelectedCourseId: (id: string) => void;
  setIsCourse: (isCourse: boolean) => void;
  setLocations: (locations: string[]) => void;
  setProgrammingLevels: (programmingLevels: string[]) => void;
  setSubjects: (subjects: string[]) => void;
  setTuitionFees: (tuitionFees: string[]) => void;
  setIntakes: (intakes: string[]) => void;
  setDurations: (durations: string[]) => void;
}

export const useCourseStore = create<Store & Action>(
  devtools((set) => ({
    selectedCourseId: "",
    isCourse: false,
    locations: [],
    programmingLevels: [],
    subjects: [],
    tuitionFees: [],
    intakes: [],
    durations: [],

    setSelectedCourseId: (id) => set({ selectedCourseId: id }),
    setIsCourse: (isCourse) => set({ isCourse }),
    setLocations: (locations) => set({ locations }),
    setProgrammingLevels: (programmingLevels) => set({ programmingLevels }),
    setSubjects: (subjects) => set({ subjects }),
    setTuitionFees: (tuitionFees) => set({ tuitionFees }),
    setIntakes: (intakes) => set({ intakes }),
    setDurations: (durations) => set({ durations }),
  })) as StateCreator<Store & Action, [], []>,
);
