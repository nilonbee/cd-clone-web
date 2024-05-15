import { IContactInfoObject } from "@/types/contactUs";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  countryCode: string;
  countryData: IContactInfoObject | null;
}

interface Action {
  setCountryCode: (countryCode: string) => void;
  setCountryData: (countryData: IContactInfoObject) => void;
}

export const useIpStore = create<Store & Action>(
  devtools((set) => ({
    countryCode: "LK",
    countryData: null,
    setCountryCode: (countryCode) => set({ countryCode }),
    setCountryData: (countryData) => set({ countryData }),
  })) as StateCreator<Store & Action, [], []>,
);
