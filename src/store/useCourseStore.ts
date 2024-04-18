import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  selectedCourseId: string;
  isCourse: boolean;
}

interface Action {
  setSelectedCourseId: (id: string) => void;
  setIsCourse: (isCourse: boolean) => void;
}

export const useCourseStore = create<Store & Action>(
  devtools((set) => ({
    selectedCourseId: "",
    isCourse: false,
    setSelectedCourseId: (id) => set({ selectedCourseId: id }),
    setIsCourse: (isCourse) => set({ isCourse }),
  })) as StateCreator<Store & Action, [], []>,
);
