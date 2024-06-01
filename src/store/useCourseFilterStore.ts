import { ICourse } from "@/types/courses";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  refetch: boolean;
  selectedCourseId: string;
  loadingCourseData: boolean;
  isEmpty: boolean;
  courseData: ICourse[];
  totalCourses: number;
  filter: {
    course_name: string;
    country_ids: number[];
    course_level_ids: number[];
    subject_ids: number[];
    intake_month_ids: number[];
    min_max_tuition_fee: number;
    duration: number;
    sort_option: number;
    limit: number;
    page: number;
  };
}

interface Action {
  setRefetch: (refetch: boolean) => void;
  setSelectedCourseId: (id: string) => void;
  setFilter: (filter: Partial<Store["filter"]>) => void;
  setCourseData: (courseData: ICourse[]) => void;
  setLoadingCourseData: (loading: boolean) => void;
  setTotalCourses: (totalCourses: number) => void;
  setIsEmpty: (isEmpty: boolean) => void;
}

export const useCourseFilterStore = create<Store & Action>(
  devtools((set) => ({
    refetch: false,
    selectedCourseId: "",
    loadingCourseData: false,
    courseData: [],
    totalCourses: 0,
    isEmpty: false,
    filter: {
      course_name: "",
      country_ids: [],
      course_level_ids: [],
      subject_ids: [],
      intake_month_ids: [],
      min_max_tuition_fee: 0,
      duration: 0,
      sort_option: 0,
      limit: 20,
      page: 1,
    },
    setRefetch: (refetch) => set(() => ({ refetch })),
    setSelectedCourseId: (id) => set({ selectedCourseId: id }),
    setFilter: (filter) =>
      set((state) => ({ filter: { ...state.filter, ...filter } })),
    setLoadingCourseData: (loading) =>
      set(() => ({ loadingCourseData: loading })),
    setCourseData: (courseData) => set(() => ({ courseData })),
    setTotalCourses: (totalCourses) => set(() => ({ totalCourses })),
    setIsEmpty: (isEmpty) => set(() => ({ isEmpty })),
  })) as StateCreator<Store & Action, [], []>,
);
