import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
    countryCode: string;
}

interface Action {
    setCountryCode: (countryCode: string) => void;
}

export const useIpStore = create<Store & Action>(
    devtools((set) => ({
        countryCode: "",
        setCountryCode: (countryCode) => set({ countryCode }),
    })) as StateCreator<Store & Action, [], []>,
);
